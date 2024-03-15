import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { RequestParams } from 'src/utils/request-params';
import { GenreType } from 'src/utils/genre-type';
import { AlbumProductDto, GameProductDto, MovieProductDto, ProductDto } from './dtos/product.dto';
import { AlbumsService } from 'src/albums/albums.service';
import { MoviesService } from 'src/movies/movies.service';
import { GamesService } from 'src/games/games.service';
import { AlbumProductDetailDto, GameProductDetailDto, MovieProductDetailDto } from './dtos/product-detail.dto';
import { ReviewsService } from 'src/reviews/reviews.service';
import { ImagesService } from 'src/images/images.service';

@Controller('products')
export class ProductsController {
    public constructor(private productsService: ProductsService, private albumsService: AlbumsService, private moviesService: MoviesService, private gamesService: GamesService, private reviewsService: ReviewsService, private imagesService: ImagesService) { }

    @Get()
    public async getRange(@Query() requestParams?: RequestParams) {
        const products = await this.productsService.findRange(requestParams);
        const productsToReturn = new Array<ProductDto>(products.length);
        for (const p of products) {
            if (p.genreType === GenreType.Music) {
                const album = await this.albumsService.findById(p.entityId);
                const albumToReturn: AlbumProductDto = {
                    id: p.id,
                    title: p.title,
                    coverUrl: p.coverUrl,
                    description: p.description,
                    artist: album.artist.fullName,
                    artistAvatar: album.artist.avatar,
                    price: p.price,
                    genres: p.genres.map(g => g.name)
                };
                productsToReturn.push(albumToReturn);
            } else if (p.genreType === GenreType.Movie) {
                const movie = await this.moviesService.findById(p.entityId);
                const movieToReturn: MovieProductDto = {
                    id: p.id,
                    title: p.title,
                    coverUrl: p.coverUrl,
                    description: p.description,
                    imdbRatings: movie.rating,
                    price: p.price,
                    genres: p.genres.map(g => g.name)
                };
                productsToReturn.push(movieToReturn);
            } else if (p.genreType === GenreType.Game) {
                const game = await this.gamesService.findDetailById(p.entityId);
                const gameToReturn: GameProductDto = {
                    id: p.id,
                    title: p.title,
                    coverUrl: p.coverUrl,
                    description: p.description,
                    price: p.price,
                    genres: p.genres.map(g => g.name),
                    console: game.consoleType
                };
                productsToReturn.push(gameToReturn);
            } else {
                throw new Error("Invalid genre type");
            }
        }

        return productsToReturn;
    }

    @Get(":id")
    public async getById(@Param("id") id: number) {
        const product = await this.productsService.findById(id);
        if (!product) throw new NotFoundException();
        if (product.genreType === GenreType.Music) {
            const album = await this.albumsService.findById(product.entityId);
            const {ratings, numbersOfReviews} = await this.reviewsService.calculateAvgRatings({productId: product.id});
            const images = await this.imagesService.getRange({productId: product.id});
            const albumProductDetailToReturn: AlbumProductDetailDto = {
                artist: album.artist.fullName,
                artistAvatar: album.artist.avatar,
                lengthInSeconds: album.lengthInSeconds,
                id: product.id,
                title: product.title,
                price: product.price,
                description: product.description,
                genres: product.genres.map(g => g.name),
                ratings,
                numbersOfReviews,
                images: images.map(img => img.url),
                yearReleased: product.yearReleased,
                stock: product.stock
            };
            return albumProductDetailToReturn;
        } else if (product.genreType === GenreType.Movie) {
            const movie = await this.moviesService.findById(product.entityId);
            const {ratings, numbersOfReviews} = await this.reviewsService.calculateAvgRatings({productId: product.id});
            const images = await this.imagesService.getRange({productId: product.id});
            const movieProductDetailToReturn: MovieProductDetailDto = {
                id: product.id,
                title: product.title,
                price: product.price,
                description: product.description,
                genres: product.genres.map(g => g.name),
                ratings,
                numbersOfReviews,
                images: images.map(img => img.url),
                yearReleased: product.yearReleased,
                stock: product.stock,
                imdbRatings: movie.rating,
                lengthInMinutes: movie.lengthInMinutes
            };
            return movieProductDetailToReturn;
        } else if (product.genreType === GenreType.Game) {
            const game = await this.gamesService.findDetailById(product.id);
            const {ratings, numbersOfReviews} = await this.reviewsService.calculateAvgRatings({productId: product.id});
            const images = await this.imagesService.getRange({productId: product.id});
            const gameProductDetailToReturn: GameProductDetailDto = {
                id: product.id,
                title: product.title,
                price: product.price,
                description: product.description,
                genres: product.genres.map(g => g.name),
                ratings,
                numbersOfReviews,
                images: images.map(img => img.url),
                yearReleased: product.yearReleased,
                stock: product.stock,
                console: game.consoleType
            };
            return gameProductDetailToReturn;
        } else {
            throw new Error("Invalid genre type");
        }
    }
}
