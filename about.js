/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
   // Typing Effect

let team=new Typed('.team',{
  strings:['Mtg United Team'],
  typedSpeed:200,
  backSpeed:200,
  backDelay:200,
  loop:true
})



// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
// function myFunction() {
//   if (video.paused) {
//     video.play();
//     btn.innerHTML = "||";
//   } else {
//     video.pause();
//     btn.innerHTML = ">";
//   }
// }
