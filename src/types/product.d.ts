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

interface SimilarProduct{
    id: number;
    image: string;
    title: string;
    price: number;
    sold: number;
}

interface Coupon {
    id: number;
    amount: number;
    minOrder: number;
    type: string;
    expiry: string;
}