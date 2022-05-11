const SITE = "https://pf-env.eba-2fntvvpi.eu-west-3.elasticbeanstalk.com/";

const colorIcon = {
  path: {
    "128": "icons/favicon.ico"
  }
};

chrome.browserAction.onClicked.addListener(function (activeTab) {
  chrome.tabs.create({ url: SITE });
});

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
});
