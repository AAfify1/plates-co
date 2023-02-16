import { Product } from "./product";

//defining the interface with two main methods, isApplicable and calculate
export interface Offer {
  isApplicable(items: string[], total: number): boolean;
  calculate(items: string[], total: number): number;
}

//defining the BuyOneGetOneOffer
export class BuyOneGetOneOffer implements Offer {
  private productCode: string;
  private products: Product[];
  private secondProductDiscountPercentage: number;

  constructor(
    productCode: string,
    products: Product[],
    secondProductDiscountPercentage: number
  ) {
    this.productCode = productCode;
    this.secondProductDiscountPercentage = secondProductDiscountPercentage;
    this.products = products;
  }

  //checks if the offer is applicable by checking if the product code in the basket is more than 2
  isApplicable(items: string[], total: number): boolean {
    const productCount = items.filter(
      (item) => item === this.productCode
    ).length;
    return productCount >= 2;
  }

  //calculates the total discount for the offer based on the number of pairs in the basket
  calculate(items: string[], total: number): number {
    const offerItems = items.filter((item) => item === this.productCode);
    const offerItemPairs = Math.floor(offerItems.length / 2);
    const productPrice = this.getProductPrice(this.productCode);
    return (
      offerItemPairs *
      ((productPrice * this.secondProductDiscountPercentage) / 100)
    );
  }

  //helper function to get the price of the product
  private getProductPrice(code: string): number {
    const product = this.products.find((p) => p.code === code);
    if (!product) {
      throw new Error(`Invalid product code: ${code}`);
    }
    return product.price;
  }
}
