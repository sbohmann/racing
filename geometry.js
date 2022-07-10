function point(x, y) {
    return {x, y}
}

function distance(a, b) {
    let dx = b.x - a.x
    let dy = b.y - a.y
    return Math.sqrt(dx * dx + dy * dy)
}
