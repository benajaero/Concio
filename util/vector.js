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
    
    angle() {
        /* We have the opposite and adjacent side
        We want to find the angle between the hypotenuse and the adjacent side
        We can use the inverse tan function
        */
        return Math.atan2(this.y, this.x)
    }
    setLength(val) {
        /* 1. Find the angle
        2. Change the hypotenuse
        3. Find the new side lengths by using the angle
        */
        let angle = this.angle()
        this.x = val * Math.cos(angle)
        this.y = val * Math.sin(angle)
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