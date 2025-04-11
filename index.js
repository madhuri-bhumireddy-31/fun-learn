// home page content is changing
const greetings = [
  "Let's have fun learning!",
  "Ready to explore?",
  "Click a button to start!",
  "Fun + Learning = ❤️",
  "Welcome, Little Genius!"
];
let gIndex = 0;
let gStop = setInterval(() => {
    if (gIndex < greetings.length) { 
        document.getElementById("greeting").innerText = greetings[gIndex];
        gIndex++; // Move to next greeting
      } else {
        clearInterval(gStop); // Stop when the last greeting is reached
      }
}, 1500);
let d = new Date();
document.getElementById("p1").innerHTML = d;




