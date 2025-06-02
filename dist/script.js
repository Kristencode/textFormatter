let button = document.querySelector("button");

let body = document.querySelector("body");

button.addEventListener("click", function () {
  let value = document.querySelector("input").value;
  // value.style.color='red'
  body.style.fontWeight = "bold";
  body.style.background = "red";
 
  body.append(value);
 
});
