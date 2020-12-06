class Ground{
    constructor(){

        this.body = Bodies.rectangle(450,390,900,50)
        this.width = 900
        this.height = 50
    }

    display(){

        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}