class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        var option = {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 10,
            stiffness : 0.04,
            pointB : {x:this.offsetX, y:this.offsetY}
        }

        console.log(option);
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.body = Matter.Constraint.create(option);
        World.add(world, this.body);
    }

    display(){
        push();
        var b = this.body.bodyA.position;
        var b2 = this.body.bodyB.position;

        var Anchor1X = b.x;
        var Anchor1Y = b.y;

        var Anchor2X = b2.x+this.offsetX;
        var Anchor2Y = b2.y+this.offsetY;
        stroke("black");
        strokeWeight(3);
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
        pop();
    }
}