const Array = require('./Array');

function main(){

  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);
//   arr.push(5);
  // arr.push(15);
  // arr.push(19);
  // arr.push(45);
  // arr.push(10);
//-----do drill 3 here-----
  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);
}

return main()