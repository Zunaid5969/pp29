const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var engine,world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var  ig,stand
function setup(){
    createCanvas(900,800)

    engine= Engine.create();
    world=engine.world();

    block1=new Block(120,235,20,40)
    block2=new Block(150,235,20,40)
    block3=new Block(180,235,20,40)
    block4=new Block(210,235,20,40)
    block5=new Block(240,235,20,40)
    block6=new Block(270,235,20,40)
    block7=new Block(300,235,20,40)
    block8=new Block(330,235,20,40)
    block8=new Block(360,235,20,40)
    block9=new Block(390,235,20,40)
    block10=new Block(420,235,20,40)
    block11=new Block(480,235,20,40)
    block12=new Block(510,235,20,40)
    block13=new Block(540,235,20,40)
    block14=new Block(570,235,20,40)
    block15=new Block(600,235,20,40)
    block16=new Block(630,235,20,40)
    ig=new Ground()
    stand=new Ground()

}
function draw(){
    background(180)
    Engine.update(engine);
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    ig.display()
    stand.display()
}



