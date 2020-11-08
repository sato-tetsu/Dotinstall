  "use strict";

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById("target");

  	// targetNode.textContent = "Changed!";
    //  targetNode.title = "this is title!";
    // targetNode.style.color = "red";
    // targetNode.style.backgroundColor = "black";
    // targetNode.className = "my-color my-border";
    // targetNode.classList.add("my-color");
    // if (targetNode.classList.contains("my-color") === true){
    //   document.getElementById("target").classList.remove("my-color");
    // }else{
    //   document.getElementById("target").classList.add("my-color");
    // };

    targetNode.classList.toggle("my-color");

  });
}