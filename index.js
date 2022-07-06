window.onload = () => {
    let screen = document.getElementById('screen')
    let g = screen.getContext('2d')

    let p = [
        point(25, 25),
        point(100, 75),
        point(125, 25),
        point(175, 125)]

    for (let n = 0; n <= 3; ++n) {
        dot(p[n], '#000000')
    }

    let s = spline(p0, p1, p2, p3)

    for (let t = 0; t <= 1; t += 1 / 4) {
        dot(s.a1(t), 'red')
        // console.log(t, s.a1(t))
    }

    function point(x, y) {
        return {x, y}
    }

    function dot(p, color) {
        g.beginPath()
        g.arc(p.x, p.y, 5, 0, 2 * Math.PI)
        g.fillStyle = color;
        g.fill()
        g.closePath()
    }
}

function mul(vector, scalar) {
    return {
        x: vector.x * scalar,
        y: vector.y * scalar
    }
}

function add(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y
    }
}

function interpolate(a, b, t) {
    return mul(
        add(
            mul(a, (1 - t)),
            mul(b, t)
        ),
        1 / 2)
}

function spline(p0, p1, p2, p3) {
    function a1(t) {
        return interpolate(p0, p1, t)
    }

    function a2(t) {
        return interpolate(p0, p1, t)
    }

    function a3(t) {
        return interpolate(p0, p1, t)
    }

    function b2(t) {
        return interpolate(a1(t), a2(t), t)
    }

    function b3(t) {
        return interpolate(a2(t), a3(t), t)
    }

    function c(t) {
        return interpolate(b2(t), b3(t), t)
    }

    return {
        a1, a2, a3,
        b2, b3,
        c
    }
}
