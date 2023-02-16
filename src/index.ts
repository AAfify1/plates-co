import { catalogue } from "./product";
import { deliveryCharges } from "./deliveryCharge";
import { Basket } from "./basket";
import { BuyOneGetOneOffer, Offer } from "./offers";

//Red Plates offer buy one get one half price
const redBOGOHOffer: Offer = new BuyOneGetOneOffer("R01", catalogue, 50);

//Extra offer on blue plates but this time but one get one free
const blueBOGOFOffer: Offer = new BuyOneGetOneOffer("B01", catalogue, 100);

//Intitalising the basket with the catalogue, delivery charges and offers
const basket = new Basket(catalogue, deliveryCharges, [
  redBOGOHOffer,
  blueBOGOFOffer,
]);

//adding items to the basket
basket.add("R01");
basket.add("R01");
basket.add("R01");
basket.add("R01");
basket.add("R01");
basket.add("R01");

//calculating the total
console.log(`Basket total: $${Math.floor(basket.getTotal() * 100) / 100}`);
