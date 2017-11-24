// ==UserScript==
// @name         PoE Black Friday
// @version      0.1
// @description  Path of Exile sale
// @author       Fredrik Frederiksen
// @match        https://www.pathofexile.com/shop/category/daily-deals
// @grant        none
// ==/UserScript==


// Search terms
var searchFor = ["rain", "throne"];

// Item name location
var elements = document.querySelectorAll("div.shopItems > div.shopItem > a.name");

// If no items reload page
if (!elements || elements.length === 0) {
    reload_page();
}

var playSoundCheck = false;

//Loop items
for(i = 0; i < elements.length; i++){
    var element = elements[i];

    // Get item name
    var item = element.innerText.split("\n")[0];
    var item = item.toLowerCase();
    console.log(item);

    if ( searchFor.some(function(s) { return item.includes(s.toLowerCase()); } )) {
        playSoundCheck = true;
    }
}

if(playSoundCheck){
    // If an item matches play sound.
    var audio = new Audio('http://soundbible.com/mp3/Red Alert-SoundBible.com-108009997.mp3');
    audio.play();
}


// Reload page by interval
//setInterval(function(){ reload_page(); }, 1000 ); //second
//setInterval(function(){ reload_page(); }, 1000 * 60 ); //minute
setInterval(function(){ reload_page(); }, 1000 * 60 * 60 ); //hour

// Reload page
function reload_page()
{
    window.location.reload(true);
}
