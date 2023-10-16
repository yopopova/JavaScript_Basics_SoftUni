function vegetableMarket(input) {
    let vegPrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let allVeg = Number(input[2]);
    let allFruit = Number(input[3]);

    let vegetables = vegPrice * allVeg;
    let fruits = fruitPrice * allFruit;

    let total = (vegetables + fruits) / 1.94;

    console.log(total.toFixed(2));
}