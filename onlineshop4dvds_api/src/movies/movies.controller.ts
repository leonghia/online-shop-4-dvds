import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieGetDto } from './dtos/movie-get.dto';
import { MovieCreateDto } from './dtos/movie-create.dto';
import { Movie } from './movie.entity';
import { CategoriesService } from 'src/categories/categories.service';

@Controller('movies')
export class MoviesController {
    public constructor(private moviesService: MoviesService, private categoriesService: CategoriesService) { }

    @Get()
    public async getRange() {
        const movies = await this.moviesService.findRange();
        const moviesToReturn = movies.map(movie => {
            const movieToReturn = new MovieGetDto();
            movieToReturn.genres = movie.genres.map(genre => genre.name);
            movieToReturn.id = movie.id;
            movieToReturn.lengthInMinutes = movie.lengthInMinutes;
            movieToReturn.releasedYear = movie.releasedYear;
            movieToReturn.title = movie.title;
            movieToReturn.price = movie.price;
            movieToReturn.rating = movie.rating;
            movieToReturn.description = movie.description;
            movieToReturn.coverUrl = movie.coverUrl;
            return movieToReturn;
        });
        return moviesToReturn;
    }

    @Get(":id")
    public async getById(@Param("id") id: number) {
        const movie = await this.moviesService.findById(id);
        if (!movie) throw new NotFoundException();
        const movieToReturn = new MovieGetDto();
        movieToReturn.genres = movie.genres.map(genre => genre.name);
        movieToReturn.id = movie.id;
        movieToReturn.lengthInMinutes = movie.lengthInMinutes;
        movieToReturn.releasedYear = movie.releasedYear;
        movieToReturn.title = movie.title;
        movieToReturn.price = movie.price;
        movieToReturn.rating = movie.rating;
        movieToReturn.description = movie.description;
        movieToReturn.coverUrl = movie.coverUrl;
        return movieToReturn;
    }

    @Post()
    public async create(@Body() movieCreateDto: MovieCreateDto) {
        const movieToCreate = new Movie();
        movieToCreate.genres = await this.categoriesService.findRange({ type: undefined, ids: movieCreateDto.genresIds });
        movieToCreate.lengthInMinutes = movieCreateDto.hours * 60 + movieCreateDto.minutes;
        movieToCreate.releasedYear = movieCreateDto.releasedYear;
        movieToCreate.title = movieCreateDto.title;
        movieToCreate.price = movieCreateDto.price;
        movieToCreate.rating = movieCreateDto.rating;
        movieToCreate.description = movieCreateDto.description;
        movieToCreate.coverUrl = movieCreateDto.coverUrl;

        const movieCreated = await this.moviesService.create(movieToCreate);
        const movieToReturn = new MovieGetDto();
        movieToReturn.genres = movieCreated.genres.map(genre => genre.name);
        movieToReturn.id = movieCreated.id;
        movieToReturn.lengthInMinutes = movieCreated.lengthInMinutes;
        movieToReturn.releasedYear = movieCreated.releasedYear;
        movieToReturn.title = movieCreated.title;
        movieToReturn.price = movieCreated.price;
        movieToReturn.rating = movieCreated.rating;
        movieToReturn.description = movieCreated.description;
        movieToReturn.coverUrl = movieCreated.coverUrl;
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
