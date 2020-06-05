class Rope{ 
    constructor(bodyA, pointB){
        
        var Options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.1,
            length : 150,
        }

        this.rope = Constraint.create(Options);
        this.pointB = pointB;
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(2);

        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}