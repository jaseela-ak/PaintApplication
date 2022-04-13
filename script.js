const canvas=document.getElementById("canvas");
const cntx=canvas.getContext('2d');

cntx.fillStyle= "white";
cntx.fillRect(0,0,500,500)
cntx.fillStyle= "black";
let brushSize=3;
let breshColor="black";

document.getElementById("color").addEventListener("change",function (event) {
    breshColor=this.value;

})
document.getElementById("thickness",function (event) {
    brushSize=this.value;
})


let painting=false;

function paintingSatrt(event){
painting=true;
}


function paintingEnd(event) {
    painting=false
    cntx.beginPath();
}

function draw(event) {
    if(painting==false)
        return;
    

    let x=event.clientX;
    let y=event.clientY-canvas.offsetTop;

    cntx.lineWidth = brushSize;
    cntx.lineCap="round";
    cntx.lineTo(x,y);
    cntx.strokeStyle=breshColor;
    cntx.stroke();
    
}

canvas.addEventListener("mousedown",paintingSatrt);
canvas.addEventListener("mouseup",paintingEnd);
canvas.addEventListener("mousemove",draw)
