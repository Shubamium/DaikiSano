let elements = document.getElementsByClassName('offsetEffect');
let offY,offX;
let moveFactor = -10;
window.addEventListener("mousemove", (e)=> {
    // console.log(e.clientX / window.innerWidth);

    offX = e.clientX / window.innerWidth;
    offY = e.clientY / window.innerWidth;

    for(let i = 0; i < elements.length; i++){
        applyEffect(elements[i],offX,offY);
    }
});




function applyEffect(element, offsetX, offsetY){

    // console.log(element);
    offsetX *= 'offset' in element.dataset ? element.dataset.offset: moveFactor;
    offsetY *= 'offset' in element.dataset ? element.dataset.offset: moveFactor;
    
    element.animate(
        {
            transform:`translate(${offsetX}px, ${offsetY}px)`
        },{
            fill:"forwards",
            duration:1400,
            easing: "ease"
        }
    );

    
}