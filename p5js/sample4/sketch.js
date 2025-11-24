function setup() {
  createCanvas(600, 400);
}

function draw() {
  randomSeed(611);

  background(240, 235, 225);
  
  //큰 원
  fill(255);
  stroke(0);
  strokeWeight(1);
  circle(300, 200, 399);
  
  //작은 원
  stroke(210);
  circle(300, 200, 300);
  
  //케이크
  fill('#66B266');
  triangle(290, 60, 400, 250, 460, 190);
  fill('	#E0FFE0');
  quad(290, 60, 280, 67, 377, 260, 400, 250);
  
  //초콜릿
  let x = 400;
  let y = 125;
  let w = 50;
  let h = 123;
  
  fill('#800000');
  rect(x, y, w, h); 
  
  noStroke();
  for (let n = 0; n < 100; n++) {  
    let rw = random(3, 15); 
    let rh = random(6, 15); 
    let rx = random(x, x + w - rw);
    let ry = random(y, y + h - rh);
    
    let c = random([color('#FFFF00'), color('#FFA040')]);
    fill(c);
    stroke(255, 150);
    strokeWeight(1.5);
    rect(rx, ry, rw, rh);
  }
  
  //아이스크림
  let colorAmt = sin(frameCount * 0.02) + 1 / 2;
  let arcColor1 = color('#FF80FF');
  let arcColor2 = color('#80FFFF');
  let arcSize = 100 + sin(frameCount * 0.04) * 20;
  
  stroke(210);
  fill(lerpColor(arcColor1, arcColor2, colorAmt));
  arc(300, 200, arcSize, arcSize, 0, radians(230), PIE);
  
  //꽃 모양
  let petalSize = 10 + sin(frameCount * 0.05) * 3;
  let flowerOffset = sin(frameCount * 0.10) * 8;
  let flowerOffset2 = cos(frameCount * 0.01) * 8;
  let sideOffset = cos(frameCount * 0.03) * 10;
  let d = 10;
  
  stroke(100);
  fill('#FFCCCC');
  let cx1 = 230 + flowerOffset;
  let cy1 = 40 - flowerOffset2;
  circle(cx1, cy1, 20);
  
  fill('#FF9999');
  circle(cx1, cy1 - d, petalSize);
  circle(cx1, cy1 + d, petalSize);      
  circle(cx1 - d, cy1, petalSize); 
  circle(cx1 + d, cy1, petalSize);
  circle(cx1 - d * 0.7, cy1 - d * 0.7, petalSize); 
  circle(cx1 + d * 0.7, cy1 - d * 0.7, petalSize); 
  circle(cx1 - d * 0.7, cy1 + d * 0.7, petalSize); 
  circle(cx1 + d * 0.7, cy1 + d * 0.7, petalSize);
  
  
  fill('#FFCC99');
  let cx2 = 370 - flowerOffset;
  let cy2 = 40 - flowerOffset2;
  circle(cx2, cy2, 20);
  
  fill('#FFFF33');
  circle(cx2, cy2 - d, petalSize);
  circle(cx2, cy2 + d, petalSize);      
  circle(cx2 - d, cy2, petalSize); 
  circle(cx2 + d, cy2, petalSize);
  circle(cx2 - d * 0.7, cy2 - d * 0.7, petalSize); 
  circle(cx2 + d * 0.7, cy2 - d * 0.7, petalSize); 
  circle(cx2 - d * 0.7, cy2 + d * 0.7, petalSize); 
  circle(cx2 + d * 0.7, cy2 + d * 0.7, petalSize);
  
  
  fill('#FFCC99');
  let cx3 = 230 - flowerOffset;
  let cy3 = 360 + flowerOffset2;
  circle(cx3, cy3, 20);
  
  fill('#FFFF33');
  circle(cx3, cy3 - d, petalSize);
  circle(cx3, cy3 + d, petalSize);      
  circle(cx3 - d, cy3, petalSize); 
  circle(cx3 + d, cy3, petalSize);
  circle(cx3 - d * 0.7, cy3 - d * 0.7, petalSize); 
  circle(cx3 + d * 0.7, cy3 - d * 0.7, petalSize); 
  circle(cx3 - d * 0.7, cy3 + d * 0.7, petalSize); 
  circle(cx3 + d * 0.7, cy3 + d * 0.7, petalSize);
  
  
  fill('#FFCCCC');
  let cx4 = 370 + flowerOffset;
  let cy4 = 360 + flowerOffset2;
  circle(cx4, cy4, 20);
  
  fill('#FF9999');
  circle(cx4, cy4 - d, petalSize);
  circle(cx4, cy4 + d, petalSize);      
  circle(cx4 - d, cy4, petalSize); 
  circle(cx4 + d, cy4, petalSize);
  circle(cx4 - d * 0.7, cy4 - d * 0.7, petalSize); 
  circle(cx4 + d * 0.7, cy4 - d * 0.7, petalSize); 
  circle(cx4 - d * 0.7, cy4 + d * 0.7, petalSize); 
  circle(cx4 + d * 0.7, cy4 + d * 0.7, petalSize);
  
  
  fill('#600060');
  let cx5 = 127 + sideOffset;
  let cy5 = 200;
  circle(cx5, cy5, 20);
  
  fill('	#E0C0FF');
  circle(cx5, cy5 - d, petalSize);
  circle(cx5, cy5 + d, petalSize);      
  circle(cx5 - d, cy5, petalSize); 
  circle(cx5 + d, cy5, petalSize);
  circle(cx5 - d * 0.7, cy5 - d * 0.7, petalSize); 
  circle(cx5 + d * 0.7, cy5 - d * 0.7, petalSize); 
  circle(cx5 - d * 0.7, cy5 + d * 0.7, petalSize); 
  circle(cx5 + d * 0.7, cy5 + d * 0.7, petalSize);
  
  
  fill('#600060');
  let cx6 = 477 - sideOffset;
  let cy6 = 200;
  circle(cx6, cy6, 20);
  
  fill('	#E0C0FF');
  circle(cx6, cy6 - d, petalSize);
  circle(cx6, cy6 + d, petalSize);      
  circle(cx6 - d, cy6, petalSize); 
  circle(cx6 + d, cy6, petalSize);
  circle(cx6 - d * 0.7, cy6 - d * 0.7, petalSize); 
  circle(cx6 + d * 0.7, cy6 - d * 0.7, petalSize); 
  circle(cx6 - d * 0.7, cy6 + d * 0.7, petalSize); 
  circle(cx6 + d * 0.7, cy6 + d * 0.7, petalSize);
  
  
  //데코
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
      selectedColor = color(150, 200, 100, random(100, 200)); 
    } else {
      selectedColor = color(200, 50, 80, random(100, 200)); 
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

  function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}
