let Vector = require('./util/vector')
let Force = require('./util/force')

class RigidBody {
    constructor(location, mass, velocity, acceleration) {
        this.location = location
        this.velocity = velocity
        this.acceleration = acceleration
        this.mass = mass
    }
    
    applyForce(force) {
        let f = force
        this.acceleration.add(f.div(this.mass))
    }
}