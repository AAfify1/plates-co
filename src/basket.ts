import { DeliveryCharge } from "./deliveryCharge";
import { Offer } from "./offers";
import { Product } from "./product";

//Basket class takes in the catalogue, delivery charges and offers
export class Basket {
  private products: Product[];
  private deliveryCharge: DeliveryCharge;
  private offers: Offer[];
  private items: string[];

  constructor(
    products: Product[],
    deliveryCharge: DeliveryCharge,
    offers: Offer[] = []
  ) {
    this.products = products;
    this.deliveryCharge = deliveryCharge;
    this.offers = offers;
    this.items = [];
  }

  // Add an item to the basket
  add(item: string): void {
    this.items.push(item);
  }

  // Calculate the total cost of the basket
  getTotal(): number {
    const total = this.items.reduce(
      (accumulator, item) => accumulator + this.getProduct(item).price,
      0
    );
    console.log(`Total: $${total.toFixed(2)}`);

    // Calculate the total offer amount for each offer
    let offerAmount = 0;
    this.offers.forEach((offer) => {
      const applicable = offer.isApplicable(this.items, total);
      if (applicable) {
        offerAmount += offer.calculate(this.items, total);
      }
    });

    const totalAfterOffers = total - offerAmount;
    // Calculate the delivery charge
    const deliveryCost = this.deliveryCharge.calculate(totalAfterOffers);

    return totalAfterOffers + deliveryCost;
  }

  // helper function that gets product from code
  private getProduct(code: string): Product {
    const product = this.products.find((p) => p.code === code);
    if (!product) {
      throw new Error(`Invalid product code: ${code}`);
    }
    return product;
  }
}
