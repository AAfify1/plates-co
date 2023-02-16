export interface Product {
  code: string;
  name: string;
  price: number;
}

// current product catalogue
export const catalogue: Product[] = [
  { code: "R01", name: "Red Plate", price: 32.95 },
  { code: "G01", name: "Green Plate", price: 24.95 },
  { code: "B01", name: "Blue Plate", price: 7.95 },
];
