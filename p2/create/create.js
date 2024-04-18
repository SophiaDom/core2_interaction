const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 200;
canvas.height = 400;

// Calculate and set the horizontal center position
const centerX = (window.innerWidth - canvas.width) / 2;
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