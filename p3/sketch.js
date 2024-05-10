document.addEventListener("DOMContentLoaded", function() {
  const loadingScreen = document.querySelector(".loadingScreen");

  // Add event listeners for click and keydown events
  document.addEventListener("click", handleInteraction);
  document.addEventListener("keydown", handleInteraction);

  function handleInteraction(event) {
    // Add the slideLeft class to trigger the animation
    loadingScreen.classList.add("slideLeft");

    // Remove the event listeners to prevent multiple animations
    document.removeEventListener("click", handleInteraction);
    document.removeEventListener("keydown", handleInteraction);
  }
});


function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}

const menuBtn = document.getElementById('menu-btn');
const crackedEgg = document.getElementById('crackedegg');

menuBtn.addEventListener('click', () => {
  crackedEgg.style.display = (crackedEgg.style.display === 'none') ? 'block' : 'none';
});

const brokenEggBtn = document.getElementById('brokenegg-btn');

brokenEggBtn.addEventListener('click', () => {
  crackedEgg.style.display = 'block';
});






// Get references to each canvas
const yearsCanvas = document.getElementById('years-canvas');
const daysCanvas = document.getElementById('days-canvas');
const hoursCanvas = document.getElementById('hours-canvas');
const minutesCanvas = document.getElementById('minutes-canvas');
const secondsCanvas = document.getElementById('seconds-canvas');

// Create separate sketches for each function
let yearsSketch;
let daysSketch;
let hoursSketch;
let minutesSketch;
let secondsSketch;

let completedHours;

let msPassed = 0;
const MILLISECONDS_IN_HOUR = 3600000; // 60 minutes * 60 seconds * 1000 milliseconds
const MINUTES_IN_HOUR = 60;
const MILLISECONDS_IN_MINUTE = 60000; // 60 seconds * 1000 milliseconds
const MILLISECONDS_IN_SECOND = 1000;

// Define MARGIN if it's supposed to be a constant
const MARGIN = 10;
const RECT_HEIGHT_SCALE = 2;
const ROTATION_ANGLE = 45;

function setup() {
  // Create a new p5 instance for each canvas
  yearsCanvas.style.zIndex = 0;
  yearsSketch = new p5((p) => {
    p.canvas = yearsCanvas;
    p.setup = yearsSetup;
    p.draw = yearsDraw;
  }, yearsCanvas);

  daysCanvas.style.zIndex = 1;
  daysSketch = new p5((p) => {
    p.canvas = daysCanvas;
    p.setup = daysSetup;
    p.draw = daysDraw;
  }, daysCanvas);

  hoursCanvas.style.zIndex = 2;
  hoursSketch = new p5((p) => {
    p.canvas = hoursCanvas;
    p.setup = hoursSetup;
    p.draw = hoursDraw;
  }, hoursCanvas);

  minutesCanvas.style.zIndex = 3;
  minutesSketch = new p5((p) => {
    p.canvas = minutesCanvas;
    p.setup = minutesSetup;
    p.draw = minutesDraw;
  }, minutesCanvas);

  secondsCanvas.style.zIndex = 0;
  secondsSketch = new p5((p) => {
    p.canvas = secondsCanvas;
    p.setup = secondsSetup;
    p.draw = secondsDraw;
  }, secondsCanvas);
}

// Define setup and draw functions for each sketch
function yearsSetup() {
  createCanvas(windowWidth, windowHeight);
  birthday = new Date("May 12, 2003 18:01:00");
  death = new Date("May 12, 2091 18:01:00");
}

function yearsDraw() {
  background(255, 255, 255, 0); // clear the canvas with a transparent background

  let today = new Date();
  let birthdayTime = birthday.getTime();
  let currentTime = today.getTime();
  let msPassed = currentTime - birthdayTime;

  let secondsPassed = msPassed / 1000;
  let minutesPassed = secondsPassed / 60;
  let hoursPassed = minutesPassed / 60;
  let daysPassed = hoursPassed / 24;
  let yearsPassed = Math.floor(daysPassed / 365.25); // Calculate the number of full years

  // Calculate the width and height of each rectangle
  let rectWidth = width / (yearsPassed + (100 - yearsPassed)); // Divide the canvas width by the number of years passed
  let rectHeight = height;

  let margin = (width - (yearsPassed * rectWidth)) / (yearsPassed + 1);

  // Draw a rectangle for each full year passed
  for (let i = 0; i < yearsPassed; i++) {
    noStroke();
    fill(99, 92, 24); 
    rect(margin + i * (rectWidth + margin), 0, rectWidth, rectHeight);
  }
}

