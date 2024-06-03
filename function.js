// function functionname(params) {
//   function body
//   return
// }
// var store = functionname(params value);
 
function getavg(ass1,ass2,ass3) {
  const add=(ass1+ass2+ass3);
  const avg=add/3;
  return avg;
}
const ass1marks=60;
const ass2marks=58;
const ass3marks=59;

const total=getavg(ass1marks,ass2marks,ass3marks);
console.log('now final is: ', total);

