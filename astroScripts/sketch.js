let nodes = [];
let astro;
let canvas;

function windowResized() {
  console.log(windowWidth)
  resizeCanvas(windowWidth, windowHeight);
  addNodes()
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  // noCursor();
  astro = new Astro(width/2, height/2)
  
  for(let i = 0; i < 300; i++){
    nodes.push(new Node(random(width), random(height)))
  }
  
}

function draw() {
  background(21);
  
  astro.update()
  astro.show()
  
  for(let i = 0; i < nodes.length; i++){
    nodes[i].update();
    nodes[i].show();

  }
  
  // print(sin(nodes[0].angle) * 10)
  
  // noLoop()
  
}

function addNodes(){
  nodes = []
  for(let i = 0; i < 300; i++){
    nodes.push(new Node(random(width), random(height)))
  }
}