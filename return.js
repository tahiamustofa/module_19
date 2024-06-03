// function add(n1,n2) {
//     console.log(n1,n2);
//     var sum=n1+n2;
//     // console.log(sum);
//     return(sum);
// }
// add(30,60);
// var total=add(30,60);
// console.log('vaule is:', total);

function bringparata(money) {
   var parataprice_per = 10;
   var quantity=(money / parataprice_per);
   return quantity;
}
var taka=300;
parta=bringparata(taka);
console.log('mot parata:',parta)