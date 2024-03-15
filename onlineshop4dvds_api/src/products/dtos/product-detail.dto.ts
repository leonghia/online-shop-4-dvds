export interface ProductDetail {
    id: number;
    title: string;
    price: number;
    description: string;
    genres: string[];
    ratings: number | null;
    numbersOfReviews: number;
    images: string[];
    yearReleased: number;
    stock: number;
}

export interface AlbumProductDetailDto extends ProductDetail {
    artist: string;
    artistAvatar: string;
    lengthInSeconds: number;
}

export interface GameProductDetailDto extends ProductDetail {
    console: string;
}

export interface MovieProductDetailDto extends ProductDetail {
    imdbRatings: number;
}
