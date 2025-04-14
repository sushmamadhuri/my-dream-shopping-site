export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    warrantyInformation: string;
    shippingInformation: string;
    returnPolicy: string;
    images: string[];
    thumbnail: string;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;

}

export interface Products {
    id: number;
    products: Product[];
    total: number;
    skip: number;
    limit: number;
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedAPIResource[];
}
  
  interface NamedAPIResource {
    id: number;
    name: string;
    url: string;
  }