function daysSetup() {
  createCanvas(windowWidth, windowHeight);
  birthday = new Date("May 12, 2003 18:01:00");
}

function daysDraw() {
  background(255,255,255,0); // Clear the canvas with white background

  const today = new Date();
  const birthdayTime = birthday.getTime();
  const currentTime = today.getTime();
  const msPassed = currentTime - birthdayTime;

  const daysPassed = msPassed / (100 * 60 * 60 * 24);
  const daysInCurrentYear = Math.floor(daysPassed % (365.25));

  if (daysInCurrentYear === 0) {
    clear(); // Clear the canvas when daysInCurrentYear is 0
  }

  // Calculate the margin based on the screen size
  const gridSize = Math.ceil(Math.sqrt(daysInCurrentYear));
  let marginX = (width - gridSize * 20) / (gridSize + 1);
  if (width <= 450) {
    marginX = (width - gridSize * 10) / (gridSize + 1);
  }
  let marginY = (height - gridSize * 20) / (gridSize + 1);
  if (width <= 450) {
    marginY = (height - gridSize * 10) / (gridSize + 1);
  }

  // Draw squares for each day not belonging to a completed year
  for (let i = 0; i < daysInCurrentYear; i++) {
    const rowIndex = Math.floor(i / gridSize);
    const colIndex = i % gridSize;
    let squareSize = Math.min(20, Math.floor((width - (gridSize + 1) * marginX) / gridSize), Math.floor((height - (gridSize + 1) * marginY) / gridSize));
    if (width <= 450) {
      squareSize = 10;
    }
    const x = marginX + colIndex * (squareSize + marginX);
    const y = marginY + rowIndex * (squareSize + marginY);
    fill('rgba(138,11,92,1)');
    noStroke();
    rect(x, y, squareSize, squareSize);
}
}

function hoursSetup() {
  createCanvas(windowWidth, windowHeight);
  
  // Define birthday and death dates in a more readable format
  const birthYear = 2003;
  const birthMonth = 5; // May (note: months are 0-based in JavaScript)
  const birthDay = 12;
  const birthHour = 18;
  const birthMinute = 1;
  
  birthDate = new Date(birthYear, birthMonth, birthDay, birthHour, birthMinute, 0);
  deathDate = new Date(2091, birthMonth, birthDay, birthHour, birthMinute, 0);
}


function hoursDraw() {
  background(255, 255, 255, 0);

  const today = new Date();
  const timeElapsed = today.getTime() - birthDate.getTime();

  // Calculate the number of hours that have passed since birthday
  const hoursElapsed = Math.floor(timeElapsed / (1000 * 60 * 60));

  // Calculate the remaining hours that don't complete a day
  const remainingHours = hoursElapsed % 24;

  // Define constants for rectangle dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const RECT_WIDTH = viewportWidth; // Fill the full window width
  const MAX_RECT_HEIGHT = viewportHeight * 0.95 / 50; // Calculate the height based on the viewport height
  const TOP_MARGIN = 20; // top margin
  const BOTTOM_MARGIN = 20; // bottom margin
  const BORDER_WIDTH = 5; // border width
  const BORDER_COLOR = ('green'); 
  const RECT_PADDING = 5;

  const totalAvailableSpace = viewportHeight - TOP_MARGIN - BOTTOM_MARGIN;
  const totalRectSpace = remainingHours * (MAX_RECT_HEIGHT + RECT_PADDING);
  const totalSpacing = remainingHours - 1;
  const spacing = (totalAvailableSpace - totalRectSpace) / totalSpacing;

  fill('green');
  rect(0, TOP_MARGIN, RECT_WIDTH, BORDER_WIDTH);

  for (let i = 0; i < remainingHours; i++) {
    const rectX = 0; // no margin to the left side
    const rectY = TOP_MARGIN + i * (MAX_RECT_HEIGHT + spacing + RECT_PADDING); // add padding to the y-coordinate
    fill('green');
    rect(rectX, rectY, RECT_WIDTH, MAX_RECT_HEIGHT);
  }

drawRectangles(completedHours);
  //bottom border
  rect(0, TOP_MARGIN + totalRectSpace + totalSpacing * spacing, RECT_WIDTH, BORDER_WIDTH);
}

