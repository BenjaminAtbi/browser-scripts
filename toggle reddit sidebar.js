// ==UserScript==
// @name         Toggle Reddit Sidebar
// @namespace    http://www.reddit.com
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *
// @grant        none
// ==/UserScript==

document.addEventListener("keydown", function(event){
    if(event.key == "b" && event.ctrlKey){
        var sidebar = document.getElementsByClassName("side")[0]
        if(sidebar.style.cssText == "display: none;"){
            console.log("none")
            sidebar.style.cssText = "display: block;"
        }else{
            console.log(sidebar.style)
            sidebar.style.cssText = "display: none;"
        }
    }
})