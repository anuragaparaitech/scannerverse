// Scannerverse - Main Application Logic
// Lightweight, responsive neighborhood directory for Wakad, Pune

let currentLang = "en";
let activeCategoryId = null;

// Helper to get localized string from I18N
function t(key) {
  if (I18N[currentLang] && I18N[currentLang][key]) {
    return I18N[currentLang][key];
  }
  return (I18N.en && I18N.en[key]) || "";
}

// Helper to sanitize HTML display
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Lightweight toast notification
function showToast(message, duration = 2500) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "app-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Load saved language preference or default to English
  try {
    const savedLang = localStorage.getItem("scannerverse_lang");
    if (savedLang && ["en", "mr", "hi"].includes(savedLang)) {
      currentLang = savedLang;
    }
  } catch (e) {
    console.warn("Storage not accessible");
  }

  // Load saved theme (dark / light)
  try {
    const savedTheme = localStorage.getItem("scannerverse_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeToggleIcon(savedTheme);
  } catch (e) {}

  // Bind UI Events
  setupEventListeners();

  // Render initial view
  renderApp();
});

function setupEventListeners() {
  // Search input with debounce
  const searchInput = document.getElementById("mainSearchInput");
  const clearBtn = document.getElementById("searchClearBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      if (clearBtn) clearBtn.style.display = query ? "flex" : "none";
      handleSearch(query);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        clearBtn.style.display = "none";
        searchInput.focus();
        handleSearch("");
      }
    });
  }

  // Theme toggle
  const themeToggle = document.getElementById("themeToggleBtn");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      try {
        localStorage.setItem("scannerverse_theme", nextTheme);
      } catch (e) {}
      updateThemeToggleIcon(nextTheme);
    });
  }

  // Back button from category/search view
  const backBtn = document.getElementById("backToHomeBtn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      resetToHome();
    });
  }
}

