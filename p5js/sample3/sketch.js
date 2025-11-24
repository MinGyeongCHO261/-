let eyeLX, eyeLY, eyeRX, eyeRY; 
let isBlinking = false;       
let blushOn = false;          
let headXOffset = 0; 
let isSad = false; 

function setup() {
  createCanvas(600, 400);
}

//키보드
//좌우로 움직이기
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    headXOffset = -30; 
  } else if (keyCode === RIGHT_ARROW) {
    headXOffset = 30; 
  }

//블러셔 
  if (key === 'b') {
    blushOn = !blushOn;
  }
  

//원상태 
  if (key === 'r') {
    isSad = false;
  }
  
  if (key === 's'){
    saveGif('mySketch', 10);
  }
}

//마우스
function mousePressed() {
  isBlinking = true; 
}

function mouseReleased() {
  isBlinking = false; 
}

function draw() {
  let mouseSpeed = dist(mouseX, mouseY, pmouseX, pmouseY);
  if (mouseSpeed > 30) { 
    isSad = true; 
  }

//배경 변경
  if (isSad) {
    background('#E5F0FF'); 
  } else {
    background('#FFE5E5'); 
  }
  

  push(); 
  translate(headXOffset, 0); //이걸 작성해야 모든 도형에 더해줄 필요 x

//뒷머리
  fill(0);
  rect(175, 130, 250, 250, 20, 20, 0, 0);
  
//상의
  fill('#808080');
  rect(130, 330, 340, 70, 20, 20, 0, 0);

//목
  fill(255, 235, 220);
  noStroke();
  rect(270, 280, 60, 50);
  triangle(270, 330, 330, 330, 300, 360);

//귀
  ellipse(180, 160, 50, 50);
  ellipse(420, 160, 50, 50);
  stroke(160);
  ellipse(180, 160, 30, 30);
  ellipse(420, 160, 30, 30);
  
//얼굴형
  stroke(150);
  ellipse(300, 160, 240, 250);
  
//앞머리
  fill(0);
  noStroke();
  beginShape();
  vertex(180, 110);
  bezierVertex(200, -5, 400, -5, 420, 110);
  vertex(420, 140);
  vertex(180, 140);
  endShape(CLOSE);
  fill(255, 235, 220);
  triangle(230, 140, 250, 90, 270, 140);
  triangle(340, 140, 360, 90, 380, 140);
  
//눈썹
  push();
  noFill();
  stroke(0);
  strokeWeight(5);
  bezier(200, 150, 225, 143, 245, 143, 270, 150);
  bezier(330, 150, 355, 143, 375, 143, 400, 150);
  pop();
  
  
//눈 그리기 
  if (isBlinking) {
    stroke(0);
    strokeWeight(3);
    line(210, 175, 260, 175);
    line(340, 175, 390, 175);
  } else {
//속눈썹
    push();
    noFill(); 
    stroke(50); 
    strokeWeight(1.3);
//왼쪽
    line(212, 168, 212, 158);
    line(218, 165, 218, 155);
    line(224, 163, 224, 153);
    line(230, 162, 230, 152);
    line(236, 161, 236, 151);
    line(242, 162, 242, 152);
    line(248, 163, 248, 153);
    line(254, 165, 254, 155);
//오른쪽
    line(342, 168, 342, 158);
    line(348, 165, 348, 155);
    line(354, 163, 354, 153);
    line(360, 162, 360, 152);
    line(366, 161, 366, 151);
    line(372, 162, 372, 152);
    line(378, 163, 378, 153);
    line(384, 165, 384, 155);
    line(390, 168, 390, 158);
    pop();
    
//눈
    fill(255);
    stroke(10);
    ellipse(235, 175, 60, 30);
    ellipse(365, 175, 60, 30);
    eyeLX = map(mouseX, 0, width, 235-7, 235+7, true);
    eyeLY = map(mouseY, 0, height, 175-4, 175+4, true);
    eyeRX = map(mouseX, 0, width, 365-7, 365+7, true);
    eyeRY = map(mouseY, 0, height, 175-4, 175+4, true);

//눈알
    fill(0);
    ellipse(eyeLX, eyeLY, 35, 28);
    ellipse(eyeRX, eyeRY, 35, 28);
    fill(255);
    ellipse(eyeLX + 5, eyeLY + 5, 5, 5);
    ellipse(eyeLX, eyeLY, 10, 10);
    ellipse(eyeRX + 5, eyeRY + 5, 5, 5);
    ellipse(eyeRX, eyeRY, 10, 10);

//쌍커풀
    push();
    noFill();
    stroke(0);
    bezier(200, 168, 225, 153, 240, 155, 265, 166);
    bezier(397, 166, 372, 155, 357, 153, 332, 168);
    pop();
  }

//코
  line(300, 190, 290, 220);
  line(290, 220, 305, 220);
  
  
//입 모양 바꾸기
  push();
  noFill();
  stroke('#FF9999');
  strokeWeight(3);
  if (isSad) {
    bezier(266, 240, 280, 220, 320, 220, 335, 240);
  } else {
    bezier(266, 240, 280, 260, 320, 260, 335, 240);
  }
  pop();
  
//볼터치
  if (blushOn) {
    noStroke();
    fill('#FFCCCC');
    ellipse(220, 205, 30, 15);
    ellipse(385, 205, 30, 15);
  }
  
  pop(); 
}
