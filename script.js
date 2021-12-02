var character = document.getElementById("character");
var score = document.getElementById("score");
var block = document.getElementById("block");
var topBlock = document.getElementById("blockFly");


var checkDead1 = setInterval(()=>{

        var charaterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var blockleft = 
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));

        if(blockleft<20 && blockleft>0 && charaterTop>=130){
            block.style.display = "none";
            alert("Game over!" + " your score is " + score.innerText);
            location.reload();
        }
    },10);

var checkDead2 = setInterval(()=>{
        var rect = parseInt(window.getComputedStyle(topBlock).getPropertyValue("left"));
        var charaterBottom = 
        parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));

        if(rect<20 && rect>0 && charaterBottom>=-150){
            topBlock.style.display = "none";
            alert("Game over!" + " your score is " + score.innerText);
            location.reload();
        }

    }, 10);

function main(){

    topBlock.style.display = "none";

    setInterval(() => {
        if(score.innerText == "500"){
            console.log("scored");

            topBlock.style.display = "block";
            block.style.display = "none";

            setInterval(()=>{
                var randNum;
                randNum = Math.floor(Math.random() * 2); 
                console.log(randNum);
                if(randNum == "0"){
                    block.style.display = "none";
                    topBlock.style.display = "block";
                }else if(randNum == "1"){
                    block.style.display = "block";
                    topBlock.style.display = "none";
                }
    
            }, 890);
            
            block.style.animationDuration = "0.9s"
            topBlock.style.animationDuration = "0.9s"
        }
    }, 10);

    Score();
    
}

function Score(){
    setInterval(()=>{
        score.innerText++;
    }, 10);
}

function jump() {
    if(character.classList != "animate"){
        character.classList.add("animate")
        setTimeout(()=>{
            character.classList.remove("animate")
        },500);
    }

}

function crouch() {
    if(character.classList != "crouch"){
        character.classList.add("crouch")
        setTimeout(()=>{
            character.classList.remove("crouch")
        },500);
    }

}

document.addEventListener("keydown" , e => {
    if(e.code === "ArrowUp" || e.code === "Space"){
        jump();
    }
    if(e.code === "ArrowDown"){
        crouch();
    }
})


main();
