window.onload = () => {
    
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const resetButton = document.getElementById('controls__button--red');
    let p4, paralellogramArea, circleDiameter, circleCenter;
    let arrayOfPoints = [];
    const CONTAINER = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height
    };

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
            calculatePoints();

            drawLine(context, p1, p2);
            drawLine(context, p2, p3);
            drawLine(context, p3, p4);
            drawLine(context, p4, p1);
            drawCircunference(context, circleCenter, circleDiameter);
        }

        printInformation();
    }

    function initScreen() {
        context.fillStyle = 'black';
        context.fillRect(CONTAINER.x,CONTAINER.y,CONTAINER.width,CONTAINER.height);
    }

    function calculatePoints() {
        const [p1,p2, p3] = [...arrayOfPoints];
        p4 = newVertice(medianPoint(p1, p3), p2);
        paralellogramArea = areaParalellogram(p1, p2, p3);
        circleDiameter = diameterCircunference(paralellogramArea);
        circleCenter = medianPoint(p1, p3);
    }

    function resetScreen() {
        initScreen();
        arrayOfPoints = [];
        paralellogramArea = 0;
        circleDiameter = 0;
        p4 = 0;
        point1.innerHTML = '';
        point2.innerHTML = '';
        point3.innerHTML = '';
        point4.innerHTML = '';
        paralellogram.innerHTML = '';
        circleArea.innerHTML = '';
    }

    function printInformation() {
        const [p1,p2, p3] = [...arrayOfPoints];
        const text = ((point, number) =>
            point ? `<span>Point ${number}:</span> x: ${floatFixed(point.x)}, y: ${floatFixed(point.y)} ` : '');

        point1.innerHTML = text(p1, 1);
        point2.innerHTML = text(p2, 2);
        point3.innerHTML = text(p3, 3);
        point4.innerHTML = text(p4, 4);
        paralellogram.innerHTML = paralellogramArea ? `<span>Area Paralellogram:</span> ${floatFixed(paralellogramArea)}` : '';
        circleArea.innerHTML = circleDiameter ? `<span>Area Circle:</span> ${floatFixed(circleDiameter)}` : '';
    }


    initScreen();

    canvas.addEventListener('click', drawCircleController);
    resetButton.addEventListener('click', resetScreen, false);
}
