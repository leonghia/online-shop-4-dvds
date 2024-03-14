import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieCreateDto } from './dtos/movie-create.dto';
import { MovieDto, MovieInfoDto } from './dtos/movie.dto';
import { Movie } from './movie.entity';
import { CategoriesService } from 'src/categories/categories.service';

@Controller('movies')
export class MoviesController {
    public constructor(private moviesService: MoviesService, private categoriesService: CategoriesService) { }

    @Get()
    public async getRange() {
        const movies = await this.moviesService.findRange();
        const moviesToReturn = movies.map(movie => {
            const movieToReturn: MovieDto = {
                genres: movie.genres.map(g => g.name),
                id: movie.id,
                title: movie.title,
                price: movie.price,
                rating: movie.rating,
                description: movie.description,
                coverUrl: movie.coverUrl
            };
            return movieToReturn;
        });
        return moviesToReturn;
    }

    @Get(":id")
    public async getById(@Param("id") id: number) {
        const movie = await this.moviesService.findById(id);
        if (!movie) throw new NotFoundException();
        const movieToReturn: MovieInfoDto = {
            genres: movie.genres.map(g => g.name),
            id: movie.id,
            title: movie.title,
            price: movie.price,
            rating: movie.rating,
            description: movie.description,
            coverUrl: movie.coverUrl,
            releasedYear: movie.releasedYear,
            lengthInMinutes: movie.lengthInMinutes,
            imgUrl: movie.imgUrl,
            stock: movie.stock
        };
        return movieToReturn;
    }

    @Post()
    public async create(@Body() movieCreateDto: MovieCreateDto) {
        const movieToCreate = new Movie();
        movieToCreate.genres = await this.categoriesService.findRange({ requestParams: undefined, ids: movieCreateDto.genresIds });
        movieToCreate.lengthInMinutes = movieCreateDto.hours * 60 + movieCreateDto.minutes;
        movieToCreate.releasedYear = movieCreateDto.releasedYear;
        movieToCreate.title = movieCreateDto.title;
        movieToCreate.price = movieCreateDto.price;
        movieToCreate.rating = movieCreateDto.rating;
        movieToCreate.description = movieCreateDto.description;
        movieToCreate.coverUrl = movieCreateDto.coverUrl;

        const movieCreated = await this.moviesService.create(movieToCreate);
        const movieToReturn: MovieDto = {
            genres: movieCreated.genres.map(g => g.name),
            id: movieCreated.id,
            title: movieCreated.title,
            price: movieCreated.price,
            rating: movieCreated.rating,
            description: movieCreated.description,
            coverUrl: movieCreated.coverUrl
        };
        return movieToReturn;
    }

    @HttpCode(204)
    @Delete(":id")
    public async delete(@Param("id") id: number) {
        const movie = await this.moviesService.findById(id);
        if (!movie) throw new NotFoundException();
        await this.moviesService.delete(id);
    }
}
