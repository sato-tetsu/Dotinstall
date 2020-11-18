  "use strict";

{
  const text = document.querySelector("textarea");

  document.addEventListener("focus", () => {
    console.log("focus");
  });
  
  document.addEventListener("blur", () => {
    console.log("blur");
  });
  
  document.addEventListener("input", () => {
    console.log("inputing...");
  });
  
  document.addEventListener("change", () => {
    console.log(text.value.length);
  });
  
}