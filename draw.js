function drawCircle(context, posX, posY) {
    context.beginPath();
    context.arc(posX, posY, 11, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();
}



window.onload = () => {

    const numberOfPoints = 3;
    const arrayOfPoints = [];
    const canvas = document.getElementById("draw-canvas");
    const context = canvas.getContext("2d");
    const container = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height
    };
    canvas.addEventListener('click', drawCircleController);

    function drawCircleController({ offsetX, offsetY }) {
    
        if (arrayOfPoints.length === numberOfPoints) {
            arrayOfPoints.pop();
        }

        arrayOfPoints.unshift([offsetX, offsetY]);
        requestAnimationFrame(drawPoints)
    }

    function drawPoints() {
        initScreen();
        arrayOfPoints.map(points => drawCircle(context, ...points))
    }

    function initScreen() {
        context.fillStyle = 'black';
        context.strokeStyle = 'black';
        context.fillRect(container.x,container.y,container.width,container.height);
    }

    initScreen();

}
