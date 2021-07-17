// right click with the onclick function and character jumps directly up linear! 
// the block or "object" is moving linear in an infinate loop as well 

var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function jump() {
    if(character.classList == "animate") { 
        return }
    character.classList.add("animate");
    setTimeout(function() {
        character.classList.remove("animate");
    }, 300);
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(blockLeft<20 && blockLeft>=20 && characterTop>=130) {
        block.style.animation = "none";
        alert("Uh oh, you died! Game Over... SCORE: " + Math.floor(counter/100));
        counter = 0;
        block.style.animation = "block 6s linear infinite";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
