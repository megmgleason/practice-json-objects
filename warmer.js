let backgroundColor, spherePosition, rectPosition;

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;

  // This variable contains a JSON object
  spherePosition = {
    x: 100,
    y: 100
  };
  rectPosition = {
    x: 130,
    y: 140
  };
}

function draw() {
  background(backgroundColor);
  ellipse(spherePosition.x, spherePosition.y, 20, 20);
  
  rect(rectPosition.x, rectPosition.y, 20, 20);
  // line(spherePosition.x, spherePosition.y, rectPosition.x, rectPosition.y);
  
  let mousePosition = {
    "x": mouseX,
    "y": mouseY,
  }
  
  let distance = round(computeDistance(spherePosition, mousePosition)); //Round() needs a number, so you can only use it bc computeDistance returns a number
  let category = computeCategoryOfDistance(spherePosition, mousePosition);
  text(`The circle & square are ${distance} units apart. You are ${category}`, 20, 20); //${} allows us to access the variable
}

function computeDistance(point1,point2){
  let deltaX = point1.x - point2.x;   //define variable here bc we only need it inside function
  let deltaY = point1.y - point2.y;
  
  let distance = sqrt((deltaX ** 2)+ (deltaY **2) ) //distance formula. ** is to the power of. sqrt is square root
  
  //this is a return statement
  return distance;  
}

function computeCategoryOfDistance(point1,point2){
  let distance = computeDistance(point1, point2);
  if (distance>200){
    backgroundColor = color (240, 10, 100);
    return 'cold';
  } else if (distance>50){
    backgroundColor = color (120, 10, 100);
    return 'warmer';
  } else{
    backgroundColor = color (0, 10, 100);
    return 'red hot!';
  }
}

function mousePressed() {
  spherePosition.x = random(width);
  spherePosition.y = random(height);
}
