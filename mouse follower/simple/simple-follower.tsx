import p5 from "p5";
const CENTER_W = 400;
const CENTER_H = 400;

var acceleration = 0.1;

export class SimpleMouseFollower {
  p: p5;
  mouse: p5.Vector;
  circle: p5.Vector;
  constructor(p: p5) {
    this.p = p;
    this.mouse = this.p.createVector();
    this.circle = this.p.createVector(CENTER_W, CENTER_H);
  }

  init() {
    this.mouse.set(this.p.mouseX, this.p.mouseY);
  }

  animate() {
    this.mouse.set(this.p.mouseX, this.p.mouseY);
    var distance = this.mouse.sub(this.circle);
    var acc = distance.mult(acceleration);
    this.circle.add(acc);
    this.p.circle(this.circle.x, this.circle.y, 10);
  }
}
