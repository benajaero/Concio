class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    
    add(vec2) {
        this.x += vec2.x
        this.y += vec2.y
    }
    
    sub(vec2) {
        this.x -= vec2.x
        this.y -= vec2.y
    }
    
    mult(val) {
        this.x *= val
        this.y *= val
    }
    div(val) {
        this.x /= val
        this.y /= val
    }
    
    static add(vec1, vec2) {
        vec1.x += vec2.x
        vec1.y += vec2.y
    }
    static sub(vec1, vec2) {
        vec1.x -= vec2.x
        vec1.y -= vec2.y
    }
    static mult(vec1, val) {
        vec1.x *= val
        vec2.y *= val
    }
    static div(vec1, val) {
        vec1.x /= val
        vec2.y /= val
    }
    
}