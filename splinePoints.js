function splinePoints(pn) {
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

    let highlightedPoints = []
    highlightedPoints.push(pn[1])
    for (let t = tn[1]; t < tn[2]; t += 20) {
        highlightedPoints.push(s.c(t))
    }
    highlightedPoints.push(pn[2])

    return {
        points,
        highlightedPoints
    }
}
