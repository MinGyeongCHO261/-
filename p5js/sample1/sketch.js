function setup() {
  createCanvas(600, 400);
  background(240, 235, 225);
  
  circle(300, 200, 399);
  
  stroke(210);
  circle(300, 200, 300);
  
  fill('#66B266');
  triangle(290, 60, 400, 250, 460, 190);
  fill('	#E0FFE0');
  quad(290, 60, 280, 67, 377, 260, 400, 250);
  
  
  
  let x = 400;
  let y = 125;
  let w = 50;
  let h = 123;
  
  
  fill('#800000');
  rect(x, y, w, h); // 큰 사각형 테두리
  
  noStroke();
  for (let n = 0; n < 100; n++) {  // 블록 개수 조절 가능
    let rw = random(3, 15); // 블록 가로 크기
    let rh = random(6, 15); // 블록 세로 크기
    let rx = random(x, x + w - rw);
    let ry = random(y, y + h - rh);
    
    let c = random([color('#FFFF00'), color('#FFA040')]);
    
    fill(c);
    stroke(255, 150);
    strokeWeight(1.5);
    rect(rx, ry, rw, rh);
  }
  
  stroke(210);
  fill('#FF80FF	');
  arc(300, 200, 100, 100, 0, radians(230), PIE);
  
  stroke(100);
  fill('#FFCCCC');
  circle(230, 40, 20);
  
  fill('#FF9999');
  let cx = 230;
  let cy = 40;
  let d = 10;
  
  circle(cx, cy - d, 10);
  circle(cx, cy + d, 10);      
  circle(cx - d, cy, 10); 
  circle(cx + d, cy, 10);
  circle(cx - d * 0.7, cy - d * 0.7, 10); 
  circle(cx + d * 0.7, cy - d * 0.7, 10); 
  circle(cx - d * 0.7, cy + d * 0.7, 10); 
  circle(cx + d * 0.7, cy + d * 0.7, 10);
  
  fill('#FFCC99');
  circle(370, 40, 20);
  
  fill('#FFFF33');
  cx = 370;
  cy = 40;
  d = 10;
  
  circle(cx, cy - d, 10);
  circle(cx, cy + d, 10);      
  circle(cx - d, cy, 10); 
  circle(cx + d, cy, 10);
  circle(cx - d * 0.7, cy - d * 0.7, 10); 
  circle(cx + d * 0.7, cy - d * 0.7, 10); 
  circle(cx - d * 0.7, cy + d * 0.7, 10); 
  circle(cx + d * 0.7, cy + d * 0.7, 10);
  
  fill('#FFCC99');
  circle(230, 360, 20);
  
  fill('#FFFF33');
  cx = 230;
  cy = 360;
  d = 10;
  
  circle(cx, cy - d, 10);
  circle(cx, cy + d, 10);      
  circle(cx - d, cy, 10); 
  circle(cx + d, cy, 10);
  circle(cx - d * 0.7, cy - d * 0.7, 10); 
  circle(cx + d * 0.7, cy - d * 0.7, 10); 
  circle(cx - d * 0.7, cy + d * 0.7, 10); 
  circle(cx + d * 0.7, cy + d * 0.7, 10);
  
  fill('#FFCCCC');
  circle(370, 360, 20);
  
  fill('#FF9999');
  cx = 370;
  cy = 360;
  d = 10;
  
  circle(cx, cy - d, 10);
  circle(cx, cy + d, 10);      
  circle(cx - d, cy, 10); 
  circle(cx + d, cy, 10);
  circle(cx - d * 0.7, cy - d * 0.7, 10); 
  circle(cx + d * 0.7, cy - d * 0.7, 10); 
  circle(cx - d * 0.7, cy + d * 0.7, 10); 
  circle(cx + d * 0.7, cy + d * 0.7, 10);
  
  
  fill('#600060');
  circle(127, 200, 20);
  
  fill('	#E0C0FF');
  cx = 127;
  cy = 200;
  d = 10;
  
  circle(cx, cy - d, 10);
  circle(cx, cy + d, 10);      
  circle(cx - d, cy, 10); 
  circle(cx + d, cy, 10);
  circle(cx - d * 0.7, cy - d * 0.7, 10); 
  circle(cx + d * 0.7, cy - d * 0.7, 10); 
  circle(cx - d * 0.7, cy + d * 0.7, 10); 
  circle(cx + d * 0.7, cy + d * 0.7, 10);
  
  fill('#600060');
  circle(477, 200, 20);
  
  fill('	#E0C0FF');
  cx = 477;
  cy = 200;
  d = 10;
  
  circle(cx, cy - d, 10);
  circle(cx, cy + d, 10);      
  circle(cx - d, cy, 10); 
  circle(cx + d, cy, 10);
  circle(cx - d * 0.7, cy - d * 0.7, 10); 
  circle(cx + d * 0.7, cy - d * 0.7, 10); 
  circle(cx - d * 0.7, cy + d * 0.7, 10); 
  circle(cx + d * 0.7, cy + d * 0.7, 10);
  
  

  strokeWeight(3); 
  
  let plateCenterX = 300;
  let plateCenterY = 200;
  let innerPlateRadius = 300 / 2;
  let garnishRadiusMin = 100; 
  let garnishRadiusMax = innerPlateRadius - 10; 
  let startAngle = radians(35); 
  let endAngle = radians(260); 
  for (let i = 0; i < 1000; i++) {

    let selectedColor;
    if (random(1) < 0.6) { 
      selectedColor = color(150, 200, 100, random(100, 200)); // 피스타치오 초록
    } else {
      selectedColor = color(200, 50, 80, random(100, 200)); // 라즈베리 붉은색
    }
    stroke(selectedColor);

    let r = random(garnishRadiusMin, garnishRadiusMax); 
    let angle = random(startAngle, endAngle); 

    let px = plateCenterX + r * cos(angle);
    let py = plateCenterY + r * sin(angle);

  point(px, py);
  }
  
  strokeWeight(1);
  
}
