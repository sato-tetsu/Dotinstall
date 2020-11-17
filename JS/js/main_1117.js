  "use strict";

{
  document.querySelector('button').addEventListener('click', () => {
  	const colors = document.querySelectorAll("input");
  	const selectColors = [];

  	colors.forEach(color => {
  	  if(color.checked === true){
  	  	selectColors.push(color.value);
  	  }
  	});

  	const li = document.createElement("li");
  	li.textContent = selectColors.join(",");
  	document.querySelector("ul").appendChild(li);
  });
}