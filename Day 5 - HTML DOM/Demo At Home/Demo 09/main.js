let hoverText = document.getElementById('demo');
hoverText.addEventListener('mouseover',MouseOver);
hoverText.addEventListener('mouseout',MouseOut);
function MouseOver(){
    document.getElementById('demo').style.color="red";
    
}
function MouseOut(){
    document.getElementById('demo').style.color="blue";
    
}