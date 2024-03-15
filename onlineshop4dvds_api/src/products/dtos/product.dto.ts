export interface ProductDto {
    id: number;
    title: string;
    price: number;
    coverUrl: string;
    description: string;
    genres: string[];
}

export interface AlbumProductDto extends ProductDto {
    artist: string;
    artistAvatar: string;
}

export interface MovieProductDto extends ProductDto {
    imdbRatings: number;
}

export interface GameProductDto extends ProductDto {
    console: string;
}