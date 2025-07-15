document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();

  if (user && pass) {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('mainPage').classList.remove('hidden');
    showPage('portfolioPage');
  } else {
    alert('Please enter username and password!');
  }
});


document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const pageId = this.dataset.page;
    showPage(pageId);
  });
});

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
  });

  if (pageId) {
    document.getElementById(pageId).classList.remove('hidden');
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent!');
    });
  }
});


const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

if (addBtn) {
  document.addEventListener("DOMContentLoaded", loadTasks);
  addBtn.addEventListener("click", addTask);
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete";
    delBtn.onclick = () => {
      li.remove();
      saveTasks();
    };
    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
    saveTasks();
  }
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push(li.firstChild.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(taskText => {
    const li = document.createElement("li");
    li.textContent = taskText;
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete";
    delBtn.onclick = () => {
      li.remove();
      saveTasks();
    };
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}


const projects = [
  {
    name: "Portfolio Website",
    category: "Web Design",
    description: "A personal website to showcase my skills and projects.",
    technologies: "HTML, CSS, JavaScript",
    price: 500,
    link: "#aboutPage",
    rating: 5
  },
  {
    name: "To-Do App",
    category: "Productivity",
    description: "A task manager app with localStorage support.",
    technologies: "HTML, CSS, JavaScript",
    price: 300,
    link: "#todoPage",
    rating: 4.5
  },
  {
    name: "E-commerce Page",
    category: "E-commerce",
    description: "Product filtering and sorting demo page.",
    technologies: "HTML, CSS, JavaScript",
    price: 800,
    link: "#productPage",
    rating: 4.7
  },
  {
    name: "Image Carousel",
    category: "UI Components",
    description: "Interactive image carousel with login page.",
    technologies: "HTML, CSS, JavaScript",
    price: 200,
    link: "#",
    rating: 4.6
  },
  {
    name: "Weather App",
    category: "API Integrations",
    description: "Fetches weather data and displays it beautifully.",
    technologies: "HTML, CSS, JavaScript, OpenWeather API",
    price: 350,
    link: "#",
    rating: 4.8
  },
  {
    name: "Blog Platform",
    category: "Web Applications",
    description: "A blogging platform with posts, comments, and login.",
    technologies: "HTML, CSS, JavaScript, Local Storage",
    price: 1000,
    link: "#",
    rating: 4.4
  },
  {
    name: "Recipe Finder",
    category: "API Integrations",
    description: "Search for recipes by ingredient using a public API.",
    technologies: "HTML, CSS, JavaScript, Recipe API",
    price: 450,
    link: "#",
    rating: 4.5
  },
  {
    name: "Digital Clock",
    category: "UI Components",
    description: "A stylish digital clock with animations and themes.",
    technologies: "HTML, CSS, JavaScript",
    price: 150,
    link: "#",
    rating: 4.3
  }
];
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

categoryFilter.addEventListener("change", filterAndSort);
sortFilter.addEventListener("change", filterAndSort);

document.addEventListener("DOMContentLoaded", () => {
  renderProjects(projects);
});

function filterAndSort() {
  let filtered = [...projects];

  const category = categoryFilter.value;
  if (category && category !== "") {
    filtered = filtered.filter(p => p.category === category);
  }

  const sort = sortFilter.value;
  if (sort === "priceAsc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceDesc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProjects(filtered);
}

function renderProjects(items) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p><strong>Category:</strong> ${item.category}</p>
      <p><strong>Description:</strong> ${item.description}</p>
      <p><strong>Technologies:</strong> ${item.technologies}</p>
      <p><strong>Price:</strong> $${item.price}</p>
      <p><strong>Rating:</strong> ${item.rating} ⭐</p>
      <p><a href="${item.link}" target="_blank">View Project</a></p>
    `;
    productList.appendChild(div);
  });
}
