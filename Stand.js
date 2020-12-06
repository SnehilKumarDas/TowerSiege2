class Stand{
    constructor(x,y,w){

        this.body = Bodies.rectangle(x,y,w,20,{isStatic : true})
        this.width = w
        this.height = 20
        World.add(world,this.body)


    }

    display(){

        push();
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }
}