class Bob{
    constructor(x, y){
        var option = {
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
            isStatic : true
        }

        this.radius = 20;
        this.diameter = 40;
        this.body = Bodies.circle(x, y, 20, option);
        World.add(world, this.body);
    }

    display(){
        var p = this.body.position
        push();
        ellipseMode(CENTER);
        translate(p.x, p.y);
        rotate(this.body.angle);
        fill("pink");
        ellipse(0, 0, 40, 40);
        pop();
    }
}