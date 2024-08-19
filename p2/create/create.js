const canvas = document.getElementById("canvas");
let screenWidth = window.innerWidth;
let canvasWidth;

if (screenWidth < 450) {
    canvasWidth = 300; // set the minimum width to 300px
  } else if (screenWidth > 1000) {
    canvasWidth = 900; // set the maximum width to 700px
  } else {
    canvasWidth = screenWidth - 200;
  }

canvas.width = canvasWidth;
canvas.height = 400;

// Calculate and set the horizontal center position
const centerX = (screenWidth - canvasWidth) / 2;
canvas.style.left = `${centerX}px`;

let context = canvas.getContext("2d");
let start_background_color = "white";
context.fillStyle = start_background_color;
context.fillRect(0, 0, canvas.width, canvas.height);

let draw_color = "white";
let draw_width = "10";
let is_drawing = false;

function change_color(element) {
    draw_color = window.getComputedStyle(element, null).backgroundColor;
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event) {
    is_drawing = true;
    event.preventDefault();
    context.beginPath();
    if (event.type === "touchstart") {
        context.moveTo(event.touches[0].pageX - canvas.offsetLeft,
                       event.touches[0].pageY - canvas.offsetTop);
    } else {
        context.moveTo(event.pageX - canvas.offsetLeft,
                       event.pageY - canvas.offsetTop);
    }
}

function draw(event) {
    if(is_drawing) {
        context.lineTo(event.pageX - canvas.offsetLeft,
                       event.pageY - canvas.offsetTop);
        context.strokeStyle = draw_color;
        context.lineWidth = draw_width;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
    }
    event.preventDefault();
}

function stop(event) {
    if (is_drawing){
        context.stroke();
        context.closePath();
        is_drawing = false;
    }
    event.preventDefault();
}

function clear_canvas() {
    context.fillStyle = start_background_color;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);
}




const directionsElement = document.getElementById('directions');

function calculateFontSize() {
  const textContent = directionsElement.textContent;
  const spanText = directionsElement.querySelector('span').textContent;
  const textWithoutSpan = textContent.replace(spanText, '');
  
  // Calculate the width of the text and span using a large base font size
  const textWidth = getTextWidth(textWithoutSpan, 'Unica One', 100);
  const spanWidth = getTextWidth(spanText, 'Climate Crisis', 100); // Use the span's font
  const totalWidth = textWidth + spanWidth;
  
  // Calculate the container width and set the font size proportionally
  const containerWidth = window.innerWidth - 40; // Subtract 40px for extra padding (adjusted from 20px)
  const fontSize = Math.min((containerWidth / totalWidth) * 90, 100); // Adjust the multiplier to 90% of the calculated size
  directionsElement.style.fontSize = `${fontSize}px`;
}

function getTextWidth(text, font, fontSize) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = `${fontSize}px ${font}`;
  const metrics = ctx.measureText(text);
  return metrics.width;
}

window.addEventListener('resize', calculateFontSize);
calculateFontSize();