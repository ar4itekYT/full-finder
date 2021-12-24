function getClickHandler() {

  return function(info, tab) {

  zone = chrome.i18n.getUILanguage() == "ru" ? "ru" : "com",
  url = "https://yandex." + zone + "/images/search?rpt=imageview&url=" + encodeURIComponent(info.srcUrl),

  chrome.tabs.create({ url: url, });

  };
};

chrome.contextMenus.create({
  "title" : "Искать фулл",
  "type" : "normal",
  "contexts" : ["image"],
  "onclick" : getClickHandler()
});