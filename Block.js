class Block{
    constructor(x,y,w,h){

        var options = {

            restitution : 0.4,
            friction : 0
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        
        this.w = w
        this.h = h
        this.visibility = 255
 }

     display(){

        if(this.body.speed<3){

            rectMode(CENTER)
            rect(0,0,this.w,this.h)
        }
        else{

        push();
        World.add(world,this.body)
        strokeWeight(4)
        stroke("green")
        fill("white")
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        this.visibility = this.visibility-5
        tint(255,this.visibility)
        rect(0,0,this.w,this.h)
        pop();
        }
     }


}