function updateThemeToggleIcon(theme) {
  const iconSpan = document.getElementById("themeToggleIcon");
  if (iconSpan) {
    iconSpan.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

function setLanguage(lang) {
  if (!["en", "mr", "hi"].includes(lang)) return;
  currentLang = lang;
  try {
    localStorage.setItem("scannerverse_lang", lang);
  } catch (e) {}
  document.documentElement.lang = lang;
  renderApp();
}

function renderApp() {
  // Update header text & language pills
  renderHeaderControls();

  // Update Hero Section
  const heroTitle = document.getElementById("heroTitle");
  const heroSubtitle = document.getElementById("heroSubtitle");
  const searchInput = document.getElementById("mainSearchInput");
  const sosButtonText = document.getElementById("sosButtonText");

  if (heroTitle) heroTitle.textContent = t("heroTitle");
  if (heroSubtitle) heroSubtitle.textContent = t("heroSubtitle");
  if (searchInput) searchInput.placeholder = t("searchPlaceholder");
  if (sosButtonText) sosButtonText.textContent = t("sosButton");

  // Render Quick Access chips
  renderQuickAccessChips();

  // If in category view, re-render category; otherwise render categories grid
  if (activeCategoryId) {
    openCategory(activeCategoryId, false);
  } else {
    renderCategoriesGrid();
  }

  // Update footer text
  const footerText = document.getElementById("footerMadeBy");
  if (footerText) footerText.textContent = t("footerMadeBy");
  const emergencyNote = document.getElementById("footerEmergencyNote");
  if (emergencyNote) emergencyNote.textContent = t("emergencyNote");
}

function renderHeaderControls() {
  const langContainer = document.getElementById("langSelector");
  if (!langContainer) return;

  const languages = [
    { code: "en", label: "English" },
    { code: "mr", label: "मराठी" },
    { code: "hi", label: "हिन्दी" }
  ];

  langContainer.innerHTML = languages
    .map(
      (lang) =>
        `<button type="button" class="lang-btn ${lang.code === currentLang ? "active" : ""}" onclick="setLanguage('${lang.code}')">${lang.label}</button>`
    )
    .join("");
}

function renderQuickAccessChips() {
  const container = document.getElementById("quickChipsContainer");
  if (!container) return;

  const chips = [
    { id: "near", icon: "📍", label: t("nearMe"), onClick: "handleNearMe()" },
    { id: "hospitals", icon: "🏥", label: CATEGORIES[0].title[currentLang] || CATEGORIES[0].title.en, onClick: "openCategory('hospitals')" },
    { id: "food", icon: "🍽️", label: CATEGORIES[1].title[currentLang] || CATEGORIES[1].title.en, onClick: "openCategory('food')" },
    { id: "transport", icon: "🚌", label: CATEGORIES[2].title[currentLang] || CATEGORIES[2].title.en, onClick: "openCategory('transport')" },
    { id: "shopping", icon: "🛍️", label: CATEGORIES[3].title[currentLang] || CATEGORIES[3].title.en, onClick: "openCategory('shopping')" }
  ];

  container.innerHTML = chips
    .map(
      (chip) => `
      <button type="button" class="quick-chip" onclick="${chip.onClick}">
        <span class="chip-icon">${chip.icon}</span>
        <span class="chip-label">${escapeHtml(chip.label)}</span>
      </button>`
    )
    .join("");
}

function renderCategoriesGrid() {
  const homeView = document.getElementById("homeView");
  const detailView = document.getElementById("detailView");
  const categoriesGrid = document.getElementById("categoriesGrid");

  if (homeView) homeView.style.display = "block";
  if (detailView) detailView.style.display = "none";
  activeCategoryId = null;

  if (!categoriesGrid) return;

  categoriesGrid.innerHTML = CATEGORIES.map((cat) => {
    const title = cat.title[currentLang] || cat.title.en;
    const desc = cat.desc ? (cat.desc[currentLang] || cat.desc.en) : "";
    const count = cat.places ? cat.places.length : 0;
    const countLabel = count > 0 ? `${count} places` : "Quick directory";

    return `
      <div class="category-card" onclick="openCategory('${cat.id}')">
        <div class="cat-icon-wrap">${cat.icon}</div>
        <div class="cat-content">
          <div class="cat-title-row">
            <h3 class="cat-title">${escapeHtml(title)}</h3>
            <span class="cat-meta-badge">${countLabel}</span>
          </div>
          <p class="cat-desc">${escapeHtml(desc)}</p>
          <span class="cat-link-label">Explore places &rarr;</span>
        </div>
      </div>
    `;
  }).join("");
}

function openCategory(categoryId, scrollToTop = true) {
  const category = CATEGORIES.find((c) => c.id === categoryId);
  if (!category) return;

  activeCategoryId = categoryId;
  const homeView = document.getElementById("homeView");
  const detailView = document.getElementById("detailView");
  const detailTitle = document.getElementById("detailCategoryTitle");
  const detailIcon = document.getElementById("detailCategoryIcon");
  const detailList = document.getElementById("placesListContainer");

  if (homeView) homeView.style.display = "none";
  if (detailView) detailView.style.display = "block";

  if (detailIcon) detailIcon.textContent = category.icon;
  if (detailTitle) detailTitle.textContent = category.title[currentLang] || category.title.en;

  let html = "";

  // If this is the SOS/Helplines category
  if (category.helplines && category.helplines.length > 0) {
    html += renderHelplineCards(category.helplines);
  }

  // Render place cards
  if (category.places && category.places.length > 0) {
    html += category.places.map((place) => renderPlaceCard(place)).join("");
  }

  // Render live search cards for Google Maps
  if (category.liveSearches && category.liveSearches.length > 0) {
    html += `
      <div class="live-searches-section">
        <h4 class="live-section-title">📍 ${t("liveSearchTitle")}</h4>
        <div class="live-searches-grid">
          ${category.liveSearches.map((item) => renderLiveSearchCard(item)).join("")}
        </div>
      </div>
    `;
  }

  if (detailList) detailList.innerHTML = html;
  if (scrollToTop) window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPlaceCard(place) {
  const query = encodeURIComponent(`${place.name} ${APP_CONFIG.city}`);
  const mapUrl = APP_CONFIG.mapsSearchBase + query;
  const dirUrl = APP_CONFIG.mapsDirBase + query;

  const phoneBtn = place.phone
    ? `<a class="btn-action btn-phone" href="tel:${place.phone.replace(/[^0-9+]/g, "")}">
         <span>📞</span> ${t("callNow")}
       </a>`
    : "";

  const tagsHtml = place.tags
    ? place.tags.map((tag) => `<span class="badge-tag">${escapeHtml(tag)}</span>`).join("")
    : "";

  return `
    <div class="place-card">
      <div class="place-header">
        <h3 class="place-name">${escapeHtml(place.name)}</h3>
        <span class="verified-badge">✓ ${t("verifiedPlace")}</span>
      </div>

      ${place.highlight ? `<p class="place-highlight">${escapeHtml(place.highlight)}</p>` : ""}

      <div class="place-meta">
        <div class="meta-row">
          <span class="meta-icon">📍</span>
          <span class="meta-text">${escapeHtml(place.address)}</span>
        </div>
        ${
          place.timing
            ? `<div class="meta-row">
                 <span class="meta-icon">⏱️</span>
                 <span class="meta-text">${escapeHtml(place.timing)}</span>
               </div>`
            : ""
        }
      </div>

      ${tagsHtml ? `<div class="place-tags">${tagsHtml}</div>` : ""}

      <div class="place-actions">
        <a class="btn-action btn-map" href="${mapUrl}" target="_blank" rel="noopener noreferrer">
          <span>📍</span> ${t("openMap")}
        </a>
        <a class="btn-action btn-directions" href="${dirUrl}" target="_blank" rel="noopener noreferrer">
          <span>🧭</span> ${t("getDirections")}
        </a>
        ${phoneBtn}
      </div>
    </div>
  `;
}

function renderHelplineCards(helplines) {
  return `
    <div class="helplines-grid">
      ${helplines
        .map((h) => {
          const name = h.name[currentLang] || h.name.en;
          return `
            <div class="helpline-card">
              <div class="helpline-left">
                <span class="helpline-number">${h.number}</span>
                <span class="helpline-badge">${escapeHtml(h.badge)}</span>
              </div>
              <div class="helpline-center">
                <h4 class="helpline-name">${escapeHtml(name)}</h4>
              </div>
              <div class="helpline-right">
                <a class="btn-call-emergency" href="tel:${h.number}">
                  <span>📞</span> ${t("callNow")}
                </a>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderLiveSearchCard(searchItem) {
  const query = encodeURIComponent(`${searchItem} near Wakad Pune`);
  const url = APP_CONFIG.mapsSearchBase + query;

  return `
    <a class="live-search-card" href="${url}" target="_blank" rel="noopener noreferrer">
      <span class="live-search-icon">📍</span>
      <span class="live-search-text">${escapeHtml(searchItem)}</span>
      <span class="live-search-arrow">📍 Maps ↗</span>
    </a>
  `;
}

function handleSearch(query) {
  if (!query) {
    if (activeCategoryId) {
      openCategory(activeCategoryId, false);
    } else {
      renderCategoriesGrid();
    }
    return;
  }

  const cleanQuery = query.toLowerCase();
  const homeView = document.getElementById("homeView");
  const detailView = document.getElementById("detailView");
  const detailTitle = document.getElementById("detailCategoryTitle");
  const detailIcon = document.getElementById("detailCategoryIcon");
  const detailList = document.getElementById("placesListContainer");

  if (homeView) homeView.style.display = "none";
  if (detailView) detailView.style.display = "block";

  if (detailIcon) detailIcon.textContent = "🔍";
  if (detailTitle) detailTitle.textContent = `Search results for "${escapeHtml(query)}"`;

  const matchedPlaces = [];
  const matchedSearches = [];

  CATEGORIES.forEach((cat) => {
    if (cat.places) {
      cat.places.forEach((p) => {
        const fullString = `${p.name} ${p.address} ${p.highlight || ""} ${(p.tags || []).join(" ")}`.toLowerCase();
        if (fullString.includes(cleanQuery)) {
          matchedPlaces.push(p);
        }
      });
    }

    if (cat.liveSearches) {
      cat.liveSearches.forEach((s) => {
        if (s.toLowerCase().includes(cleanQuery)) {
          matchedSearches.push(s);
        }
      });
    }
  });

  if (matchedPlaces.length === 0 && matchedSearches.length === 0) {
    detailList.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <p class="empty-text">${t("noResults")}</p>
        <button type="button" class="btn-primary" onclick="resetToHome()">View All Categories</button>
      </div>
    `;
    return;
  }

  let html = matchedPlaces.map((p) => renderPlaceCard(p)).join("");
  if (matchedSearches.length > 0) {
    html += `
      <div class="live-searches-section">
        <h4 class="live-section-title">📍 Google Maps queries for "${escapeHtml(query)}"</h4>
        <div class="live-searches-grid">
          ${matchedSearches.map((s) => renderLiveSearchCard(s)).join("")}
        </div>
      </div>
    `;
  }

  detailList.innerHTML = html;
}

function resetToHome() {
  const searchInput = document.getElementById("mainSearchInput");
  const clearBtn = document.getElementById("searchClearBtn");
  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.style.display = "none";

  renderCategoriesGrid();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleNearMe() {
  showToast("Finding places around you on Google Maps...");

  if (!navigator.geolocation) {
    openMapsFallback();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(5);
      const lng = position.coords.longitude.toFixed(5);
      const url = `https://www.google.com/maps/search/Hospitals,+Food,+ATMs/@${lat},${lng},15z`;
      window.open(url, "_blank", "noopener,noreferrer");
    },
    (err) => {
      console.warn("Geolocation denied or timed out:", err);
      openMapsFallback();
    },
    { timeout: 7000, maximumAge: 60000 }
  );
}

function openMapsFallback() {
  const { lat, lng } = APP_CONFIG.defaultCoordinates;
  const url = `https://www.google.com/maps/search/Hospitals,+Food,+ATMs/@${lat},${lng},15z`;
  window.open(url, "_blank", "noopener,noreferrer");
}
