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
const unoIcon = {
  path: {
    "128": "icons/favicon-uno.png"
  }
};

function checkSiteStatus() {
  fetch(SITE + "/portada").then(function (response) {
    if (response.ok) {
      return response.text();
    }
  }).then(function (text) {
    const parser = new DOMParser();
    const xmlDocument = parser.parseFromString(text, 'text/html');
    const glyph = xmlDocument.querySelector(".disputar-jornada > .glyphicon");
    if (!glyph) {
      chrome.browserAction.setIcon(greyIcon);
    }
    else if (glyph.classList.contains("glyphicon-play")) {
      chrome.browserAction.setIcon(colorIcon);
    }
    else if (glyph.classList.contains("glyphicon-ok")) {
      if(glyph.nextSibling.nextSibling.textContent.includes("Falta 1"))
        chrome.browserAction.setIcon(unoIcon);
      else
        chrome.browserAction.setIcon(greyIcon);
    }
  });
}

checkSiteStatus();
window.setInterval(checkSiteStatus, 60000 /* 1 min */);

chrome.browserAction.onClicked.addListener(function (activeTab) {
  checkSiteStatus();
  chrome.tabs.create({ url: SITE });
});
