  "use strict";

{
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
  	const results = ["大吉", "吉", "末吉", "凶"];
  	// const n = Math.floor(Math.random() * results.length);
    // btn.textContent = "!!!";
    // btn.textContent = results[n];
    btn.textContent = results[Math.floor(Math.random() * results.length)];

  // switch (n) {
  // 	case 0:
  // 	  btn.textContent = "大吉";
  // 	  break;
  // 	case 1:
  // 	  btn.textContent = "吉";
  // 	  break;
  // 	case 2:
  // 	  btn.textContent = "凶";
  // 	  break;
  // }

  });
}