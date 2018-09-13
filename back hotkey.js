// ==UserScript==
// @name         back hotkey
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *
// @grant        none
// ==/UserScript==

document.addEventListener("keypress", function(event){
    if(event.key == "Backspace" && event.ctrlKey){
        window.history.back()
    }
})