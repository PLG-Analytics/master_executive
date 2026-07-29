// Code used to format/manipulate Qlik charts

const QLIK_HOST = "https://pondlehocky.us.qlikcloud.com";
const WEB_INTEGRATION_ID = "uf8UGUYKg4vvpHxhI3eMavSK0n9zIGc5";

async function ensureAuthenticated() {

    const response = await fetch(
        `${QLIK_HOST}/api/v1/users/me`,
        {
            credentials: "include",
            headers: {
                "qlik-web-integration-id": WEB_INTEGRATION_ID
            }
        }
    );

    return response.ok;
}

// generate qlik with a unique identity for each session with appId and objectId
function createChart(appId, objectId) {
  const embed = document.createElement("qlik-embed");

  embed.setAttribute("ui", "analytics/chart");
  embed.setAttribute("app-id",appId);
  embed.setAttribute("object-id", objectId);

  embed.setAttribute("theme", "Sense Horizon");
  return embed;
}


// generate qlik selection bar with a unique identity for each session with appId
function createSelectionBar(appId) {
  const embed = document.createElement("qlik-embed");
  embed.setAttribute("ui", "analytics/selections");
  embed.setAttribute("app-id", appId);
  embed.setAttribute("theme", "Sense Horizon");
  return embed;
}

// function to wrap different charts with a className that will be used for styling
function wrapper(chart, className, fullScreenFlag) {
  const wrapper = document.createElement("div");
  wrapper.classList.add(...className.split(" "));
  wrapper.appendChild(chart);

  // Only add the full screen option to pivot charts
  if (fullScreenFlag === 1) {
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
  icon.src = "https://plg-analytics.github.io/master_executive/Images/expand.png";     // adjust path if needed
  icon.alt = "Expand";

  btn.appendChild(icon);

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    wrapperElement.classList.toggle("browser-fullscreen");
    if (wrapperElement.classList.contains("browser-fullscreen")) {
      icon.src = "https://plg-analytics.github.io/master_executive/Images/collapse.png";
      icon.alt = "Collapse";
      btn.title = "Restore Size";
    } else {
      icon.src = "https://plg-analytics.github.io/master_executive/Images/expand.png";
      icon.alt = "Expand";
      btn.title = "Full Screen";
    }
  });
  wrapperElement.appendChild(btn);
}