function minutesSetup() {
  createCanvas(windowWidth, windowHeight);
  birthday = new Date("May 12, 2003 18:01:00");
  push(); // Save the current transformation matrix
  translate(windowWidth * 0.3, 0);
  rotate(PI / 4); // Rotate the canvas by 45 degrees
}


  function minutesDraw() {
    background(255, 255, 255, 0);
  
    const today = new Date();
    const birthdayTime = birthday.getTime();
    const currentTime = today.getTime();
    const msPassed = currentTime - birthdayTime;
  
    const minutesPassed = msPassed / MILLISECONDS_IN_MINUTE;
    const completedMinutes = Math.floor(minutesPassed % MINUTES_IN_HOUR);
  
    if (completedMinutes === 0) {
      clear();
    }
  
    drawRectangles(completedMinutes, MINUTES_IN_HOUR, 1, 3);
  }


function drawRectangles(completedMinutes) {
  const totalMinutes = MINUTES_IN_HOUR;
  const rectWidth = (width - 2 * MARGIN) / totalMinutes;
  const rectHeight = 3 * height;

  push(); // Save the current transformation matrix
  rotate(PI / 4); // Rotate the canvas by 45 degrees

  for (let i = 0; i < completedMinutes; i++) {
    const x = i * rectWidth + MARGIN;
    const y = 0;
    const width = rectWidth - MARGIN;
    const height = rectHeight;
    console.log("Red rectangle:", { x, y, width, height });
    noStroke();
    fill('red');
    rect(x, y, width, height);
  }

  pop();
}

function secondsSetup() {
  createCanvas(windowWidth, windowHeight);
  birthday = new Date("May 12, 2003 18:01:00");
}

function secondsDraw() {
  const today = new Date();
  const birthdayTime = birthday.getTime();
  const currentTime = today.getTime();
  const msPassed = currentTime - birthdayTime;

  const secondsPassed = msPassed / MILLISECONDS_IN_SECOND;
  const remainingSeconds = (minutesPassed / 60);

  if (remainingSecondsSeconds === 0) {
    clear();
  }

  drawRectangles(r4emainingSeconds, 60, 1, 1);
}

function drawRectangles(completedSeconds) {
  const totalSeconds = 60; // Total seconds in a minute
  const rectWidth = (width - 2 * MARGIN) / totalSeconds;
  const gap = 5; // Adjust this value to increase or decrease the gap between rectangles
  const totalWidthWithGap = rectWidth + gap; // Calculate the total width including the gap
  const rectHeight = height * RECT_HEIGHT_SCALE;

  // Create a separate coordinate system for the rectangles
  push();
  translate(MARGIN, height - MARGIN); // Move the origin to the bottom left
  rotate(-ROTATION_ANGLE); // Rotate the rectangles to point toward the upper left

  for (let i = 0; i < completedSeconds; i++) {
    const x = i * totalWidthWithGap; // Adjust x position to include the gap
    const y = 0;
    const width = rectWidth;
    const height = rectHeight;
    console.log("Yellow rectangle:", { x, y, width, height });
    noStroke();
    fill('yellow');
    rect(x, y, width, height);
  }

  pop();
}






























// //years
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   birthday = new Date("May 12, 2003 18:01:00");
//   death = new Date("May 12, 2091 18:01:00");
// }

// function draw() {
//   background(255, 255, 255, 0); // clear the canvas with a transparent background

//   let today = new Date();
//   let birthdayTime = birthday.getTime();
//   let currentTime = today.getTime();
//   let msPassed = currentTime - birthdayTime;

//   let secondsPassed = msPassed / 1000;
//   let minutesPassed = secondsPassed / 60;
//   let hoursPassed = minutesPassed / 60;
//   let daysPassed = hoursPassed / 24;
//   let yearsPassed = Math.floor(daysPassed / 365.25); // Calculate the number of full years

//   // Calculate the width and height of each rectangle
//   let rectWidth = width / (yearsPassed + (100 - yearsPassed)); // Divide the canvas width by the number of years passed
//   let rectHeight = height;

//   let margin = (width - (yearsPassed * rectWidth)) / (yearsPassed + 1);

//   // Draw a rectangle for each full year passed
//   for (let i = 0; i < yearsPassed; i++) {
//     noStroke();
//     fill(99, 92, 24); // green fill color
//     rect(margin + i * (rectWidth + margin), 0, rectWidth, rectHeight);
//   }

//   // Calculate the days remaining since the last birthday
//   const daysInCurrentYear = Math.ceil(daysPassed % DAYS_IN_YEAR);
//   console.log("Days in current year:", daysInCurrentYear); // Log daysInCurrentYear to the console

//   // Calculate the width of each rectangle for the remaining days
//   const dayRectWidth = rectWidth / DAYS_IN_YEAR;
  
