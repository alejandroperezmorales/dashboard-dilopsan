
export interface Sale {
  id: string;
  date: string; // YYYY-MM-DD
  productCategory: 'Electronics' | 'Home Goods' | 'Apparel' | 'Books';
  productName: string;
  unitsSold: number;
  unitPrice: number;
  salesRep: string;
  region: 'North America' | 'Europe' | 'Asia' | 'South America';
}
