/*class Umbrella{
    constructor(x,y){

        var options = {
            isStatic:true,
            friction : 0.1
        }

        this.x=x
        this.y=y
        this.image=loadImage("walking_1.png"); 
        this.body=Bodies.circle(this.x,this.y,20,options);
        World.add(world, this.body);
        }

        display(){
        var pos=this.body.position;         
        push() 
        translate(pos.x, pos.y); 
       // fill("blue") 
        imageMode(CENTER); 
        image(this.image,pos.x,pos.y+70,20,20);
        pop();  
        }
     }*/

     class Umbrella {
        constructor(x,y){
            var options = {
                isStatic: true,
                friction: true
            }
            this.ani = loadAnimation('walking_1.png','walking_2.png','walking_3.png','walking_4.png');
            this.body = Bodies.circle(x,y,5,options);
            this.radius = 5;
            World.add(world, this.body)
        }
    
        display(){
            var pos = this.body.position;
            imageMode(CENTER);
            this.scale=0.5
            animation(this.ani,pos.x,pos.y+70,300,300);
        }
    }