//   // Draw rectangles for the remaining days in the current year
//   for (let i = 0; i < daysInCurrentYear; i++) {
//     const x = (yearsPassed * rectWidth) + margin + i * dayRectWidth;
//     const y = 0;
//     const width = dayRectWidth;
//     const height = rectHeight;
//     console.log("Red rectangle:", { x, y, width, height }); // Log red rectangle position and dimensions
//     noStroke();
//     fill('red'); // Red fill color
//     rect(x, y, width, height);
//   }
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }







// //days
// const MILLISECONDS_PER_SECOND = 1000;
// const SECONDS_PER_MINUTE = 60;
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const DAYS_PER_YEAR = 365.25;
// const SQUARE_SIZE = 20;

// let birthday; // Declare birthday variable outside setup()

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   birthday = new Date("May 12, 2003 18:01:00");
// }

// function draw() {
//   background(255,255,255,0); // Clear the canvas with white background

//   const today = new Date();
//   const birthdayTime = birthday.getTime();
//   const currentTime = today.getTime();
//   const msPassed = currentTime - birthdayTime;

//   const daysPassed = msPassed / (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY);
//   const daysInCurrentYear = Math.floor(daysPassed % DAYS_PER_YEAR);

//   if (daysInCurrentYear === 0) {
//     clear(); // Clear the canvas when daysInCurrentYear is 0
//   }

//   // Calculate the margin based on the screen size
//   const gridSize = Math.ceil(Math.sqrt(daysInCurrentYear));
//   let marginX = (width - gridSize * SQUARE_SIZE) / (gridSize + 1);
//   if (width <= 450) {
//     marginX = (width - gridSize * 10) / (gridSize + 1);
//   }
//   let marginY = (height - gridSize * SQUARE_SIZE) / (gridSize + 1);
//   if (width <= 450) {
//     marginY = (height - gridSize * 10) / (gridSize + 1);
//   }

//   // Draw squares for each day not belonging to a completed year
//   for (let i = 0; i < daysInCurrentYear; i++) {
//     const rowIndex = Math.floor(i / gridSize);
//     const colIndex = i % gridSize;
//     let squareSize = Math.min(SQUARE_SIZE, Math.floor((width - (gridSize + 1) * marginX) / gridSize), Math.floor((height - (gridSize + 1) * marginY) / gridSize));
//     if (width <= 450) {
//       squareSize = 10;
//     }
//     const x = marginX + colIndex * (squareSize + marginX);
//     const y = marginY + rowIndex * (squareSize + marginY);
//     fill('red');
//     noStroke();
//     rect(x, y, squareSize, squareSize); // Draw the square
//   }
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }







// // hours
// function setup() {
//   // Create a canvas that resizes with the window
//   createCanvas(windowWidth, windowHeight);
  
//   // Define birthday and death dates in a more readable format
//   const birthYear = 2003;
//   const birthMonth = 5; // May (note: months are 0-based in JavaScript)
//   const birthDay = 12;
//   const birthHour = 18;
//   const birthMinute = 1;
  
//   birthDate = new Date(birthYear, birthMonth, birthDay, birthHour, birthMinute, 0);
//   deathDate = new Date(2091, birthMonth, birthDay, birthHour, birthMinute, 0);
// }

// function draw() {
//   background(255, 255, 255, 0);
  
//   const today = new Date();
//   const timeElapsed = today.getTime() - birthDate.getTime();
  
//   // Calculate the number of hours that have passed since birthday
//   const hoursElapsed = Math.floor(timeElapsed / (1000 * 60 * 60));
  
//   // Calculate the remaining hours that don't complete a day
//   const remainingHours = hoursElapsed % 24;
  
//   // Define constants for rectangle dimensions
//   const RECT_WIDTH = innerWidth;
//   const MAX_RECT_HEIGHT = 20; // maximum rectangle height
//   const TOP_MARGIN = 20; // top margin
//   const BOTTOM_MARGIN = 20; // bottom margin
//   const BORDER_WIDTH = 5; // border width
//   const BORDER_COLOR = 0; // border color (black)
  
//   // Calculate the total available space
//   const totalAvailableSpace = height - TOP_MARGIN - BOTTOM_MARGIN;
  
//   // Calculate the total space required by rectangles
//   const totalRectSpace = remainingHours * MAX_RECT_HEIGHT;
  
//   // Calculate the total space required by spacing
//   const totalSpacing = remainingHours - 1;
  
//   // Calculate the spacing between rectangles
//   const spacing = (totalAvailableSpace - totalRectSpace) / totalSpacing;
  
//   // Calculate the rectangle height based on the available space
//   const RECT_HEIGHT = Math.min(MAX_RECT_HEIGHT, totalAvailableSpace / remainingHours);
  
