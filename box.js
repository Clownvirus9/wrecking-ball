class Box {

constructor(x,y){
    var options = {
     'restitution':0.8,
     'density':1,
     'friction':1

    }

    
    this.body = Bodies.rectangle(x,y,50,50,options);
    
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;

    World.add(world,this.body);

}
 
   display(){
   var pos = this.body.position;
   push();
   rect(pos.x,pos.y,this.width,this.height);
   rectMode(CENTER);
   fill("black");

   pop()

   }



}