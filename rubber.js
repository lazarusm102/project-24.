class rubber {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,  [options]);
      this.width = maxSides;
      this.height = maxSides;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("black");
      fill("blue");
      rect(0, 0, this.maxSides, this.maxSides);
      pop();
    }
  };
  