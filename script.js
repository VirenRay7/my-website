// ─── HERO ─────────────────────────────────────────
const hero             = document.getElementById("hero");
const heroTrailerWrap  = document.getElementById("heroTrailerWrap");
const heroPoster       = document.getElementById("heroPoster");
const heroTitle        = document.getElementById("heroTitle");
const heroDesc         = document.getElementById("heroDesc");
const heroBtn          = document.getElementById("heroBtn");
const volumeWrap       = document.getElementById("volumeWrap");
const volumeSlider     = document.getElementById("volumeSlider");

let ytPlayer = null;
let isMuted  = true;

// inject YouTube IFrame API once
const ytScript = document.createElement("script");
ytScript.src   = "https://www.youtube.com/iframe_api";
document.head.appendChild(ytScript);

window.onYouTubeIframeAPIReady = function() {
  // if a movie was queued before API loaded, create player now
  if (window._pendingVideoId) createYTPlayer(window._pendingVideoId);
};

function getMuteBtn() { return document.getElementById("muteBtn"); }

function toggleMute() {
  if (!ytPlayer) return;
  const btn = getMuteBtn();
  if (isMuted) {
    ytPlayer.unMute();
    ytPlayer.setVolume(100);
    volumeSlider.value = 100;
    isMuted = false;
    if (btn) btn.textContent = "🔊";
  } else {
    ytPlayer.mute();
    volumeSlider.value = 0;
    isMuted = true;
    if (btn) btn.textContent = "🔇";
  }
}

function setVolume(val) {
  if (!ytPlayer) return;
  const btn = getMuteBtn();
  const v = parseInt(val);
  ytPlayer.setVolume(v);
  if (v === 0) {
    ytPlayer.mute();
    isMuted = true;
    if (btn) btn.textContent = "🔇";
  } else {
    ytPlayer.unMute();
    isMuted = false;
    if (btn) btn.textContent = v < 50 ? "🔉" : "🔊";
  }
}

function createYTPlayer(videoId) {
  window._pendingVideoId = null;

  // clear wrapper and add fresh div for YT to replace
  heroTrailerWrap.innerHTML = '<div id="ytPlayerEl"></div>';

  ytPlayer = new YT.Player("ytPlayerEl", {
    videoId,
    playerVars: {
      autoplay: 1, mute: 1, controls: 0,
      rel: 0, modestbranding: 1,
      loop: 1, playlist: videoId, playsinline: 1
    },
    events: {
      onReady: e => e.target.playVideo()
    }
  });
}

function loadHero(movie) {
  heroTitle.textContent = movie.title;
  heroDesc.textContent  = movie.desc;
  heroBtn.onclick = () => window.open(movie.download, "_blank");

  if (ytPlayer) { ytPlayer.destroy(); ytPlayer = null; }

  if (movie.trailer) {
    const videoId = movie.trailer.split("/embed/")[1]?.split("?")[0];
    if (!videoId) return;

    heroPoster.style.display      = "none";
    heroTrailerWrap.style.display = "block";
    volumeWrap.style.display      = "flex";
    isMuted                       = true;
    volumeSlider.value            = 0;
    const btn = getMuteBtn();
    if (btn) btn.textContent = "🔇";

    if (typeof YT !== "undefined" && YT.Player) {
      createYTPlayer(videoId);
    } else {
      // API not ready yet — queue it
      window._pendingVideoId = videoId;
    }
  } else {
    heroTrailerWrap.style.display = "none";
    heroTrailerWrap.innerHTML     = "";
    volumeWrap.style.display      = "none";
    heroPoster.src                = movie.img;
    heroPoster.style.display      = "block";
  }
}

const firstTrending = movies.find(m => m.category === "trending");
if (firstTrending) loadHero(firstTrending);

// ─── FLOATING EXPANDED CARD ───────────────────────
let floatCard    = null;
let floatTimer   = null;
let hideTimer    = null;
let floatAnchor  = null;
let scrollRafId  = null;

function removeFloat() {
  if (floatCard) {
    floatCard.style.opacity   = "0";
    floatCard.style.transform = "scale(0.95)";
    setTimeout(() => { floatCard && floatCard.remove(); floatCard = null; floatAnchor = null; }, 180);
  }
}

