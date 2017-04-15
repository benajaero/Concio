class Vector {
    //constructor
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    
    //non-static functions
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
    
    length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y))
    }
    //static functions. Called with function prototype
    static add(vec1, vec2) {
        return new Vector(vec1.x += vec2.x,vec1.y += vec2.y)
    }
    static sub(vec1, vec2) {
        return new Vector(vec1.x -= vec2.x,vec1.y -= vec2.y)
    }
    static mult(vec1, val) {
        return new Vector(vec1.x * val, vec1.y * val)
    }
    static div(vec1, val) {
        return new Vector(vec1.x / val, vec1.y / val)
    }
    
    static length(vec) {
        return Math.sqrt((vec.x * vec.x) + (vec.y * vec.y))
    }
    
}