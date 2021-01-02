var fixedrect, movingRect;
 function setup() {
    createCanvas(1200, 800);
   fixedrect = createSprite(200,200,50,80);
    fixedrect.shapeColor = "green";
     fixedrect.debug =true; 
     movingRect = createSprite(400,200,80,30);
      movingRect.shapeColor = "green"; 
      movingRect.debug = true; 
    } 
      function draw(){
         background(0,0,0);
         movingRect.x = World.mouseX;
          movingRect.y = World.mouseY;
           if(movingRect.x - fixedrect.x < fixedrect.width/2 + movingRect.width/2
            && fixedrect.x - movingRect.x < fixedrect.width/2 + movingRect.width/2
            && movingRect.y - fixedrect.y < fixedrect.height/2 + movingRect.height/2
            && fixedrect.y - movingRect.y < fixedrect.height/2 + movingRect.height/2){ 
             movingRect.shapeColor = "red";
              fixedrect.shapeColor = "red";
             }
              else{
                movingRect.shapeColor="green";
                 fixedrect.shapeColor = "green";
                 }
                  drawSprites();
                }
 






