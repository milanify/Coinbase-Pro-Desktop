function openWindow(url) {
  window.open(url,"","width=1024,height=768,frame=true,show=true");
}

document.getElementById("coinmarketcap").addEventListener("click", function() {
  openWindow("https://coinmarketcap.com/");
});

document.getElementById("cryptowatch").addEventListener("click", function() {
  openWindow("https://cryptowat.ch/");
});

document.getElementById("googlesearch").addEventListener("click", function() {
  openWindow("https://www.google.com//");
});

document.getElementById("googlesheets").addEventListener("click", function() {
  openWindow("https://docs.google.com/spreadsheets/u/0/");
});

document.getElementById("wolframalpha").addEventListener("click", function() {
  openWindow("https://www.wolframalpha.com/");
});

document.getElementById("ccowl").addEventListener("click", function() {
  openWindow("https://www.ccowl.com/news/");
});
