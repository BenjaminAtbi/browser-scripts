// ==UserScript==
// @name         numbered google links
// @namespace    www.google.ca/search
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *
// @grant        none
// ==/UserScript==

//BUGS:
// ** label beside "images for x" link is out of position. improve css

//extract hyperlink from result element
function extractlink(elem){
    if(elem.id == "imagebox_bigimages") {
       return elem.getElementsByClassName("iu-card-header")[0];
    } else {
       return elem.getElementsByClassName("r")[0].getElementsByTagName("a")[0];
    }
}

//extract result elements
function extractElems(){
    var results = document.getElementsByClassName("g");
    var links = {length:0};
    for(var i = 0; i < results.length; i++) {
        //filters out bullshit with additional classes
        if(results[i].className == "g") {
            links.length++;
            links[links.length] = extractlink(results[i]);
        }
    }
    return links;
}

//insert label beside link
function labelLink(link, num){
    link.insertAdjacentHTML("beforebegin", "<div class='numlabel' id='"+num+"' "+
                            "style='position:absolute;"+
                            "left: -1.5em;"+
                            "border-style:solid;"+
                            "border-width:2px;"+
                            "border-color:#d8d8d8;"+
                            "padding-left:.2em;"+
                            "padding-right:.2em;"+
                            "padding-top:.1em;"+
                            "'>"+num+"</div>");
}

//set up document
function labelResultLinks() {
    links = extractElems();
    for(var i = 1; i <= links.length; i++){
        labelLink(links[i], i);
    }
}

//enter link determined by keypress
function visitLinkByNum(event){
    //if you press 0, visit link 10
    if (document.activeElement == document.getElementsByTagName("body")[0]){
        if (event.key == "0" && links.length >= 10){
            window.location.href = links[10].href;
            //if you press n, visit link n
        } else if (event.key <= links.length && event.key != 0){
            window.location.href = links[event.key].href;
        }
    }
}

var links;
document.addEventListener("keydown", visitLinkByNum);
labelResultLinks();



