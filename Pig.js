class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;

  }
   display(){
     console.log(this.body.speed)
     var pos = this.body.position

     if(this.body.speed<3.5){
      super.display();
     }else{
       push ();
      World .remove(world, this.body) 
      this.visibility = this.visibility-5
      tint (255, this.visibility)
      image (this.image, pos.x, pos.y, 50, 50)
      pop ();
     }
   }



   
};