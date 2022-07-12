function addDistanceToPoints(points) {
    let currentDistance = 0
    points[0].distance = currentDistance
    for (let index = 1; index < points.length; ++index) {
        currentDistance += distance(points[index - 1], points[index])
        points[index].distance = currentDistance
    }
}

function distance(a, b) {
    let dx = b.x - a.x
    let dy = b.y - a.y
    return Math.sqrt(dx * dx + dy * dy)
}
