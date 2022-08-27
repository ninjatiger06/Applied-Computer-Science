var line = [0, 0, 0, 0];
var linechange = [1, 2, 3, 4];
// var rgbIndex = 0;
var colorList = ["red", "orange", "green", "blue", "purple", "brown"];
var colorListIndex = 0;

function drawAll()
/*
  Purpose: This is the main drawing loop.
  Inputs: None, but it is affected by what the other functions are doing
  Returns: None, but it calls itself to cycle to the next frame
*/
{

  // Change endpoints
  line[0] += linechange[0];
  line[1] += linechange[1];
  line[2] += linechange[2];
  line[3] += linechange[3];

  if ((line[0] > canvas.width) || (line[0] < 0)) {
    linechange[0] *= -1;
    linechange[0] += Math.random() - 0.5;
    colorListIndex += 1;
    if (colorListIndex >= 6) {
      colorListIndex = 0;
    }
  }

  if ((line[1] > canvas.height) || (line[1] < 0)) {
    linechange[1] *= -1;
    linechange[1] += Math.random() - 0.5;
    colorListIndex += 1;
    if (colorListIndex >= 6) {
      colorListIndex = 0;
    }
  }

  if ((line[2] > canvas.width) || (line[2] < 0)) {
    linechange[2] *= -1;
    linechange[2] += Math.random() - 0.5;
    colorListIndex += 1;
    if (colorListIndex >= 6) {
      colorListIndex = 0;
    }
  }

  if ((line[3] > canvas.height) || (line[3] < 0)) {
    linechange[3] *= -1;
    linechange[3] += Math.random() - 0.5;
    colorListIndex += 1;
    if (colorListIndex >= 6) {
      colorListIndex = 0;
    }
  }

  // Draw the line
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.linewidth = 50;
  context.linecap = 'square';
  context.beginPath();
  context.moveTo(line[0], line[1]);
  context.lineTo(line[2], line[3]);

  // if (rgbIndex <= 59) {
  //   context.strokeStyle = "red";
  // }
  // if ((rgbIndex > 59) && (rgbIndex <= 119)) {
  //   context.strokeStyle = "blue";
  // }
  // if (rgbIndex > 119) {
  //   context.strokeStyle = "green";
  // }

  // context.fillStyle = "black";
  // context.strokeStyle = "black";
  context.strokeStyle = colorList[colorListIndex];
  context.stroke();

  // rgbIndex += 1;
  // if (rgbIndex >= 179) {
  //   rgbIndex = 0;
  // }

  // Loop the animation to the next frame.
  window.requestAnimationFrame(drawAll);

}


// Get width/height of the browser window
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
console.log("Window is %d by %d", windowWidth, windowHeight);

// Get the canvas, set the width and height from the window
canvas = document.getElementById("mainCanvas");
// I found that - 20 worked well for me, YMMV
canvas.width = windowWidth - 20;
canvas.height = windowHeight - 20;
canvas.style.border = "1px solid black";

// Set up the context for the animation
context = canvas.getContext("2d");

// Fire up the animation engine
window.requestAnimationFrame(drawAll);
