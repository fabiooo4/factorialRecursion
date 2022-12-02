let input;

function setup() {
  createCanvas(400, 400);

  input = createInput('1');
  input.position(10, 370);
  input.size(100, 15);
  input.input(getInput);
}

function draw() {
  background(0);

  let f = factorial(getInput());

  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(f, width/2, height/2)
}

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function getInput() {
  return input.value();
}