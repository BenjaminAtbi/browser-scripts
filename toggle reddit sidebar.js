// ==UserScript==
// @name         Toggle Reddit Sidebar
// @version      0.1
// @author       Benjamin Atbi
// @include      http://www.reddit.com
// @grant        none
// ==/UserScript==

document.addEventListener("keydown", function(event){
    if(event.key == "b" && event.ctrlKey){
        var sidebar = document.getElementsByClassName("side")[0]
        var content = document.querySelectorAll('[role="main"]')[0]
        if(sidebar.style.cssText == "display: none;"){
            sidebar.style.cssText = "display: block;"
            content.style.cssText = "width: calc(100% - 325px);"
        }else{
            sidebar.style.cssText = "display: none;"
            content.style.cssText = "width: 100%;"
        }
    }
})
