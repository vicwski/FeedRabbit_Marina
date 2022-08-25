const Engine = Matter.Engine
const Render = Matter.Render
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
const Body = Matter.Body
const Composites = Matter.Composites
const Composite = Matter.Composite

var engine, world

var ground
var fruit, fruit_con
var rope, bunny

var bkImg, fruitImg, rabbitImg

function preload() {
  bkImg = loadImage('images/background.png')
  fruitImg = loadImage('images/melon.png')
  rabbitImg = loadImage('images/rabbit.png')
}

function setup() {
  createCanvas(500, 700)
  engine = Engine.create()
  world = engine.world

  ground = new Ground(width / 2, height - 10, width, 20)

  rope = new Rope(7, { x: 245, y: 30 })

  fruit = Bodies.circle(300, 300, 20)
  Matter.Composite.add(rope.body, fruit)

  fruit_con = new Link(rope, fruit)

  bunny = createSprite(200, 620, 100, 100)
  bunny.addImage(rabbitImg)
  bunny.scale = 0.3

  rectMode(CENTER)
  ellipseMode(RADIUS)
  textSize(50)
}

function draw() {
  background(51)
  imageMode(CENTER)
  image(bkImg, width / 2, height / 2)

  Engine.update(engine)

  ground.display()
  rope.display()

  image(fruitImg, fruit.position.x, fruit.position.y, 100, 100)

  drawSprites()
}

function drop() {}
