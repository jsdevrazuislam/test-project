interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  sold: number;
  rating: number;
  reviewCount: number;
  image: string;
}

interface Coupon {
    id: number;
    amount: number;
    minOrder: number;
    type: string;
    expiry: string;
}