document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("loginError");

  if (username === "admin" && password === "1234") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
});


const imagesByCategory = {
  animals: [
     "animal/1.jpeg",
    "animal/2.webp",
    "animal/3.jpg",
    "animal/4.png",
    "animal/5.webp",
    "animal/6.jpg",
    "animal/7.jpeg",
    "animal/8.jpeg",
    "animal/9.jpg"
  ],
  nature: [
    "nature/1.webp",
    "nature/2.jpeg",
    "nature/3.webp",
    "nature/4.jpg",
    "nature/5.webp",
    "nature/6.webp",
    "nature/7.jpeg",
    "nature/8.jpeg",
    "nature/9.webp"
  ],
  city: [
    "city/1.jpg",
    "city/2.jpg",
    "city/3.jpeg",
    "city/4.jpg",
    "city/5.jpg",
    "city/6.jpg",
    "city/7.jpg",
    "city/8.webp",
    "city/9.jpg",
  ]
};

const categorySelect = document.getElementById("category");
const galleryContainer = document.getElementById("imageGallery");
const carouselDiv = document.querySelector(".carousel");

categorySelect.addEventListener("change", () => {
  const selectedCategory = categorySelect.value;

  galleryContainer.innerHTML = "";

  if (selectedCategory && imagesByCategory[selectedCategory]) {
    const images = imagesByCategory[selectedCategory];

    images.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      img.alt = selectedCategory;
      galleryContainer.appendChild(img);
    });

    carouselDiv.style.display = "block";
  } else {
    carouselDiv.style.display = "none";
  }
});


document.getElementById("loadJoke").addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("jokeText").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      console.error(error);
      document.getElementById("jokeText").textContent = "Oops! Failed to load joke.";
    });
});
