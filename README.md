# Scannerverse 🌐

> Smart, lightweight neighborhood directory & QR discovery tool for Wakad, Pune.

Scannerverse helps residents, commuters, and visitors in Wakad quickly find verified hospitals, transport links, food spots, shopping, and emergency services. It also includes an in-browser QR code scanner and generator so you can scan physical signs or create codes for local businesses.

---

## 🌟 Highlights

- **Local Directory for Wakad & Surrounds:**
  - 🏥 Hospitals with 24/7 emergency & phone numbers
  - 🍽️ Popular cafes, breakfast spots, and family restaurants
  - 🚌 PMPML transit hubs, upcoming Pune Metro Line 3, and railway connections
  - 🛍️ Major shopping centers (Phoenix Mall of the Millennium, Vision One)
  - 🛣️ Key junctions & chowks (Wakad Chowk, Bhumkar Chowk, Dange Chowk)
  - 🚨 Single-tap Emergency Call (112, 108, 100, 101, 1091)

- **Trilingual Support:**
  - Full toggle between **English**, **मराठी (Marathi)**, and **हिन्दी (Hindi)**.

- **Instant QR Code Scanner:**
  - Scan physical QR stickers/boards using your phone/laptop camera.
  - Or upload any saved QR screenshot or photo directly from your gallery.

- **QR Code Generator:**
  - Generate crisp, downloadable QR codes for any place link, address, or contact to print on flyers or stickers.

- **Modern & Lightweight:**
  - Fast load time (< 50ms)
  - Mobile-first, responsive design with dark & light theme support
  - 100% vanilla web stack — no heavy framework dependencies or build pipelines needed.

---

## 📂 Project Structure

```text
scannerverse/
├── index.html              # Main web application entry point
├── css/
│   └── style.css           # Clean, responsive CSS with theme variables
├── js/
│   ├── app.js              # Application logic, search, UI state & i18n
│   ├── data.js             # Local places, coordinates, translations & helplines
│   ├── scanner.js          # QR code scanning and generation engine
│   └── vendor/             # Standalone offline libraries
│       ├── jsqr.js         # Pure JS QR code reading engine
│       └── qrcode.min.js   # Client-side QR code generator
└── assets/
    └── scannerverse-qr.png # Sample QR code image
```

---

## 🚀 How to Run Locally

You can run this project with any local web server:

### Option 1: Python HTTP Server
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 2: VS Code Live Server
Right-click `index.html` and click **"Open with Live Server"**.

### Option 3: Direct File Opening
Double-click `index.html` to open directly in any modern browser (Chrome, Firefox, Safari, Edge).  
*(Note: Camera QR scanning requires `http://localhost` or `https://` due to browser camera security policies).*

---

## 🛠️ Tech Stack

- **HTML5 & Semantic Markup**
- **Modern CSS3** (Custom Properties, Flexbox, Grid, Media Queries)
- **Vanilla JavaScript (ES6+)**
- **jsQR** (Camera & image canvas decoding)
- **QRCode.js** (Client-side canvas QR rendering)

---

## 👨‍💻 Maintainer

Created and maintained by **Anurag** ([anurag.aparaitech@gmail.com](mailto:anurag.aparaitech@gmail.com)).  
Contributions, corrections for local places, and feedback are always welcome!

---

## 📄 License

MIT License. Free to use, modify, and deploy for personal or community projects.