//   //top border
//   fill(BORDER_COLOR);
//   rect(0, TOP_MARGIN, width, BORDER_WIDTH);
  
//   // Draw a rectangle for each remaining hour
//   for (let i = 0; i < remainingHours; i++) {
//     const rectX = 0; // no margin to the left side
//     const rectY = TOP_MARGIN + i * (RECT_HEIGHT + spacing); // evenly spaced rectangles with top margin
//     fill(0); // black fill color
//     rect(rectX, rectY, RECT_WIDTH, RECT_HEIGHT);
//   }
  
//   //bottom border
//   rect(0, TOP_MARGIN + totalRectSpace + totalSpacing * spacing, width, BORDER_WIDTH);
// }









// //minutes
// const MINUTES_IN_HOUR = 60;
// const MILLISECONDS_IN_MINUTE = 60000;
// const MARGIN = 10; // Added margin variable

// // Variables
// let birthday;
// let dayRectWidth = 10;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   birthday = new Date("May 12, 2003 18:01:00");
//   push(); // Save the current transformation matrix
//   translate(windowWidth * 0.3, 0);
//   rotate(PI / 4); // Rotate the canvas by 45 degrees
// }

// function draw() {
//   background(255, 255, 255, 0); // clear the canvas with a transparent background

//   const today = new Date();
//   const birthdayTime = birthday.getTime();
//   const currentTime = today.getTime();
//   const msPassed = currentTime - birthdayTime;

//   const minutesPassed = msPassed / MILLISECONDS_IN_MINUTE;
//   const completedMinutes = Math.floor(minutesPassed % MINUTES_IN_HOUR)
//   console.log(completedMinutes);

//   if (completedMinutes === 0) {
//     clear(); // Clear the canvas when completed minutes is 0
//   }

//   drawRectangles(completedMinutes);
// }

// function drawRectangles(completedMinutes) {
//   const totalMinutes = MINUTES_IN_HOUR;
//   const rectWidth = (width - 2 * MARGIN) / totalMinutes;
//   const rectHeight = 3 * height;

//   push(); // Save the current transformation matrix
//   rotate(PI / 4); // Rotate the canvas by 45 degrees

//   for (let i = 0; i < completedMinutes; i++) {
//     const x = i * rectWidth + MARGIN;
//     const y = 0;
//     const width = rectWidth - MARGIN;
//     const height = rectHeight;
//     console.log("Red rectangle:", { x, y, width, height });
//     noStroke();
//     fill('red');
//     rect(x, y, width, height);
//   }

//   pop(); // Restore the original transformation matrix
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }








// //seconds
// const MINUTES_IN_HOUR = 60;
// const MILLISECONDS_IN_MINUTE = 60000;
// const MARGIN = 0;
// const ROTATION_ANGLE = Math.PI / 4;
// const RECT_HEIGHT_SCALE = 3;

// // Variables
// let birthday;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   birthday = new Date("May 12, 2003 18:01:00");
// }

// function draw() {
//   const today = new Date();
//   const birthdayTime = birthday.getTime();
//   const currentTime = today.getTime();
//   const msPassed = currentTime - birthdayTime;

//   const secondsPassed = msPassed / 1000; // Calculate total seconds passed
//   const completedSeconds = Math.floor(secondsPassed % 60); // Calculate completed seconds

//   if (completedSeconds === 0) {
//     clear(); // Clear the canvas when completed seconds is 0
//   }

//   drawRectangles(completedSeconds);
// }

// function drawRectangles(completedSeconds) {
//   const totalSeconds = 60; // Total seconds in a minute
//   const rectWidth = (width - 2 * MARGIN) / totalSeconds;
//   const gap = 5; // Adjust this value to increase or decrease the gap between rectangles
//   const totalWidthWithGap = rectWidth + gap; // Calculate the total width including the gap
//   const rectHeight = height * RECT_HEIGHT_SCALE;

//   // Create a separate coordinate system for the rectangles
//   push();
//   translate(MARGIN, height - MARGIN); // Move the origin to the bottom left
//   rotate(-ROTATION_ANGLE); // Rotate the rectangles to point toward the upper left

//   for (let i = 0; i < completedSeconds; i++) {
//     const x = i * totalWidthWithGap; // Adjust x position to include the gap
//     const y = 0;
//     const width = rectWidth;
//     const height = rectHeight;
//     console.log("Red rectangle:", { x, y, width, height });
//     noStroke();
//     fill('red');
//     rect(x, y, width, height);
//   }

//   pop(); // Restore the original transformation matrix
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
