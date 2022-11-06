let characters = document.getElementById("character");
let block  = document.getElementById("block");


function jump(){
    if(characters.classList != "animate"){
        characters.classList.add("animate");
    }
    setTimeout(function(){
        characters.classList.remove("animate");
    }, 500)
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(characters).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 &&characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("game over bro get a life");
    }
},10);




