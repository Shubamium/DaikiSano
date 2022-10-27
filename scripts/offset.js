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
    offsetX *= 'offset' in element.dataset ? element.dataset.offset : moveFactor;
    offsetY *= 'offset' in element.dataset ? element.dataset.offset : moveFactor;
    
    offsetFactor = 'offset' in element.dataset ? element.dataset.offset : 0;

    if('align' in element.dataset){
        // Animate on all direction equally by reducing the offset
        if(element.dataset.align == "true"){
            offsetX = 10 + Math.abs(offsetX) - Math.abs(offsetFactor) / 2;
            offsetY = 10 + Math.abs(offsetY) - Math.abs(offsetFactor) / 2 ;

        }

        if('reverse' in element.dataset){

            // Reverse the direction of the animation
            if(element.dataset.reverse == "true"){
                offsetX *= -1;
                offsetY *= -1;
            }
            console.log("align center" + offsetX + " -- " + offsetY);

        }

    }
    


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