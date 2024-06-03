var shoppingCard={
makeupkits:1,
books:5,
pen:2,
mouse:10,
earphone:1
}
console.log(shoppingCard);

var penCount=shoppingCard.pen;
// console.log(penCount);
var penCount2=shoppingCard['pen'];
// console.log(penCount2);
var propertyNam= 'mouse';
var propertyvalues=shoppingCard[propertyNam];
// console.log(propertyNam,':', propertyvalues);


// var propertykeys = Object.keys(shoppingCard);
// console.log(propertykeys);

// var propertyvalues=Object.values(shoppingCard);
// console.log(propertyvalues);

// set value
shoppingCard.earphone=120;
console.log(shoppingCard);
shoppingCard['earphone']=60;
console.log(shoppingCard);

var propertyNam= 'mouse';
var propertyvalues=shoppingCard[propertyNam];
// console.log(propertyNam,':', propertyvalues);
var namoear='earphone';
var propertyvaluesear= shoppingCard[namoear];
 shoppingCard[namoear]=89;
console.log(shoppingCard);

