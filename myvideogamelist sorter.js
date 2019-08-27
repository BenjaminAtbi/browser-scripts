// ==UserScript==
// @name         myvideogamelist sorter
// @namespace    myvideogamelist.com/mylist/
// @version      0.1
// @description  sort list by rating
// @author       You
// @match        https://myvideogamelist.com/mylist/Belithioben
// @grant        none
// ==/UserScript==


var sort_by_rating = function(a, b) {
    return parseInt(b.childNodes[5].innerHTML) - parseInt(a.childNodes[5].innerHTML);
}

var tables = document.getElementsByTagName("tbody");
console.log("tables: ",tables);

var table;
for (var i = 0; i < 3; i++){
    var items = Array.prototype.slice.call(tables[i].children);
    console.log(items)
    items.sort(sort_by_rating);

    for (var y = 0; y < items.length; y++) {
        var parent = items[y].parentNode;
        var detatchedItem = parent.removeChild(items[y]);
        parent.appendChild(detatchedItem);
    }
}