export interface ProductDetail {
    id: number;
    title: string;
    price: number;
    description: string;
    genres: string[];
    ratings: number;
    numbersOfReviews: number;
    stock: number;
    images: string[];
    type: string;
}