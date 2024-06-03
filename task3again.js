const outSide=[1,2,3,4,5];
const size=outSide.length;
function make_avg(array,size) {
    let sum=0;
    for (let index = 0; index < array.length; index++) {
        sum  = sum + array[index];
        console.log(sum);
    }
    // var avg=sum/array.length;
    var avg=sum/size;
    return avg;
    
    
}
var calcAvg=make_avg(outSide,size);
console.log('My function result',calcAvg);
