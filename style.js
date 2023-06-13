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

// let hello=new Typed('.hello',{
//   strings:['Everyone,'],
//   typedSpeed:200,
//   backSpeed:200,
//   backDelay:200,
//   loop:true
// })

let mtg=new Typed('.mtg',{
  strings:['where we hope to make our <br> lives better through football'],
  typedSpeed:200,
  backSpeed:200,
  backDelay:200,
  loop:true
})

// let bring=new Typed('.bring',{
//   strings:['bring equality in our communities <br> by proving that girls can do better in anything they plan to if they stand firm '],
//   typedSpeed:200,
//   backSpeed:200,
//   backDelay:200,
//   loop:true
// })