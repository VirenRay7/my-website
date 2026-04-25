const movies = [
  {
    title: "Tu Yaa Mai",
    desc: "Romantic drama",
    img: "https://m.media-amazon.com/images/M/MV5BOGIzNWVkODctYWNmZS00MGU2LWI3ZGItY2Q0YTAyYzEzMDA5XkEyXkFqcGc@._V1_.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/Tu-Yaa-Main_Cover-3093ba50-f82d-11f0-9f0c-9149a6853b4a.jpg",
    mobileBg: "https://m.media-amazon.com/images/M/MV5BOGIzNWVkODctYWNmZS00MGU2LWI3ZGItY2Q0YTAyYzEzMDA5XkEyXkFqcGc@._V1_.jpg",
    download: "https://drive.google.com/uc?export=download&id=1rgp4VFkFj7tSnIw_g6p_0FH4U0PhoPfk&confirm=t"
  },
  {
    title: "Vikki Vidya Ka Wo Wala Video",
    desc: "Comedy drama",
    img: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fd%2Fgracenote%2Fdba671f9ddca9c389fe844253097f920.jpg",
    bg: "https://www.bollywoodhungama.com/wp-content/uploads/2023/09/Vicky-Vidya-Ka-Woh-Wala-Video.jpg",
    mobileBg: "https://m.media-amazon.com/images/M/MV5BNDViYjk4ZmYtNjhhYS00OGQ0LWFlNTktZTYwMzcyZDUwODcwXkEyXkFqcGc@._V1_.jpg",
    download: "https://drive.google.com/uc?export=download&id=1GDaTKAfF7VFvimAv4hjKl3QuIskzTu0i&confirm=t"
  },
  {
    title: "Toaster",
    desc: "Drama",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7XeD-CoXGXKmRY9B2Bu3QFfkafgMf3ckTA&s",
    bg: "https://images.news18.com/webstories/uploads/2025/02/WhatsApp-Image-2025-02-04-at-11.14.35-AM-2025-02-cd0024caeab78dd55ae097a1a8c26bdf.jpeg",
    mobileBg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7XeD-CoXGXKmRY9B2Bu3QFfkafgMf3ckTA&s",
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
    img: "https://resizing.flixster.com/Di4fMeRB5zhrinRwscOj02oiXBc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhjZDMwMzM1LTVlN2EtNGJhZC05MGExLTk1NWQwNzI5YjdjNy5qcGc=",
    bg: "https://m.media-amazon.com/images/M/MV5BYjhiZjE5YTEtZjFlNi00ZjIyLThmYTgtNzYyMTUzODA3ODk1XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
    mobileBg: "https://resizing.flixster.com/Di4fMeRB5zhrinRwscOj02oiXBc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhjZDMwMzM1LTVlN2EtNGJhZC05MGExLTk1NWQwNzI5YjdjNy5qcGc=",
    download: "https://drive.google.com/uc?export=download&id=1RS3digAMWsQy4feLTMVJUFstcbWFNhGy&confirm=t"
  },
  {
    title: "Bhool Chuk Maaf",
    desc: "Comedy",
    img: "https://m.media-amazon.com/images/M/MV5BZTM5YTA2NWItNzc5Mi00YmY1LWFhNTQtYmNmZTMxNTg0NzA1XkEyXkFqcGc@._V1_.jpg",
    bg: "https://m.media-amazon.com/images/S/pv-target-images/79c196e41584b84b32e5e63e9f26ad0af46d160ad0192c67367c7dfc7a288043.jpg",
    mobileBg: "https://m.media-amazon.com/images/M/MV5BZTM5YTA2NWItNzc5Mi00YmY1LWFhNTQtYmNmZTMxNTg0NzA1XkEyXkFqcGc@._V1_.jpg",
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
