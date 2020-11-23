  "use strict";

{
  // const text = document.querySelector("textarea");

  // document.addEventListener("focus", () => {
  //   console.log("focus");
  // });

  // document.addEventListener("blur", () => {
  //   console.log("blur");
  // });

  // document.addEventListener("input", () => {
  //   console.log("inputing...");
  // });

  // document.addEventListener("change", () => {
  //   console.log(text.value.length);
  // });

  // const text = document.querySelector("input")

  // document.querySelector("form").addEventListener("submit" , e => {
  //   e.preventDefault();
  //   console.log(text.value);
  // });

  document.querySelector("ul").addEventListener("click" , e => {
    if(e.target.nodeName === "LI"){
      e.target.classList.toggle("done");
    }
  });
}