function paintSpline(pn, graphics) {
    let tn = [0]

    let straightDistance = 0
    for (let index = 0; index < 3; ++index) {
        let weightedDistance = distance(pn[index], pn[index + 1])
        straightDistance += weightedDistance
        tn.push(straightDistance)
    }

    let s = spline(...pn, ...tn)

    let points = []
    points.push(pn[1])
    for (let t = tn[1]; t < tn[2]; t += 3) {
        points.push(s.c(t))
    }
    points.push(pn[2])
    graphics.draw(points)

    let dotColor = '#33339933'
    graphics.dot(pn[1], dotColor, 5)
    for (let t = tn[1]; t < tn[2]; t += 20) {
        let p = s.c(t)
        graphics.dot(p, dotColor, 5)
    }
    graphics.dot(pn[2], dotColor, 5)
}
