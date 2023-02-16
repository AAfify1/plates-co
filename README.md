## Methodolgy 
The aim behind the architecture is to be modular and allow for easy adjustments and further feature implementations. This was taken into account when desigining the file and class structure.

## Project Structure

The project is structured into several files: `product.ts`, `deliveryCharge.ts`, `offer.ts`, `basket.ts`, and `index.ts`.

`product.ts`: Defines the interface and implementation of the Product class that describes a product and its properties.

`deliveryCharge.ts`: Defines the DeliveryCharge class that implements the delivery charge rules based on the total amount spent.

`offer.ts`: Defines the Offer interface and the `BuyOneGetOneOffer` class that implements the logic for the "buy one get one" offer with the ability to control the discount percentage on the second item .

`basket.ts`: Defines the Basket class that represents a customer's basket of products and provides methods to add products, calculate the total price of the basket, and apply any available offers and delivery charges.

`index.ts`: The main entry point of the application that demonstrates how to create a basket of products and calculate the total price.

## Usage

1. Clone the repo
2. Run `npm install`
3. Go to `index.ts`
4. Add desired item codes to basket using the `basket.add` method
5. Save and run `npm run test`
6. The total should be printed in the console

## Assumptions and Adjustments

1. Products are set and hardcoded
2. Delivery charges are set and hardcoded
3. Offers are set and hardcoded
4. If more than one offer is applied on the same items all the discounts apply
5. There is no limit for discounts 
6. Only supported offers are of the `Buy one get one discounted` variety.
7. There is no method to remove items from basket
   