// Toggle waffle menu
function toggleWaffle() {
  const menu = document.getElementById("waffleMenu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

// Highlight current page
function highlightCurrentPage() {
  let current = window.location.pathname.split("/").pop();
  if (current === "") current = "index.html";

  document.querySelectorAll(".waffle-grid a").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
}

// Load nav.html and then highlight
function loadNav() {
  fetch("nav.html")
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById("waffle-container");
      if (container) {
        container.innerHTML = html;
        highlightCurrentPage();
      }
    })
    .catch(err => console.error("Error loading nav:", err));
}

// Close waffle menu when clicking outside
function setupOutsideClickClose() {
  document.addEventListener("click", (e) => {
    const menu = document.getElementById("waffleMenu");
    const button = document.querySelector(".waffle-button");

    if (
      menu &&
      button &&
      !menu.contains(e.target) &&
      !button.contains(e.target)
    ) {
      menu.classList.add("hidden");
    }
  });
}

// Initialize everything
function initWaffle() {
  loadNav();
  setupOutsideClickClose();
}

// generate qlik with a unique identity for each session with appId and objectId
function createChart(identity, appId, objectId) {
  const embed = document.createElement("qlik-embed");

  embed.setAttribute("ui", "analytics/chart");
  embed.setAttribute("app-id",appId);
  embed.setAttribute("object-id", objectId);
  embed.setAttribute("identity", identity);

  return embed;
}

// generate qlik selection bar with a unique identity for each session with appId
function createSelectionBar(identity, appId) {
  const embed = document.createElement("qlik-embed");
  embed.setAttribute("ui", "analytics/selections");
  embed.setAttribute("app-id", appId);
  embed.setAttribute("identity", identity);
  return embed;
}


// function to wrap different charts with a className that will be used for styling
function wrapper(chart, className) {
  const wrapper = document.createElement("div");
  wrapper.classList.add(...className.split(" "));
  wrapper.appendChild(chart);

  // Only add the full screen option to pivot charts
  if (className === "pivot-wrapper" || className === "jumbotron-wrapper") {
    addFullscreenButton(wrapper);
  }
  return wrapper;
}

// Add a full screen button to pivot charts
function addFullscreenButton(wrapperElement) {
  const btn = document.createElement("button");
  btn.className = "fullscreen-btn hidden";
  btn.title = "Full Screen";

  // Create icon
  const icon = document.createElement("img");
  icon.src = "../Images/expand.png";     // adjust path if needed
  icon.alt = "Expand";

  btn.appendChild(icon);

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    wrapperElement.classList.toggle("browser-fullscreen");
    if (wrapperElement.classList.contains("browser-fullscreen")) {
      icon.src = "../Images/collapse.png";
      icon.alt = "Collapse";
      btn.title = "Restore Size";
    } else {
      icon.src = "../Images/expand.png";
      icon.alt = "Expand";
      btn.title = "Full Screen";
    }
  });
  wrapperElement.appendChild(btn);
}
