
window.onload = () => {
    
    const canvas = document.getElementById("draw-canvas");
    const context = canvas.getContext("2d");
    let arrayOfPoints = [];
    const CONTAINER = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height
    };

    canvas.addEventListener('click', drawCircleController);

    function drawCircleController({ offsetX, offsetY }) {
        if (arrayOfPoints.length < NUMBER_OF_POINTS) {
            arrayOfPoints.push([offsetX, offsetY]);
        }

        requestAnimationFrame(drawPoints)
    }

    function drawPoints() {
        initScreen();
        arrayOfPoints.map(points => drawCircle(context, ...points));
    }

    function initScreen() {
        context.fillStyle = 'black';
        context.strokeStyle = 'black';
        context.fillRect(CONTAINER.x,CONTAINER.y,CONTAINER.width,CONTAINER.height);
    }

    function resetScreen() {
        initScreen();
        arrayOfPoints = [];
    }

    initScreen();


    const resetButton = document.getElementById('controls__button--red');
    resetButton.addEventListener('click', resetScreen, false);
}
