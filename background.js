const SITE = "https://pf-env.eba-2fntvvpi.eu-west-3.elasticbeanstalk.com/";

const colorIcon = {
  path: {
    "128": "icons/favicon.ico"
  }
};
const greyIcon = {
  path: {
    "128": "icons/favicon-grey.png"
  }
};

chrome.browserAction.onClicked.addListener(function (activeTab) {
  chrome.tabs.create({ url: SITE });
});

function checkSiteStatus() {
  fetch(SITE + "/portada").then(function (response) {
    if (response.ok) {
      return response.text();
    }
  }).then(function (text) {
    const parser = new DOMParser();
    const xmlDocument = parser.parseFromString(text, 'text/html');
    const glyph = xmlDocument.querySelector(".disputar-jornada > .glyphicon");
    if (glyph && glyph.classList.contains("glyphicon-play")) {
      chrome.browserAction.setIcon(colorIcon);
    }
    else if (!glyph || glyph.classList.contains("glyphicon-ok")) {
      chrome.browserAction.setIcon(greyIcon);
    }
  });
}

checkSiteStatus();
window.setInterval(checkSiteStatus, 60000 /* 1 min */);
