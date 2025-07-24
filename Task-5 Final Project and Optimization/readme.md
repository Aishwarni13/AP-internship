# 🌟 TaleSphere – Anime Series Web App

TaleSphere is a dynamic, fully responsive anime series website developed as a **capstone project** using **HTML, CSS, and JavaScript**. This web application features anime showcases with modal story popups, dark mode, favorite lists, genre filters, and modern performance optimizations.

---

## 🎯 Project Objective

To design and implement a comprehensive, responsive, and optimized web application showcasing anime series while integrating all essential front-end development skills.

---

## 🧱 Features

### 🔐 Login Page
- Entry screen with styled welcome message
- “Read Now” button (no form input)
- Full-screen background image with blur effect

### 🏠 Home Page
- Displays over **30+** anime series
- Each card contains:
  - Anime Image
  - Star Rating
  - Price
  - View/User Count
  - Click-to-view Story Modal

### 🔥 Trending Page
- Showcases top trending 15–19 anime series with the same features

### 🎭 Genre Filter
- Genre buttons (Action, Romance, Comedy, etc.)
- Displays 10+ anime per genre when clicked
- Responsive and dynamic layout

### 💖 Favorites
- Large, styled "Add to Favorite" button
- Anime can be added/removed to/from favorites
- Stored using in-memory JS (can be extended to localStorage)

### 👤 My Account Page
- Readable static account details (can be upgraded with form)
- Responsive card-like section

### 🌙 Dark Mode Toggle
- Prominent, styled toggle
- Changes entire site theme dynamically

### 📖 Story Modal Popup
- Clicking an anime opens a **centered modal popup** with story
- Close button to hide modal
- Modal overlay with styled blur background

### 📱 Fully Responsive
- Works smoothly on all screen sizes: desktop, tablet, mobile
- Layout adjusts using Flexbox and media queries

### 🌐 Cross-Browser Support
- Tested on:
  - Google Chrome
  - Mozilla Firefox
  - Safari (macOS/iOS)
  - Edge
  - Android Chrome

---

## ⚡ Performance Optimizations

- **Minified CSS and JS** for faster load time
- **Lazy loading images** for efficient rendering
- **Reduced HTTP requests** with asset optimization
- **Efficient DOM access** for modal/favorites
- Background and modal effects optimized using CSS `backdrop-filter`, `transform`, and `opacity`

---

## 🗂 Project Structure

TaleSphere/
├── login.html # Welcome/Login screen
├── index.html # Main anime site
├── style.css # Unified styles with media queries
├── script.js # JavaScript for modal, dark mode, favorites, genres
├── assets/
│ ├── images/ # Anime images and backgrounds
│ └── icons/ # UI icons
└── README.md

---

## 🧪 Browser & Device Testing

| Platform         | Tested |
|------------------|--------|
| Chrome (Windows) | ✅      |
| Firefox (Windows) | ✅     |
| Safari (macOS)    | ✅     |
| Safari (iOS)      | ✅     |
| Chrome (Android)  | ✅     |
| Edge (Windows)    | ✅     |

Responsive breakpoints:
- **Mobile:** ≤ 480px
- **Tablet:** 481px–768px
- **Desktop:** ≥ 769px

---

## 🛠 Technologies Used

- HTML5
- CSS3 (Flexbox, Media Queries)
- JavaScript (ES6)
- DOM Manipulation
- Modal handling
- Local state management

---

