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
