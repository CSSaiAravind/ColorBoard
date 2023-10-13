const container=document.getElementById("container");


var colors=["#1D5B79","#EF6262","#F3AA60","#37E2D5","#590696","#C70A80","#FBCB0A","#FF1700"]

var squares=500;

for(let i=0;i<squares;i++){
    const square=document.createElement("div");
    square.classList.add("square")

    square.addEventListener("mouseover",()=> SetColor(square));

    square.addEventListener("mouseout",()=> removeColor(square));

    container.appendChild(square)
}
function SetColor(element){
    var color=RandomColor()
    element.style.background=color
    element.style.boxShadow=`0 0 3px ${color},0 0 10px ${color}`
}
function removeColor(element){
    element.style.background="#1d1d1d"
    element.style.boxShadow="0 0 3px"
}


function RandomColor(){
    return colors [Math.floor(Math.random()* colors.length)]
}
