window.onload = () => {
    let screen = document.getElementById('screen')
    let g = screen.getContext('2d')


    let allPoints = [
        point(125, 125),
        point(200, 175),
        point(225, 125),
        point(275, 225),
        point(275, 525)
    ]

    function paintSpline(pn) {
        let tn = [
            0, 1, 2, 3
        ]

        let s = spline(...pn, ...tn)

        for (let t = tn[1]; t <= tn[2]; t += (tn[2] - tn[1]) / 128) {
            dot(s.c(t), 'orange', 3)
        }
    }

    for (let n = 0; n < allPoints.length; ++n) {
        dot(allPoints[n], '#000000', 12)
    }

    for (let pointIndex = 0; pointIndex < allPoints.length; ++pointIndex) {
        let pn = []
        for (let offset = 0; offset < 4; ++offset) {
            let subIndex = (pointIndex + offset) % allPoints.length
            pn.push(allPoints[subIndex])
        }
        paintSpline(pn)
    }

    function point(x, y) {
        return {x, y}
    }

    function dot(p, color, r) {
        g.beginPath()
        g.arc(p.x, p.y, r, 0, 2 * Math.PI)
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

function interpolate(a, b, ta, tb, t) {
    return add(
        mul(a, (tb - t) / (tb - ta)),
        mul(b, (t - ta) / (tb - ta))
    )
}

function spline(p0, p1, p2, p3, t0, t1, t2, t3) {
    function a1(t) {
        return interpolate(p0, p1, t0, t1, t)
    }

    function a2(t) {
        return interpolate(p1, p2, t1, t2, t)
    }

    function a3(t) {
        return interpolate(p2, p3, t2, t3, t)
    }

    function b2(t) {
        return interpolate(a1(t), a2(t), t0, t2, t)
    }

    function b3(t) {
        return interpolate(a2(t), a3(t), t1, t3, t)
    }

    function c(t) {
        return interpolate(b2(t), b3(t), t1, t2, t)
    }

    return {
        a1, a2, a3,
        b2, b3,
        c
    }
}
