


let random_num = Math.floor(Math.random() * 5) + 1
let forma = document.getElementById("forma");
let play = document.getElementById("num");
let input_num = document.getElementById("play");
forma.addEventListener("submit", fun)

function fun(e) {
  e.preventDefault();
  console.log(random_num);
  if (input_num == random_num) {
    
    console.log("pogodak");
  } else {
    console.log("promasaj");
  }

}
