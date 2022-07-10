function paintSpline(pointData, graphics) {
    graphics.draw(pointData.points)

    let dotColor = '#33339933'
    for (let p of pointData.highlightedPoints) {
        graphics.dot(p, dotColor, 5)
    }
}
