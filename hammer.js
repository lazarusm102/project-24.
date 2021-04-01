class hammer {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':2
      }
      this.body = Bodies.rectangle(x, y, 20, 10, options);
      this.width = 200;
      this.height = 50;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x=mouseX;
      pos.y=mouseY;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("white");
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  