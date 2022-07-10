window.onload = () => {
    let screen = document.getElementById('screen')
    let context = screen.getContext('2d')
    let graphics = new Graphics(context)

    // let allPoints = [
    //     point(125, 125),
    //     point(200, 175),
    //     point(225, 125),
    //     point(275, 225),
    //     point(275, 525)
    // ]

    let allPoints = []

    let numberOfCorners = Math.round(Math.random() * 12) + 3
    for (let index = 0; index < numberOfCorners; ++index) {
        let x = Math.random() * 800
        let y = Math.random() * 800
        allPoints.push(point(x, y))
    }

    for (let n = 0; n < allPoints.length; ++n) {
        graphics.dot(allPoints[n], '#000000', 12)
    }

    for (let pointIndex = 0; pointIndex < allPoints.length; ++pointIndex) {
        let pn = []
        for (let offset = 0; offset < 4; ++offset) {
            let subIndex = (pointIndex + offset) % allPoints.length
            pn.push(allPoints[subIndex])
        }
        paintSpline(pn, graphics)
    }
}

function interpolate(a, b, ta, tb, t) {
    return add(
        mul(a, (tb - t) / (tb - ta)),
        mul(b, (t - ta) / (tb - ta))
    )
}
