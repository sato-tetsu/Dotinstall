  "use strict";

{
  document.querySelector('button').addEventListener('click', () => {
    // const targetNode = document.getElementById("target");

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

    // targetNode.classList.toggle("my-color");

    // targetNode.textContent = targetNode.dataset.translation;

    const item2 = document.createElement("li");
    item2.textContent = "item 2";

    const ulNode = document.querySelector("ul");
    ulNode.appendChild(item2);
  });
}