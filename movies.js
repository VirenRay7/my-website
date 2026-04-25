const movies = [
  {
    title: "Tu Yaa Mai",
    desc: "Romantic, drama",
    category: "trending",
    img: "https://m.media-amazon.com/images/M/MV5BOGIzNWVkODctYWNmZS00MGU2LWI3ZGItY2Q0YTAyYzEzMDA5XkEyXkFqcGc@._V1_.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/Tu-Yaa-Main_Cover-3093ba50-f82d-11f0-9f0c-9149a6853b4a.jpg",
    mobileBg: "https://m.media-amazon.com/images/M/MV5BOGIzNWVkODctYWNmZS00MGU2LWI3ZGItY2Q0YTAyYzEzMDA5XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/7eJjGA2pTe4?si=wo55oiNAVH_Fj2WP?autoplay=1&mute=1",
    download: "https://drive.google.com/uc?export=download&id=1rgp4VFkFj7tSnIw_g6p_0FH4U0PhoPfk&confirm=t"
  },
  {
    title: "Tu Yaa Mai",
    desc: "Romantic, drama",
    category: "drama",
    img: "https://m.media-amazon.com/images/M/MV5BOGIzNWVkODctYWNmZS00MGU2LWI3ZGItY2Q0YTAyYzEzMDA5XkEyXkFqcGc@._V1_.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/Tu-Yaa-Main_Cover-3093ba50-f82d-11f0-9f0c-9149a6853b4a.jpg",
    mobileBg: "https://m.media-amazon.com/images/M/MV5BOGIzNWVkODctYWNmZS00MGU2LWI3ZGItY2Q0YTAyYzEzMDA5XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/7eJjGA2pTe4?si=wo55oiNAVH_Fj2WP?autoplay=1&mute=1",
    download: "https://drive.google.com/uc?export=download&id=1rgp4VFkFj7tSnIw_g6p_0FH4U0PhoPfk&confirm=t"
  },
  {
    title: "Vikki Vidya Ka Wo Wala Video",
    desc: "Comedy, drama",
    category: "comedy",
    img: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fd%2Fgracenote%2Fdba671f9ddca9c389fe844253097f920.jpg",
    bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-N4ceQ4Dv9omUERicyoRNIYpZhb4EW8nW_Q&s",
    mobileBg: "https://m.media-amazon.com/images/M/MV5BNDViYjk4ZmYtNjhhYS00OGQ0LWFlNTktZTYwMzcyZDUwODcwXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/4liP09haI9g?si=KAkX_zq02d9ZSV9H?autoplay=1&mute=1",
    download: "https://drive.google.com/uc?export=download&id=1GDaTKAfF7VFvimAv4hjKl3QuIskzTu0i&confirm=t"
  },
  {
    title: "Vikki Vidya Ka Wo Wala Video",
    desc: "Comedy, drama",
    category: "drama",
    img: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fd%2Fgracenote%2Fdba671f9ddca9c389fe844253097f920.jpg",
    bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-N4ceQ4Dv9omUERicyoRNIYpZhb4EW8nW_Q&s",
    mobileBg: "https://m.media-amazon.com/images/M/MV5BNDViYjk4ZmYtNjhhYS00OGQ0LWFlNTktZTYwMzcyZDUwODcwXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/4liP09haI9g?si=KAkX_zq02d9ZSV9H?autoplay=1&mute=1",
    download: "https://drive.google.com/uc?export=download&id=1GDaTKAfF7VFvimAv4hjKl3QuIskzTu0i&confirm=t"
  },
  {
    title: "Toaster",
    desc: "Comedy, drama",
    category: "drama",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7XeD-CoXGXKmRY9B2Bu3QFfkafgMf3ckTA&s",
    bg: "https://lehren.com/wp-content/uploads/2026/04/TOASTER-Movie-Review.jpg",
    mobileBg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7XeD-CoXGXKmRY9B2Bu3QFfkafgMf3ckTA&s",
    trailer: "https://www.youtube.com/embed/h1Q_Oykycns?si=66n-l_RnzrRHsce7?autoplay=1&mute=1",
    download: "https://drive.google.com/uc?export=download&id=1J8JFg6GKy7C6UOUckuX1zjf8fAJ8aBUx&confirm=t"
  },
  {
    title: "Toaster",
    desc: "Comedy, drama",
    category: "trending",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7XeD-CoXGXKmRY9B2Bu3QFfkafgMf3ckTA&s",
    bg: "https://lehren.com/wp-content/uploads/2026/04/TOASTER-Movie-Review.jpg",
    mobileBg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7XeD-CoXGXKmRY9B2Bu3QFfkafgMf3ckTA&s",
    trailer: "https://www.youtube.com/embed/h1Q_Oykycns?si=66n-l_RnzrRHsce7?autoplay=1&mute=1",
    download: "https://drive.google.com/uc?export=download&id=1J8JFg6GKy7C6UOUckuX1zjf8fAJ8aBUx&confirm=t"
  },
  {
    title: "Toaster",
    desc: "Comedy, drama",
    category: "comedy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7XeD-CoXGXKmRY9B2Bu3QFfkafgMf3ckTA&s",
    bg: "https://lehren.com/wp-content/uploads/2026/04/TOASTER-Movie-Review.jpg",
    mobileBg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7XeD-CoXGXKmRY9B2Bu3QFfkafgMf3ckTA&s",
    trailer: "https://www.youtube.com/embed/h1Q_Oykycns?si=66n-l_RnzrRHsce7?autoplay=1&mute=1",
    download: "https://drive.google.com/uc?export=download&id=1J8JFg6GKy7C6UOUckuX1zjf8fAJ8aBUx&confirm=t"
  },
  {
    title: "Border 2",
    desc: "War, drama",
    category: "action",
    img: "https://m.media-amazon.com/images/M/MV5BNjQ5MzQ5ZDAtOTlkMi00YmIwLWI3MzctZGM5OGQ5OWU2MjJiXkEyXkFqcGc@._V1_.jpg",
    bg: "https://assets-in.bmscdn.com/discovery-catalog/events/et00401449-wczungsrpd-landscape.jpg",
    mobileBg: "https://m.media-amazon.com/images/M/MV5BNjQ5MzQ5ZDAtOTlkMi00YmIwLWI3MzctZGM5OGQ5OWU2MjJiXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/XXWFhs84tkQ?si=8eEgn5gDJMhBmH0o?autoplay=1&mute=1",
    download: "https://drive.google.com/uc?export=download&id=1ouk4n03xFDgZ288FCiA_WfXiI7WvP3SQ&confirm=t"
  },
  {
    title: "Border 2",
    desc: "War, drama",
    category: "drama",
    img: "https://m.media-amazon.com/images/M/MV5BNjQ5MzQ5ZDAtOTlkMi00YmIwLWI3MzctZGM5OGQ5OWU2MjJiXkEyXkFqcGc@._V1_.jpg",
    bg: "https://assets-in.bmscdn.com/discovery-catalog/events/et00401449-wczungsrpd-landscape.jpg",
    mobileBg: "https://m.media-amazon.com/images/M/MV5BNjQ5MzQ5ZDAtOTlkMi00YmIwLWI3MzctZGM5OGQ5OWU2MjJiXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/XXWFhs84tkQ?si=8eEgn5gDJMhBmH0o?autoplay=1&mute=1",
    download: "https://drive.google.com/uc?export=download&id=1ouk4n03xFDgZ288FCiA_WfXiI7WvP3SQ&confirm=t"
  },
  {
    title: "Badhaai Do",
    desc: "Comedy, drama",
    category: "comedy",
    img: "https://resizing.flixster.com/Di4fMeRB5zhrinRwscOj02oiXBc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhjZDMwMzM1LTVlN2EtNGJhZC05MGExLTk1NWQwNzI5YjdjNy5qcGc=",
    bg: "https://images.jansatta.com/2022/01/bhumi-pednekar.jpg",
    mobileBg: "https://resizing.flixster.com/Di4fMeRB5zhrinRwscOj02oiXBc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhjZDMwMzM1LTVlN2EtNGJhZC05MGExLTk1NWQwNzI5YjdjNy5qcGc=",
    trailer: "https://www.youtube.com/embed/hjxoPh4DM_A?si=UUYW0_n-gkVX_WcC?autoplay=1&mute=1",
    download: "https://drive.google.com/uc?export=download&id=1RS3digAMWsQy4feLTMVJUFstcbWFNhGy&confirm=t"
  },
  {
    title: "Badhaai Do",
    desc: "Comedy, drama",
    category: "drama",
    img: "https://resizing.flixster.com/Di4fMeRB5zhrinRwscOj02oiXBc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhjZDMwMzM1LTVlN2EtNGJhZC05MGExLTk1NWQwNzI5YjdjNy5qcGc=",
    bg: "https://images.jansatta.com/2022/01/bhumi-pednekar.jpg",
    mobileBg: "https://resizing.flixster.com/Di4fMeRB5zhrinRwscOj02oiXBc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhjZDMwMzM1LTVlN2EtNGJhZC05MGExLTk1NWQwNzI5YjdjNy5qcGc=",
    trailer: "https://www.youtube.com/embed/hjxoPh4DM_A?si=UUYW0_n-gkVX_WcC?autoplay=1&mute=1",
    download: "https://drive.google.com/uc?export=download&id=1RS3digAMWsQy4feLTMVJUFstcbWFNhGy&confirm=t"
  },
  {
    title: "Bhool Chuk Maaf",
    desc: "Comedy, drama",
    category: "comedy",
    img: "https://m.media-amazon.com/images/M/MV5BZTM5YTA2NWItNzc5Mi00YmY1LWFhNTQtYmNmZTMxNTg0NzA1XkEyXkFqcGc@._V1_.jpg",
    bg: "https://i.ytimg.com/vi/8E_IeWynvnc/maxresdefault.jpg",
    mobileBg: "https://m.media-amazon.com/images/M/MV5BZTM5YTA2NWItNzc5Mi00YmY1LWFhNTQtYmNmZTMxNTg0NzA1XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/8E_IeWynvnc?si=UTmexD-jC55mdN6n?autoplay=1&mute=1",
    download: "https://drive.google.com/uc?export=download&id=1lqYkIgy_NKYXvoqS7ZR0UmeUH0tZS8eN&confirm=t"
  },
  {
    title: "Bhool Chuk Maaf",
    desc: "Comedy, drama",
    category: "drama",
    img: "https://m.media-amazon.com/images/M/MV5BZTM5YTA2NWItNzc5Mi00YmY1LWFhNTQtYmNmZTMxNTg0NzA1XkEyXkFqcGc@._V1_.jpg",
    bg: "https://i.ytimg.com/vi/8E_IeWynvnc/maxresdefault.jpg",
    mobileBg: "https://m.media-amazon.com/images/M/MV5BZTM5YTA2NWItNzc5Mi00YmY1LWFhNTQtYmNmZTMxNTg0NzA1XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/8E_IeWynvnc?si=UTmexD-jC55mdN6n?autoplay=1&mute=1",
    download: "https://drive.google.com/uc?export=download&id=1lqYkIgy_NKYXvoqS7ZR0UmeUH0tZS8eN&confirm=t"
  },
];

// Category display names
const categories = [
  { id: "trending", label: "Trending Now" },
  { id: "comedy",   label: "Comedy"       },
  { id: "action",   label: "Action"       },
  { id: "drama",    label: "Drama"        },
];
