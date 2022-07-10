window.onload = () => {
    let screen = document.getElementById('screen')
    let context = screen.getContext('2d')
    let graphics = new Graphics(context)

    let allPoints = []
    let mousePoint

    let numberOfCorners = Math.round(Math.random() * 12) + 3
    for (let index = 0; index < numberOfCorners; ++index) {
        let x = 100 + Math.random() * 600
        let y = 100 + Math.random() * 600
        allPoints.push(point(x, y))
    }

    function paint() {
        context.clearRect(0, 0, screen.width, screen.height);

        for (let index = 0; index < allPoints.length; ++index) {
            let dotColor = cornerColor(index)
            graphics.dot(allPoints[index], dotColor, 12)
        }

        for (let pointIndex = 0; pointIndex < allPoints.length; ++pointIndex) {
            let pn = []
            for (let offset = 0; offset < 4; ++offset) {
                let subIndex = (pointIndex + offset) % allPoints.length
                pn.push(allPoints[subIndex])
            }
            paintSpline(pn, graphics)
        }

        if (mousePoint !== undefined) {
            graphics.dot(mousePoint, '#aa339980', 23)
        }
    }

    paint()

    screen.onmousemove = event => {
        mousePoint = point(event.offsetX, event.offsetY)
        paint()
    }

    screen.onmouseleave = () => {
        mousePoint = undefined
        paint()
    }

    function cornerColor(index) {
        switch (index) {
            case 0:
                return 'red'
            case 1:
                return 'green'
            case 2:
                return 'blue'
            default:
                return 'black'
        }
    }
}
