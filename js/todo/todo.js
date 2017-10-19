var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint

var engine,world,box1;


function setup(){
    noStroke();
    canvas = createCanvas(800,400)
    canvas.class('todo');
    engine = Engine.create();
    engine.positionIterations = 1;
    engine.velocityIterations = 1;
    world = engine.world;
    box1 = Bodies.rectangle(200,100,80,80);
    Engine.run(engine);
    World.add(world,box1);


    //make ground

    ground = Bodies.rectangle(400, 390, 800, 20, {isStatic: true});
    World.add(world,ground);
    fill(0);
    var canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    var options = {
      mouse: canvasMouse
    }
    var mouseConstraint = MouseConstraint.create(engine, options);
    World.add(world,mouseConstraint)


}

function draw() {
  console.log(ground);
    background(255);
    rectMode(CENTER);
    fill(0);
    //Matter.Body.setPosition(box1, {x: mouseX, y: mouseY})
    rect(box1.position.x,box1.position.y,80,80);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)


}

// function mouseReleased() {
//
//   Matter.Body.setVelocity(box1, {x: 10, y: -10})
// }
