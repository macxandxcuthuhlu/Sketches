function setup() {//function required to have a canvas to work on
  createCanvas(500, 600);
}

//all of the different variables for the rects
var rect_end_x =500;
var rect_end_y =500;
var rect_start_y = 500;
var rect_start_x = 500;

//color variables
var timer = 0;
var r = 0;
var g = 0;
var b = 0;
var r2 = 0;
var g2 = 0;
var b2 = 0;
var blue_eyes = 0;
var color_changer = 0;

//rectangle speed variable
var dx = -2;
var dy = -1;
var weight = 1;

//function that draws everything on screen
function draw() {
  stroke(2)
  
  //if statement to change color back and forth
  if (timer % 12 == 0) {
    if (color_changer == 0) {
    g = 65;
    b = 90;
    
    //rectangle colors
    r2 = 100;
    g2 = 100;
    b2 = 100;
      
    color_changer = 1;//variable resposible for flipping colors back and forth
    }
    
    else 
    {
    g = 90;
    b = 65;
      
    r2 = 10;
    g2 = 10;
    b2 = 10;
      
    color_changer = 0;
    }
}
  
  //creates the checkered pattern
  fill(r,g,b);
  square(0,0, 600);
  
  fill(30,b,g);
  square(0,0,100);
  square(200,0,100);
  square(400,0,100);
  
  square(100,100,100);
  square(300,100,100);
  
  square(0,200,100);
  square(200,200,100);
  square(400,200,100);
  
  square(100,300,100);
  square(300,300,100);
  
  square(0,400,100);
  square(200,400,100);
  square(400,400,100);
  
  square(100,500,100);
  square(300,500,100);
  
  
  
  
  
  //creates the face
  fill(250-r, 255-g, 255-b);
  ellipse(290, 250, 300, 400);
  
  //creats main different oval in face
  fill(245-r, 190-b, 190-g);
  ellipse(290, 200, 300, 200);
  
  //creates the two cheek ovals
  fill(240-r, 245-g, 245-b);
  ellipse(210, 240, 120, 200);
  ellipse(360, 240,120, 200);
  
  //creates nose
  fill(255-r, 55+g, 55+(b));
  triangle(50,350, 250, 300, 250, 210);
  
  //creats the glasses
  fill(365-b-b-b, 373-b-b-b, 373-b-b-b);
  ellipse(330, 180, 120, 80);
  ellipse(200, 180, 120, 80);
  rect(250, 180, 20, 5);
  quad(380, 186, 445, 175, 449, 180, 386, 190);
  quad(445, 175, 430, 195);
  
  //slowly changes the color of eyes
  if (timer % 1 == 0) {
  blue_eyes -= 1;
  }
  if (timer % 60 == 0 && timer != 0) {
    blue_eyes += 50;
  }
  
  //creates the blue eyes with different layers of circles
  fill(0, 130 +blue_eyes, 255+blue_eyes);
  circle(330, 190, 50);
  circle(200, 190, 50);
  
  fill(50 + blue_eyes, 160+blue_eyes, 255+blue_eyes);
  circle(330, 190, 40);
  circle(200, 190, 40);
  
  fill(150+blue_eyes, 190+blue_eyes, 255+blue_eyes);
  circle(330, 190, 30);
  circle(200, 190, 30);
  //creates center circle also known as the pupil
  fill(0, 0, 0);
  circle(330, 190, 15);
  circle(200, 190, 15);
  
  
  //creates a strand of hair and moves it to the right to make it look like there are more hairs then there are
  fill(200-b, 100-g,100-g);
  beginShape();
  vertex(232, 90);
  vertex(271, 56);
  vertex(240, 70);
  vertex(215, 94);
  vertex(215, 100);
  endShape();
  
  beginShape();
  vertex(212, 90);
  vertex(251, 56);
  vertex(220, 70);
  vertex(195, 94);
  vertex(195, 100);
  endShape();
  
  beginShape();
  vertex(252, 90);
  vertex(291, 56);
  vertex(260, 70);
  vertex(235, 94);
  vertex(235, 100);
  endShape();
  
  beginShape();
  vertex(272, 92);
  vertex(311, 58);
  vertex(280, 72);
  vertex(255, 96);
  vertex(255, 102);
  endShape();
  
  beginShape();
  vertex(292, 92);
  vertex(331, 58);
  vertex(300, 72);
  vertex(275, 96);
  vertex(275, 102);
  endShape();
  
  //creates the strand of hair that is inverted
  beginShape();
  vertex(375, 96);
  vertex(375, 102);
  vertex(321, 58);
  vertex(340, 72);
  vertex(382, 92);
  endShape();
  
  //creates the bottom part of ponytail
  quad(150, 330, 100, 380, 135, 420, 165, 360);
  quad(100, 380, 250, 470, 234, 476, 135, 420);
  
  
  
  
  //creates upper lip
  fill(320-(3*g), 140-(2*b), 30);
  rect(255, 340, 50, 20);
  circle(300, 350, 30);
  circle(250, 350, 30);
  
  //creates bottom lip
  rect(245, 380, 50, 20);
  circle(295, 390, 30);
  circle(245, 390, 30);
  
  //creates vibrant blue shirt
  fill(0, 305-(2*b), 360-(2*b));
  ellipse(287, 439, 200, 50);
  ellipse(288, 459, 250, 50);
  ellipse(289, 489, 300, 50);
  ellipse(294, 519, 400, 60);
  
  //creates a little yellow title in the top left
  fill(255, 255, 0);
  textFont("Helvetica", 30);
  text("Sam Stuckey:", 5, 100);
  textFont("Helvetica", 20);
  text("a personal deep", 10, 130);
  text("dive analysis", 10, 150);
  
  
  
  //reorients rectangles if they hit a wall along with setting new beginning points for said rectangles
if (timer%5 == 0) {//only checks certain frames to make sure the rectangle does not get stuck there ifinitly being turned around
  
  if (rect_end_x > 500) {
    dx = -1*(dx);
    rect_start_x = rect_end_x;
    rect_start_y = rect_end_y;
  } 
  if (rect_end_x < 0) {
    dx = -1*(dx) + 1;
    rect_start_x = rect_end_x;
    rect_start_y = rect_end_y;
  }
  if (rect_end_y > 600) {
    dy = -1*(dy);
    rect_start_x = rect_end_x;
    rect_start_y = rect_end_y;
  } 
  if (rect_end_y < 0) {
    dy = -1*(dy) + 1;
    rect_start_y = rect_end_y;
    rect_start_x = rect_end_x;
  }
}
  //creates the color for the rectangles
  fill(r2,g2,b2);
  
  //creates the rectangles
  quad(rect_start_x , rect_start_y+235, rect_start_x , rect_start_y+140, rect_end_x , rect_end_y+140, rect_end_x , rect_end_y+235);
  
  quad(rect_start_x , rect_start_y+45, rect_start_x , rect_start_y-45, rect_end_x , rect_end_y-45, rect_end_x , rect_end_y+45);
  
  quad(rect_start_x , rect_start_y-150, rect_start_x , rect_start_y-240, rect_end_x , rect_end_y-240, rect_end_x , rect_end_y-150);
  
  quad(rect_start_x , rect_start_y-350, rect_start_x , rect_start_y-440, rect_end_x , rect_end_y-440, rect_end_x , rect_end_y-350);
  
  //elongates rectangles
  rect_end_x += dx;
  rect_end_y += dy;
  
  //counts the number of frames by incrementing the variable time
  timer++;
  
}


