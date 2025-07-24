document.addEventListener("DOMContentLoaded", () => {
  const readNowBtn = document.getElementById("readNowBtn");
  const loginPage = document.getElementById("login-page");
  const mainContent = document.getElementById("main-content");
  const pages = document.querySelectorAll(".page");
  const navLinks = document.querySelectorAll(".top-nav a");

  readNowBtn.addEventListener("click", () => {
    loginPage.classList.add("hidden");
    mainContent.classList.remove("hidden");
    showPage("home");
    loadHome();
    loadTrending();
  });

  navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    showPage(page);

    if (page === "favorites") {
      loadFavorites();  
    }
  });
});
function showPage(pageId) {
    pages.forEach(p => p.classList.add("hidden"));
    const currentPage = document.getElementById(pageId);
    if (currentPage) currentPage.classList.remove("hidden");
  }

  const seriesData = [
  {
    name: "Attack on Titan",
    rating: 4.9,
    price: "$15.99",
    img: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    story: "In a world where giant humanoid Titans devour humans, Eren Yeager joins the military to fight back and uncover the Titans' origin and the secrets of his own bloodline."
  },
  {
    name: "Naruto",
    rating: 4.8,
    price: "$12.99",
    img: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    story: "Naruto Uzumaki, a spirited ninja ostracized by his village, seeks recognition and dreams of becoming the Hokage, while a dark force stirs within him — the Nine-Tailed Fox."
  },
  {
    name: "One Piece",
    rating: 4.9,
    price: "$14.5",
    img: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    story: "Monkey D. Luffy sets sail to become the Pirate King in search of the legendary One Piece treasure, gathering an epic crew and facing powerful foes across the seas."
  },
  {
    name: "Demon Slayer",
    rating: 4.8,
    price: "$13.75",
    img: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    story: "Tanjiro Kamado becomes a Demon Slayer after demons slaughter his family and his sister Nezuko is turned into one. He fights to cure her and rid the world of demons."
  },
  {
    name: "Jujutsu Kaisen",
    rating: 4.7,
    price: "$13.9",
    img: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    story: "Yuji Itadori swallows a cursed object and becomes a vessel for a powerful demon. He joins a school of jujutsu sorcerers to battle curses and save others from the same fate."
  },
  {
    name: "Spy x Family",
    rating: 4.8,
    price: "$14.8",
    img: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg",
    story: "Master spy Twilight must build a fake family to complete a mission. But his wife is an assassin, his daughter is a telepath, and none of them know each other's secrets."
  },
  {
    name: "My Hero Academia",
    rating: 4.6,
    price: "$11.2",
    img: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    story: "In a world where most people have powers called 'quirks,' Izuku Midoriya is born powerless but inherits the greatest quirk of all to become the world’s top hero."
  },
  {
    name: "Death Note",
    rating: 4.9,
    price: "$10.99",
    img: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    story: "Light Yagami discovers a notebook that kills anyone whose name is written in it. He uses it to purge criminals, but a genius detective known only as 'L' tries to stop him."
  },
  {
    name: "Tokyo Ghoul",
    rating: 4.5,
    price: "$12.45",
    img: "https://cdn.myanimelist.net/images/anime/5/64449.jpg",
    story: "Ken Kaneki survives a deadly date and becomes half-ghoul. Struggling with identity and hunger, he is drawn into a violent underworld of monsters hiding in plain sight."
  },
  {
    name: "Black Clover",
    rating: 4.3,
    price: "$12.25",
    img: "https://cdn.myanimelist.net/images/anime/2/88336.jpg",
    story: "In a world where magic is everything, Asta is born without it. Armed with anti-magic swords and unbreakable spirit, he vows to become the Wizard King."
  },
  {
    name: "Bleach",
    rating: 4.6,
    price: "$13.6",
    img: "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
    story: "Ichigo Kurosaki gains the powers of a Soul Reaper, defending the world from evil spirits and uncovering dark secrets in both the human and spirit realms."
  },
  {
    name: "Vinland Saga",
    rating: 4.8,
    price: "$14.65",
    img: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg",
    story: "Thorfinn, raised by the man who killed his father, seeks vengeance and discovers the true cost of violence in a gritty tale of Vikings and conquest."
  },
  {
    name: "One Punch Man",
    rating: 4.8,
    price: "$14.25",
    img: "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
    story: "Saitama is a hero who defeats any foe with a single punch, but struggles with the boredom of being too powerful and not getting the respect he deserves."
  },
  {
    name: "Mob Psycho 100",
    rating: 4.7,
    price: "$13.4",
    img: "https://cdn.myanimelist.net/images/anime/8/80356.jpg",
    story: "Shigeo 'Mob' Kageyama is a powerful psychic who wants to live a normal life. But when his emotions spike, so does his uncontrollable psychic power."
  },
  {
    name: "Chainsaw Man",
    rating: 4.7,
    price: "$13.99",
    img: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
    story: "Denji, a devil hunter betrayed and killed, fuses with his chainsaw devil pet and is reborn as Chainsaw Man to fight devils and escape poverty."
  },
  {
    name: "Fullmetal Alchemist",
    rating: 5.0,
    price: "$16.00",
    img: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    story: "Brothers Edward and Alphonse Elric use forbidden alchemy to bring back their mother, but pay a steep price. They now search for the Philosopher's Stone to fix their mistake."
  },
  {
    name: "Hunter x Hunter",
    rating: 4.8,
    price: "$14.1",
    img: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
    story: "Gon Freecss becomes a Hunter to find his missing father. On his journey, he battles dangerous creatures, meets lifelong friends, and faces powerful foes."
  },
  {
    name: "Dragon Ball Z",
    rating: 4.9,
    price: "$15.7",
    img: "https://cdn.myanimelist.net/images/anime/6/20936.jpg",
    story: "Goku defends Earth from powerful warriors and gods. As he grows stronger with each battle, he discovers his Saiyan heritage and fights for peace across the universe."
  }
];
const favorites = [];
function getSeriesCard(item) {
  const fullStars = Math.floor(item.rating);
  const stars = "★".repeat(fullStars);
  const safeName = item.name.replace(/"/g, '&quot;');

  return `
    <div class="card" data-name="${safeName}">
      <img src="${item.img}" alt="${item.name}" />
      <h4>${item.name}</h4>
      <p style="color: gold;">Rating: ${stars} (${item.rating})</p>
      <p style="color: #00e676;">Price: ${item.price}</p>
      <p style="color: #ffc107;">👥 ${Math.floor(Math.random() * 5000 + 1000)} readers</p>
      <button class="fav-btn" data-name="${safeName}">❤️ Add to Favorites</button>
    </div>
  `;
}

function loadFavorites() {
  const container = document.getElementById("favorites-list");
  container.innerHTML = "";

  if (favorites.length === 0) {
    container.innerHTML = "<p style='color: white; text-align:center;'>No favorites added yet.</p>";
    return;
  }

  favorites.forEach(item => {
    container.innerHTML += getSeriesCard(item);
  });
}
function loadHome() {
    const container = document.getElementById("series-list");
    container.innerHTML = "";
    seriesData.forEach(s => container.innerHTML += getSeriesCard(s));
  }

  function loadTrending() {
    const container = document.getElementById("trending-list");
    container.innerHTML = "";
    seriesData.slice(0, 15).forEach(s => container.innerHTML += getSeriesCard(s));
  }
  document.addEventListener("click", function (e) {
  
  if (e.target.classList.contains("fav-btn")) {
    e.stopPropagation(); 

    const name = e.target.dataset.name;
    const item = seriesData.find(s => s.name === name);

    if (!item) return;

    const alreadyFavorited = favorites.some(f => f.name === item.name);
    if (!alreadyFavorited) {
      favorites.push(item);
      alert(`${item.name} added to favorites!`);
    } else {
      alert(`${item.name} is already in favorites.`);
    }

    
    const favSection = document.getElementById("favorites");
    if (!favSection.classList.contains("hidden")) {
      loadFavorites();
    }
  }

  
  const card = e.target.closest(".card");
  if (card && !e.target.classList.contains("fav-btn")) {
    const name = card.dataset.name;
    const item = seriesData.find(s => s.name === name);
    if (item) {
      showStoryModal(item);
    }
  }
});
window.loadGenre = (genre) => {
    const container = document.getElementById("genre-series");
    container.innerHTML = "";
    [...seriesData].sort(() => 0.5 - Math.random()).slice(0, 10).forEach(s => container.innerHTML += getSeriesCard(s));
  };
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fav-btn")) {
    const name = e.target.dataset.name;
    const item = seriesData.find(s => s.name === name);
    if (item && !favorites.find(f => f.name === item.name)) {
      favorites.push(item);
      alert(`${item.name} added to favorites!`);
    }
  }

 
  if (e.target.closest(".card") && !e.target.classList.contains("fav-btn")) {
    const name = e.target.closest(".card").dataset.name;
    const item = seriesData.find(s => s.name === name);
    if (item) showStoryModal(item);
  }
});

const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

window.showStoryModal = (item) => {
  const modal = document.getElementById("storyModal");
  document.getElementById("modalTitle").innerText = item.name;
  document.getElementById("modalImage").src = item.img;
  document.getElementById("modalStory").innerText = item.story || "No story available.";
  modal.classList.remove("hidden");
};

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("storyModal").classList.add("hidden");
});



