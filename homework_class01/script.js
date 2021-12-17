// HOMEWORK
// Write a JavaScript program that will calculate the price of 30 Phones, 
// where the price of one phone is $119.95 and the tax rate is 5%.

var phonePrice = 119.95;
var tax = 5;
var priceOfTax = (tax / 100) * phonePrice;
console.log(priceOfTax);
var phonesToBuy = 30;
var totalSum = (phonePrice + priceOfTax) * phonesToBuy;
console.log(totalSum);