  "use strict";

{
  // const str = "hello";
  // console.log(str.length);

  // // str.substring(開始位置、終了位置)
  // console.log(str.substring(2, 4));

  const d = [2019, 11, 14];
  console.log(d.join("/"));

  const t = "17:08:24";
  // console.log(t.split(":"));

  const [hour, minute, second] = t.split(":");
  console.log(hour);
  console.log(minute);
  console.log(second);
}