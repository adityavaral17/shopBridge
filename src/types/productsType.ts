export interface AddProduct {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}
export interface UpdateProduct {
  id: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  category?: string;
}

export interface Rating {
  rate?: number;
  count?: number;
}

export interface Product {
  id: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  category?: string;
  rating?: Rating;
}
