class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
    this.canhomcima= loadImage("./assets/canon.png");
    this.canhombaixo= loadImage("./assets/cannonBase.png");
  }
  show(){
    push();
    imageMode(CENTER);
    image(this.canhomcima,this.width,this.y,width,height);
    pop();

    image(this.canhombaixo,70,20,200,200);
    noFill();
  }
}
