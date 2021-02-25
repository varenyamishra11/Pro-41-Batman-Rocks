class Drop {
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1 
        }

        this.x=x
        this.y=y
        this.body=Bodies.circle(this.x,this.y,5,options);
        this.radius=5
        World.add(world, this.body);
    }

    updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }

    display(){
        var pos=this.body.position;         
       // translate(pos.x, pos.y);
        fill("blue") 
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}
