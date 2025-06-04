// task: Let your take an input,
// convert the input to lowercase or uppercase,
// let the color of the text be white
// let the background be black

let input = document.querySelector("input");
let button = document.querySelector("button");
let body = document.querySelector("body");
let main = document.querySelector("#main");

button.addEventListener("click", function () {
  let value = input.value;
 if(value ==''){
    alert('input cannot be empty')
    return
 }

   if (value === value.toLowerCase()) {
     value = value.toUpperCase();
   } else {
     value = value.toLowerCase();
   }

  let para = document.createElement("p");
  para.innerHTML = value;
  main.appendChild(para);
  para.style.background = "black";
  para.style.fontWeight = "bold";
  para.style.color = "white";
  para.style.border = "1px solid white";
  para.style.width = "350px";
  para.style.padding = "2px";

 
});
