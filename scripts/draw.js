window.onload = () => {
    
    const canvas = document.getElementById("canvas");
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
            arrayOfPoints.push({ x : offsetX, y: offsetY });
        }

        requestAnimationFrame(drawPoints)
    }

    function drawPoints() {
        initScreen();
        arrayOfPoints.map(({ x , y }) => drawCircle(context, x, y));

        if (arrayOfPoints.length === 3) {
            const [p1,p2, p3] = [...arrayOfPoints];
            const p4 = newVertice(medianPoint(p1, p3), p2);

            drawCircle(context, p4.x, p4.y);
            drawLine(context, p1, p2);
            drawLine(context, p2, p3);
            drawLine(context, p3, p4);
            drawLine(context, p4, p1);
        }
    }

    function initScreen() {
        context.fillStyle = 'black';
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
