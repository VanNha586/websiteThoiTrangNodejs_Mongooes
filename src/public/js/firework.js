function turn() {
  return Math.PI * 2;
}

function randomColor(hue) {
  return `${hue},${randomOfRange(40, 90)}%,${randomOfRange(10, 90)}%`;
}
function getColor(color, alpha = 1) {
  return `hsla(${color},${alpha})`;
}

function randomOfRange(min, max, str) {
  let value = min + Math.random() * (max - min);
  if (str == "int") return Math.round(value);
  return value;
}

function setcanvasDimensions() {
  canvas.height = document.body.offsetHeight;
  canvas.width = document.body.offsetWidth;
  let { width: x, height: y } = canvas;
  x /= 2;
  y /= 2;
  center = { x, y };
  mouse = { x, y };
}
function createParticles(n, justExplose = false) {
  n = n * randomOfRange(0.5, 1);
  const distance = 30 * randomOfRange(0.1, 0.5);
  let random = randomOfRange(0, 1, "int");
  for (let i = 0; i < n; i++) {
    const angle = (i * turn()) / n;
    let color;

    if (random) color = randomColor(randomOfRange(0, 360));
    else color = randomColor(hue);

    particlesArr.push(new Particle({ angle, distance, color, justExplose }));
  }
  hue = (hue % 360) + 15;
}
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = `rgba(${bgColor},${0.1})`;
  c.fillRect(0, 0, innerWidth, innerHeight);
  particlesArr.forEach((p, i) => {
    p.update();
    if (!p.checkVisibility()) particlesArr.splice(i, 1);
  });
}
function setAnimationInteval() {
  interval = setInterval(() => {
    randPos_createParticles();
  }, 1000);
}

function setResizeListener() {
  let timer;
  let time = 300;

  window.addEventListener("resize", () => {
    canvas.classList.add("hide");
    clearTimeout(timer);
    timer = setTimeout(() => {
      setcanvasDimensions();
      particlesArr = [];
      setTimeout(() => {
        canvas.classList.remove("hide");
      }, 0);
    }, time);
  });
}
function setClickListener() {
  let timer;
  window.addEventListener("click", (event) => {
    clearInterval(interval);
    clearTimeout(timer);

    timer = setTimeout(() => {
      setAnimationInteval();
    }, 5000);

    let { x, y } = event;
    x = x - canvas.offsetLeft;
    y = y - canvas.offsetTop;
    if (x < 0 || x > canvas.width) x = center.x;
    if (y < 0 || y > canvas.height) y = center.y;
    mouse = { x, y };

    createParticles(MAX);
  });
}

function randomizeMousePosition() {
  mouse.x = randomOfRange(document.body.offsetLeft, document.body.offsetWidth);
  mouse.y = randomOfRange(document.body.offsetTop, document.body.offsetHeight);
}
function randPos_createParticles() {
  randomizeMousePosition();
  createParticles(MAX);
}

function setKeypressListener() {
  window.addEventListener("keypress", (event) => {
    console.log(event.key.toLocaleLowerCase());
    let key = event.key.toLocaleLowerCase();
    if (lettersArray[key]) createShape(lettersArray[key]);
  });
}
function fireInPos(x, y) {
  mouse.x = x;
  mouse.y = y;
  createParticles(MAX / 3, true);
}
function createShape(letter) {
  //letter is a string
  let colNumber = 4;
  let rowNumber = 6;
  let dx = (dy = 50);
  let offsetX = (canvas.width - colNumber * dx) / 2;
  let offsetY = (canvas.height - rowNumber * dy) / 2;

  console.log(offsetX);
  letter = letter.split("-");
  letter.forEach((point) => {
    fireInPos(offsetX + dx * point[0], offsetY + dy * point[1] * 1);
  });
}

