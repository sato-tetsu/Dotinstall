  "use strict";

{

  function createColumn(col){
    // const text = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const source = [];
    for (let i=0; i<15; i++){
      source[i] = i + 1 + 15 * col;
    }

    const colmun = [];
    for (let i=0; i<5; i++){
      colmun[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    // b[0] = text.splice(Math.floor(Math.random() * text.length), 1)[0];
    // b[1] = text.splice(Math.floor(Math.random() * text.length), 1)[0];
    // b[2] = text.splice(Math.floor(Math.random() * text.length), 1)[0];
    // b[3] = text.splice(Math.floor(Math.random() * text.length), 1)[0];
    // b[4] = text.splice(Math.floor(Math.random() * text.length), 1)[0];

    // console.log(b);
    return colmun;
  }

  const columns = [];
  columns[0] = createColumn(0);
  columns[1] = createColumn(1);
  columns[2] = createColumn(2);
  columns[3] = createColumn(3);
  columns[4] = createColumn(4);
  columns[2][2] = "FREE";

  console.table(columns);

}