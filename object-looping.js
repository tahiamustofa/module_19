var shoppingCard = {
    makeupkits: 1,
    books: 5,
    pen: 2,
    mouse: 10,
    earphone: 1,
    shoes: 2,
    cup: 1,
    lipstick: 7
}

    // const keys=Object.keys(shoppingCard);
    // // console.log(keys);
    // const values=Object.values(shoppingCard);
    // // console.log(values);

// for (let index = 0; index < keys.length; index++) {
//     const shoppingCardName = keys[index];
//     const shoppingCardValue= shoppingCard[shoppingCardName];
//     console.log(shoppingCardName,shoppingCardValue)
// }

for (const propertyName in shoppingCard) {
    // console.log(propertyName);
    // const shoppingCardValue = shoppingCard[propertyName];
    const shoppingCardValue = shoppingCard[propertyName];

    console.log(propertyName,":",shoppingCardValue);
}
