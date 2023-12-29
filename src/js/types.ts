export interface Review {
  id: number;
  author_name: string;
  comment: string;
  advantages: string;
  disadvantages: string;
  rating: number;
  likes: number;
  dislikes: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  quantity: number;
  hit: number;
  is_published: number;
  uri_product: string;
  category: Category[];
  characteristics: Characteristics[];
  reviews: Review[];
}

export interface Category {
  id: number;
  title: string;
  uri_category: string;
  top_category: number;
  image: string;
}

export interface Characteristics {
  id: number;
  characteristic_name: string;
  value: string;
}
