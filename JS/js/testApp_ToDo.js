  "use strict";

{
  // テキストフォームに入力された情報を保持
  const text = document.querySelector("input");

  // テキストフォームに情報が入力され、ボタンを押下したときの処理
  document.querySelector("form").addEventListener("submit" , e =>{
    e.preventDefault();
    const li = document.createElement("li");
    li.textContent = text.value;
    document.querySelector("ul").appendChild(li);
    text.value = "";
  });

  // li要素をクリックしたときの処理
  document.addEventListener("click" , e => {
    if (e.target.nodeName === "LI"){
      e.target.classList.toggle("done");
    }
  });

  // 未完成
  document.querySelector("button").addEventListener("click" , () => {
    console.log("remove yes!");
  });
}





{

}
// addEventListener
// createElement
