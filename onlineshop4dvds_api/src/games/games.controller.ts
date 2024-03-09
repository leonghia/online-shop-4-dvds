import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post } from '@nestjs/common';
import { GamesService } from './games.service';
import { GameGetDto } from './dtos/game-get.dto';
import { GameCreateDto } from './dtos/game-create.dto';
import { Game } from './game.entity';
import { CategoriesService } from 'src/categories/categories.service';

@Controller('games')
export class GamesController {
    public constructor(private gamesService: GamesService, private categoriesService: CategoriesService) { }

    @Get()
    public async getRange() {
        const games = await this.gamesService.findRange();
        const gamesToReturn = games.map(game => {
            const gameToReturn = new GameGetDto();
            gameToReturn.genres = game.genres.map(genre => genre.name);
            gameToReturn.id = game.id;
            gameToReturn.publisher = game.publisher;
            gameToReturn.releasedYear = game.releasedYear;
            gameToReturn.title = game.title;
            return gameToReturn;
        });
        return gamesToReturn;
    }

    @Get(":id")
    public async getById(@Param("id") id: number) {
        const game = await this.gamesService.findById(id);
        if (!game) throw new NotFoundException();
        const gameToReturn = new GameGetDto();
        gameToReturn.genres = game.genres.map(genre => genre.name);
        gameToReturn.id = game.id;
        gameToReturn.publisher = game.publisher;
        gameToReturn.releasedYear = game.releasedYear;
        gameToReturn.title = game.title;
        return gameToReturn;
    }

    @Post()
    public async create(@Body() gameCreateDto: GameCreateDto) {
        const gameToCreate = new Game();
        gameToCreate.genres = await this.categoriesService.findRange({type: undefined, ids: gameCreateDto.genresIds});
        gameToCreate.publisher = gameCreateDto.publisher;
        gameToCreate.releasedYear = gameCreateDto.releasedYear;
        gameToCreate.title = gameCreateDto.title;

        const gameCreated = await this.gamesService.create(gameToCreate);
        const gameToReturn = new GameGetDto();
        gameToReturn.genres = gameCreated.genres.map(genre => genre.name);
        gameToReturn.id = gameCreated.id;
        gameToReturn.publisher = gameCreated.publisher;
        gameToReturn.releasedYear = gameCreated.releasedYear;
        gameToReturn.title = gameCreated.title;
        return gameToReturn;
    }

    @HttpCode(204)
    @Delete(":id")
    public async delete(@Param("id") id: number) {
        const game = await this.gamesService.findById(id);
        if (!game) throw new NotFoundException();
        await this.gamesService.delete(id);
    }
}
