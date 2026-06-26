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

   // function to wrap different charts with a className that will be used for styling
  function wrapper(chart, className) {
    const wrapper = document.createElement("div");
    wrapper.classList.add(className, "hidden");
    wrapper.appendChild(chart);
    return wrapper;
  }