  "use strict";

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById("target");

  	// targetNode.textContent = "Changed!";
    //  targetNode.title = "this is title!";
    // targetNode.style.color = "red";
    // targetNode.style.backgroundColor = "black";
    targetNode.className = "my-color my-border";
  });
}