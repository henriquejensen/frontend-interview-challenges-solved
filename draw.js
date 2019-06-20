function drawCircle(context, posX, posY) {
    context.beginPath();
    context.arc(posX, posY, 11, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();
}

window.onload = () => {

    const canvas = document.getElementById("draw-canvas");    
    canvas.addEventListener(
        'click',
        ({ offsetX, offsetY }) => drawCircle(canvas.getContext("2d"), offsetX, offsetY) 
    );

}
