document.addEventListener("mousemove", function(event) {
    myFunction(event);
});

function myFunction(event) {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px"; 
    document.body.appendChild(dot);  
   
    if(document.body.childNodes.length > 8){
        document.body.removeChild(document.body.firstChild);
    }
}