class Particle {
  constructor({ angle, distance, color, justExplose = false }) {
    //distance == the distance from the center
    //or we can say its the radius of the ring at the begenning
    this.justExplose = justExplose;
    this.radius = randomOfRange(0.04 * distance, 0.4 * distance);
    this.velocity = {};
    this.velocity.x = cos(angle) * distance * randomOfRange(0.2, 0.5);
    this.velocity.y = sin(angle) * distance * randomOfRange(0.5, 0.5);
    this.x = this.velocity.x + mouse.x;
    this.y = this.velocity.y + mouse.y;

    this.yPos = mouse.y; //used this instead of this.y<100 beacause this.y is increasing then it decreases while this.yPos only increases
    this.travelled = 0;
    this.isTimeToExplose = !this.justExplose;
    this.color = color;
    this.alpha = randomOfRange(0.5, 1);
    this.gravity = randomOfRange(0.007, 0.01);
    this.speed = 1;
    setTimeout(() => {
      this.isTimeToExplose = true;
    }, 200);
  }

  draw() {
    c.beginPath();
    c.fillStyle = getColor(this.color, this.alpha);
    c.shadowColor = getColor(this.color, 0.1 * this.alpha);
    c.shadowBlur = 0.01;
    c.arc(this.x, this.y, this.radius, 0, turn());
    c.fill();
  }
  update() {
    if (this.yPos < canvas.height / 5 || this.speed < 0.5 || this.justExplose) {
      if (!this.isTimeToExplose) {
        this.draw();
        return;
      }
      this.velocity.y += this.gravity;
      this.velocity.x = this.velocity.x * (1 - this.gravity / 10);
      this.alpha -= 0.02;
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.gravity += 0.005;
    } else {
      const toTravelMax = 5;
      const toTravel = toTravelMax * this.speed;
      this.travelled += toTravel;
      this.y -= toTravel;
      this.yPos -= toTravel;
      this.speed -= 0.005;
    }

    this.draw();
  }
  checkVisibility() {
    if (this.alpha > 0) return true;
    return false;
  }
}

let cos = Math.cos,
  sin = Math.sin;
let canvas = document.querySelector("canvas");
let sliderInput = document.querySelector("#slider");
let canvasMax,
  center,
  mouse,
  hue = 0;
let bgColor = "5,2,17";
document.body.style.backgroundColor = "rgb(" + bgColor + ")";
let c = canvas.getContext("2d");
let particlesArr = [];
const MAX = 30;
let interval;

let lettersArray = {
  a: "05-13-21-23-33-45",
  b: "00-01-10-20-31-22-12-02-33-34-25-15-05-03-04",
  c: "31-21-11-12-13-14-24-34",
  d: "12-13-14-22-33-34-25-15",
  e: "31-21-11-12-13-23-33-14-15-25-35",
  f: "31-21-11-12-13-23-33-14-15",
  g: "01-11-21-31-02-03-04-14-24-23-33-43-44-45",
  h: "01-02-03-04-05-41-42-43-44-45-13-23-33",
  i: "11-21-31-22-23-24-25-15-35",
  j: "31-32-33-34-35-25-15-14",
  k: "11-12-13-14-15-31-22-24-35",
  l: "11-12-13-14-15-25-35",
  m: "01-02-03-04-41-42-43-44-12-23-32",
  n: "01-02-03-04-41-42-43-44-12-23-34",
  o: "02-03-04-42-43-44-11-21-31-15-25-35",
  p: "01-02-03-04-05-11-21-31-32-33-23-13",
  q: "01-02-03-34-35-11-21-31-32-33-23-21-13",
  r: "01-02-03-04-05-11-21-31-32-33-23-21-24-35",
  s: "01-02-03-11-21-31-33-23-21-34-35-25-15-05-13",
  s: "02-11-21-31-23-21-34-25-15-05-13",
  t: "01-11-21-31-41-22-23-24-25",
  u: "11-12-13-14-24-34-33-32-31",
  v: "01-13-25-33-41",
  w: "02-03-04-05-14-23-34-45-44-43-42",
  x: "01-12-23-41-32-14-05-34-45",
  y: "01-12-23-41-32-14-05",
  z: "01-11-21-31-23-41-32-14-05-15-25-35-45",
};

setcanvasDimensions();

setResizeListener();
setClickListener();
animate();
setAnimationInteval();

setKeypressListener();
createShape(lettersArray.o);
