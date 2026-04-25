const movies = [
  {
    title: "Tu Yaa Mai",
    desc: "Romantic drama",
    img: "https://via.placeholder.com/300x450",
    bg: "https://via.placeholder.com/1200x700",
    mobileBg: "https://via.placeholder.com/600x900",
    download: "https://drive.google.com/uc?export=download&id=1rgp4VFkFj7tSnIw_g6p_0FH4U0PhoPfk&confirm=t"
  },
  {
    title: "Vikki Vidya Ka Wo Wala Video",
    desc: "Comedy drama",
    img: "https://via.placeholder.com/300x450",
    bg: "https://via.placeholder.com/1200x700",
    mobileBg: "https://via.placeholder.com/600x900",
    download: "https://drive.google.com/uc?export=download&id=1GDaTKAfF7VFvimAv4hjKl3QuIskzTu0i&confirm=t"
  },
  {
    title: "Toaster",
    desc: "Drama",
    img: "https://via.placeholder.com/300x450",
    bg: "https://via.placeholder.com/1200x700",
    mobileBg: "https://via.placeholder.com/600x900",
    download: "https://drive.google.com/uc?export=download&id=1J8JFg6GKy7C6UOUckuX1zjf8fAJ8aBUx&confirm=t"
  },
  {
    title: "Border 2",
    desc: "War drama",
    img: "https://m.media-amazon.com/images/M/MV5BNjQ5MzQ5ZDAtOTlkMi00YmIwLWI3MzctZGM5OGQ5OWU2MjJiXkEyXkFqcGc@._V1_.jpg",
    bg: "https://assets-in.bmscdn.com/discovery-catalog/events/et00401449-wczungsrpd-landscape.jpg",
    mobileBg: "https://m.media-amazon.com/images/M/MV5BNjQ5MzQ5ZDAtOTlkMi00YmIwLWI3MzctZGM5OGQ5OWU2MjJiXkEyXkFqcGc@._V1_.jpg",
    download: "https://drive.google.com/uc?export=download&id=1tLr92d-VxnYHwijp4aLYNzL6W4pifIzj&confirm=t"
  },
  {
    title: "Badhaai Do",
    desc: "Comedy",
    img: "https://via.placeholder.com/300x450",
    bg: "https://via.placeholder.com/1200x700",
    mobileBg: "https://via.placeholder.com/600x900",
    download: "https://drive.google.com/uc?export=download&id=1RS3digAMWsQy4feLTMVJUFstcbWFNhGy&confirm=t"
  },
  {
    title: "Bhool Chuk Maaf",
    desc: "Comedy",
    img: "https://via.placeholder.com/300x450",
    bg: "https://via.placeholder.com/1200x700",
    mobileBg: "https://via.placeholder.com/600x900",
    download: "https://drive.google.com/uc?export=download&id=1lqYkIgy_NKYXvoqS7ZR0UmeUH0tZS8eN&confirm=t"
  }
];

// ─── HERO ─────────────────────────────────────────
const hero      = document.getElementById("hero");
const heroTitle = document.getElementById("heroTitle");
const heroDesc  = document.getElementById("heroDesc");
const heroBtn   = document.getElementById("heroBtn");

const isMobile = () => window.innerWidth <= 480;

function loadHero(movie) {
  const bg = isMobile() && movie.mobileBg ? movie.mobileBg : movie.bg;
  hero.style.backgroundImage = `url('${bg}')`;
  heroTitle.textContent = movie.title;
  heroDesc.textContent  = movie.desc;
  heroBtn.onclick = () => window.open(movie.download, "_blank");
}

// swap bg on resize without reloading cards
let currentHeroMovie = movies[0];
loadHero(currentHeroMovie);

window.addEventListener("resize", () => loadHero(currentHeroMovie));

// ─── MOVIES ───────────────────────────────────────
const container = document.getElementById("movieContainer");

function loadMovies(list) {
  container.innerHTML = "";

  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}">
      <div class="overlay">
        <h4>${movie.title}</h4>
        <button onclick="event.stopPropagation(); window.open('${movie.download}', '_blank')">
          ⬇ Download
        </button>
      </div>
    `;

    card.onclick = () => {
      currentHeroMovie = movie;
      loadHero(movie);
    };

    container.appendChild(card);
  });
}

loadMovies(movies);

// ─── SEARCH ───────────────────────────────────────
document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(val));
  loadMovies(filtered);
});

// ─── SCROLL ───────────────────────────────────────
function scrollRow(dir) {
  container.scrollBy({ left: dir * 400, behavior: "smooth" });
}
