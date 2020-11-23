  "use strict";

{
  const text = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const b = [];

  b[0] = text.splice(Math.floor(Math.random() * text.length), 1)[0];
  b[1] = text.splice(Math.floor(Math.random() * text.length), 1)[0];
  b[2] = text.splice(Math.floor(Math.random() * text.length), 1)[0];
  b[3] = text.splice(Math.floor(Math.random() * text.length), 1)[0];
  b[4] = text.splice(Math.floor(Math.random() * text.length), 1)[0];

  console.log(b);
}