function positionFloat() {
  if (!floatCard || !floatAnchor) return;
  const rect   = floatAnchor.getBoundingClientRect();
  const W      = 360;
  const fcH    = floatCard.offsetHeight || 280;
  const margin = 8;

  let left = rect.left + rect.width / 2 - W / 2;
  left = Math.max(margin, Math.min(left, window.innerWidth - W - margin));

  let top = rect.top - fcH / 2 + rect.height / 2;
  top = Math.max(60 + margin, Math.min(top, window.innerHeight - fcH - margin));

  floatCard.style.left = left + "px";
  floatCard.style.top  = top  + "px";
}

function onScrollFloat() {
  if (!floatCard) return;
  cancelAnimationFrame(scrollRafId);
  scrollRafId = requestAnimationFrame(positionFloat);
}

window.addEventListener("scroll", onScrollFloat, { passive: true });

function showFloat(movie, anchor) {
  clearTimeout(hideTimer);
  if (floatCard) { floatCard.remove(); floatCard = null; }

  floatAnchor = anchor;
  const W      = 360;
  const baseUrl = movie.trailer ? movie.trailer.split("?")[0] : "";
  const src     = baseUrl
    ? `${baseUrl}?autoplay=1&mute=1&rel=0&modestbranding=1&loop=1&playlist=${baseUrl.split("/").pop()}`
    : "";

  const fc = document.createElement("div");
  fc.classList.add("float-card");
  fc.innerHTML = `
    <div class="float-video">
      ${src
        ? `<iframe id="float-iframe" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
        : `<img src="${movie.bg || movie.img}" alt="${movie.title}">`
      }
    </div>
    <div class="float-info">
      <h4>${movie.title}</h4>
      <p>${movie.desc}</p>
      <button onclick="event.stopPropagation(); window.open('${movie.download}','_blank')">⬇ Download</button>
    </div>
  `;

  fc.style.width = W + "px";
  document.body.appendChild(fc);
  floatCard = fc;

  positionFloat();

  requestAnimationFrame(() => {
    fc.style.opacity   = "1";
    fc.style.transform = "scale(1)";
  });

  if (src) {
    setTimeout(() => {
      const iframe = fc.querySelector("#float-iframe");
      if (iframe) iframe.src = src;
    }, 1000);
  }

  fc.addEventListener("mouseenter", () => clearTimeout(hideTimer));
  fc.addEventListener("mouseleave", () => {
    hideTimer = setTimeout(removeFloat, 200);
  });
}

// ─── BUILD CARD ───────────────────────────────────
function createCard(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");
  card.innerHTML = `
    <img src="${movie.bg || movie.img}" alt="${movie.title}">
    <div class="overlay">
      <h4>${movie.title}</h4>
      <button onclick="event.stopPropagation(); window.open('${movie.download}', '_blank')">
        ⬇ Download
      </button>
    </div>
  `;

  card.addEventListener("mouseenter", () => {
    floatTimer = setTimeout(() => showFloat(movie, card), 1200);
  });

  card.addEventListener("mouseleave", () => {
    clearTimeout(floatTimer);
    hideTimer = setTimeout(removeFloat, 200);
  });

  card.onclick = () => loadHero(movie);
  return card;
}

// ─── BUILD CATEGORY ROWS ──────────────────────────
const main = document.getElementById("categoriesContainer");

categories.forEach(cat => {
  const list = movies.filter(m => m.category === cat.id);
  if (!list.length) return;

  const rowId = `row-${cat.id}`;

  const section = document.createElement("section");
  section.classList.add("row");
  section.innerHTML = `
    <div class="row-header">
      <h2>${cat.label}</h2>
      <a href="category.html?cat=${cat.id}" class="see-all">See All</a>
    </div>
    <div class="row-wrapper">
      <button class="scroll-btn left" onclick="scrollCat('${rowId}', -1)">❮</button>
      <div class="movie-row" id="${rowId}"></div>
      <button class="scroll-btn right" onclick="scrollCat('${rowId}', 1)">❯</button>
    </div>
  `;

  main.appendChild(section);

  const container = section.querySelector(`#${rowId}`);
  list.forEach(movie => container.appendChild(createCard(movie)));
});

// ─── SEARCH ───────────────────────────────────────
function doSearch() {
  const val = document.getElementById("search").value.trim();
  if (val) window.location.href = `search.html?q=${encodeURIComponent(val)}`;
}

document.getElementById("search").addEventListener("keydown", e => {
  if (e.key === "Enter") doSearch();
});

// ─── SCROLL ───────────────────────────────────────
function scrollCat(rowId, dir) {
  document.getElementById(rowId).scrollBy({ left: dir * 400, behavior: "smooth" });
}
