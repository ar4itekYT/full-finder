var yandex = "https://yandex.ru/images/search?rpt=imageview&url=";
var tineye = "https://tineye.com/search/?pluginver=chrome-1.1.5&sort=score&order=desc&url=";
var bing = "https://www.bing.com/images/search?view=detailv2&selectedIndex=0&mode=ImageViewer&iss=sbi&q=imgurl:";
var saucenao = "http://saucenao.com/search.php?db=999&url=";
var iqdb = "http://iqdb.org/?url=";

function addResult(prefix, url, index) { 
  var oldValue = localStorage.getItem(prefix);
  if ((oldValue === 'true') || (oldValue === null)){
      chrome.tabs.create({url: url, index: index, selected: false})
  }
}
 
function getClickHandler(object, tab) {
  chrome.windows.create({url: chrome.extension.getURL("find.html")});
  var imageURL = object["srcUrl"];
  var ind = 1;
  var encoded = encodeURIComponent(imageURL);
  addResult('yandex', yandex + encoded, tab.index + ind++);
  addResult('tineye', tineye + encoded, tab.index + ind++);
  addResult('bing',bing + encoded, tab.index + ind++);
  addResult('saucenao', saucenao + encoded, tab.index + ind++);
  addResult('iqdb', iqdb + encoded, tab.index + ind++);
}

chrome.contextMenus.create({
  "title" : "Искать фулл",
  "type" : "normal",
  "contexts" : ["image"],
  "onclick" : getClickHandler
});