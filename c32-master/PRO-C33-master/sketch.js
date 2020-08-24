var Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];
var divisions = [];
var ground;
//var Line;
var particle;
var turn=0;
var count=0;

var divisionHeight=300;
var score =0;

var gameState;

function setup() 
{
  var canvas = createCanvas(802, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //Line = new line(width/2, 470, width,20);


   for (var k = 0; k <=width; k = k + 80) 
    {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() 
{
  background("black");
  fill("white");
  textSize(20)

 
  text("Score : "+score,20,30);

  
 
  

  text("500",20,525);
  text("500",100,525);
  text("500",180,525);
  text("500",260,525);

  text("100",340,525);
  text("100",420,525);
  text("100",500,525);
  
  text("200",580,525);
  text("200",660,525);
  text("200",740,525);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++)  
   {   
      plinkos[i].display();
   }
   gameState = 'start';
   for(var j=0; j < 5; j++)
   {
    //mousePressed();
    //text(" GAME ",400,400);
    if(particle != null)
    {
         particle.display();
  
         if(particle.body.position.y > 760)
         {
           if(particle.body.position.x < 300)
           {
             score = score+500;
             particle = null; 
           }
           else if(particle.body.position.x > 301 && particle.body.position.x < 600)
           {
             score = score+100;
             particle = null; 
           }
           else if(particle.body.position.x > 601)
           {
             score = score+200;
             particle = null; 
           }
         }
    }
   }
   if(turn === 5)
   {
      text(" GAME OVER ",300,250);
      textSize(50);
      gameState = "end";
   }
 
  /*for (var j = 0; j < particles.length; j++)  
  {
   
     particles[j].display();
    
   }*/

   for (var k = 0; k < divisions.length; k++)
  {
     
     divisions[k].display();
     ground.display();
     //Line.display();
  }
}

function mousePressed()
{
  if(gameState!=="end")
  {
    //count++;
    turn = turn + 1;
    particle = new Particle(mouseX, 10, 10);
  }
}

