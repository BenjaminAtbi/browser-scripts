// ==UserScript==
// @name         Toggle Reddit Sidebar
// @namespace    http://www.reddit.com
// @version      0.1
// @description  try to take over the world!
// @author       Benjamin Atbi
// @include      *
// @grant        none
// ==/UserScript==

document.addEventListener("keydown", function(event){
    if(event.key == "b" && event.ctrlKey){
        var sidebar = document.getElementsByClassName("side")[0]
        var content = document.querySelectorAll('[role="main"]')[0]
        console.log(content)
        if(sidebar.style.cssText == "display: none;"){
            console.log("none")
            sidebar.style.cssText = "display: block;"
            content.style.cssText = "width: calc(100% - 325px);"
        }else{
            console.log(sidebar.style)
            sidebar.style.cssText = "display: none;"
            content.style.cssText = "width: 100%;"
        }
    }
})