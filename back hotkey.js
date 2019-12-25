// ==UserScript==
// @name         back hotkey
// @version      0.1
// @author       Benjamin Atbi
// ==/UserScript==

document.addEventListener("keydown", function(event){
    if(event.key == "Backspace" && event.ctrlKey){
        window.history.back()
    }
})
