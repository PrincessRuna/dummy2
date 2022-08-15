class Ground {

    constructor(x , y , b,  h){
        this.x = x;
        this.y = y;
        this.b = b;
        this.h = h;

    var body_option={
            isStatic:true
        };
        
        this.body = Bodies.rectangle(x , y , h , b , body_option);
        World.add(world,this.body);

    }

    show(){
        push();
        translate(this.body.position.x , this.body.position.y)
        rectMode(CENTER)
        fill("Red")
        rect(0,0,this.b , this.h)
        pop();
    }
}