# Scannerverse 📍

> Smart, lightweight neighborhood directory & local guide for Wakad, Pune.

Scannerverse helps residents, commuters, and visitors in Wakad quickly find verified hospitals, transport links, food spots, shopping, and emergency services with live Google Maps integration.

---

## 🌟 Highlights

- **Local Directory for Wakad & Surrounds:**
  - 🏥 Hospitals with 24/7 emergency & direct phone dial
  - 🍽️ Popular cafes, breakfast spots, and family restaurants
  - 🚌 PMPML transit hubs, upcoming Pune Metro Line 3, and railway connections
  - 🛍️ Major shopping centers (Phoenix Mall of the Millennium, Vision One)
  - 🛣️ Key junctions & chowks (Wakad Chowk, Bhumkar Chowk, Dange Chowk)
  - 🚨 Single-tap Emergency Call (112, 108, 100, 101, 1091)

- **Trilingual Support:**
  - One-click toggle between **English**, **मराठी (Marathi)**, and **हिन्दी (Hindi)**.

- **Google Maps Integration:**
  - Direct `📍 Google Maps` location pins and `🧭 Directions` routing for every spot.
  - One-click `📍 Near Me` GPS discovery around your live coordinates.

- **Modern & Lightweight:**
  - Superfast load time (< 50ms)
  - Mobile-first, responsive design with dark & light theme support
  - 100% vanilla web stack — zero heavy framework dependencies or build pipelines needed.

---

## 📂 Project Structure

```text
scannerverse/
├── index.html              # Main web application entry point
├── vercel.json             # Vercel deployment configuration
├── server.py               # Local Python dev server with auto-browser launch
├── index.py                # Quick entry point alias
├── css/
│   └── style.css           # Clean, responsive CSS with theme variables
├── js/
│   ├── app.js              # Application logic, search, UI state & i18n
│   └── data.js             # Local places, coordinates, translations & helplines
└── assets/
    └── scannerverse-qr.png # Sample QR code image
```

---

## 🚀 How to Run Locally

### Option 1: Using Python Script (Auto opens browser)
```bash
python server.py
```
*(Or `python index.py`)*

### Option 2: Python HTTP Server
```bash
python -m http.server 8000 --bind 127.0.0.1
```
Then open `http://localhost:8000` in your browser.

### Option 3: Direct File Opening
Double-click `index.html` to open directly in any modern browser.

---

## 🛠️ Tech Stack

- **HTML5 & Semantic Markup**
- **Modern CSS3** (Custom Properties, Flexbox, Grid, Smooth Animations)
- **Vanilla JavaScript (ES6+)**
- **Google Maps Search & Direction APIs**

---

## 👨‍💻 Maintainer

Created and maintained by **Anurag** ([anurag.aparaitech@gmail.com](mailto:anurag.aparaitech@gmail.com)).  
Contributions, corrections for local places, and feedback are always welcome!

---

## 📄 License

MIT License. Free to use, modify, and deploy for personal or community projects.
