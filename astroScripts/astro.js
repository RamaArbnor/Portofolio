class Astro{
  
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.color = color(133, 255, 251);
    this.r = 10;
    this.hr = 60;
    this.vx = 0;
    this.vy = 0;
  }
  
  show(){
    fill(this.color)
    circle(this.x, this.y, this.r)
  }
  
  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.vx = (mouseX - this.x) * 0.1;
    this.vy = (mouseY - this.y) * 0.1;
    
  }
  
}