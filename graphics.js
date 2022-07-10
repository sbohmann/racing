function Graphics(context) {
    return {
        dot(p, color, r) {
            context.beginPath()
            context.arc(p.x, p.y, r, 0, 2 * Math.PI)
            context.fillStyle = color
            context.fill()
            context.closePath()
        },
        draw(points) {
            context.beginPath()
            context.moveTo(points[0].x, points[0].y)
            for (let index = 1; index < points.length; ++index) {
                context.lineTo(points[index].x, points[index].y)
            }
            context.strokeStyle = 'orange'
            context.lineWidth = 3
            context.stroke()
            context.closePath()
        }
    }
}
