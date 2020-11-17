  "use strict";

{
  // document.querySelector('button').addEventListener('click', () => {
  // 	const colors = document.querySelectorAll("input");
  // 	const selectColors = [];

  // 	colors.forEach(color => {
  // 	  if(color.checked === true){
  // 	  	selectColors.push(color.value);
  // 	  }
  // 	});

  // 	const li = document.createElement("li");
  // 	li.textContent = selectColors.join(",");
  // 	document.querySelector("ul").appendChild(li);
  // });


  document.querySelector("button").addEventListener("dblclick", () => {
  	console.log("Double Click");
  });

  document.querySelector("button").addEventListener("click", () => {
  	console.log("One Click");
  });

  // document.addEventListener("mousemove" , () => {
  // 	console.log("mouse move");
  // });

  document.addEventListener("mousemove" , e => {
  	console.log(e.clientX, e.clientY);
  });

  document.addEventListener("keydown", e => {
  	console.log(e.key);
  })
}