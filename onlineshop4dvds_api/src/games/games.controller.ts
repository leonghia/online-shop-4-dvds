import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post } from '@nestjs/common';
import { GamesService } from './games.service';
import { GameCreateDto } from './dtos/game-create.dto';
import { CategoriesService } from 'src/categories/categories.service';

@Controller('games')
export class GamesController {
    public constructor(private gamesService: GamesService, private categoriesService: CategoriesService) { }

    @Get()
    public async getRange() {
        return await this.gamesService.findRange();
    }

    @Get(":id")
    public async getById(@Param("id") id: number) {
        const gameToReturn = await this.gamesService.findDetailById(id);
        if (!gameToReturn) throw new NotFoundException();
        return gameToReturn;
    }

    @Post()
    public async create(@Body() gameCreateDto: GameCreateDto) {
        if (gameCreateDto.gameId) {
            const existingGame = await this.gamesService.findById(gameCreateDto.gameId);
            if (!existingGame) throw new NotFoundException();
            
            return await this.gamesService.createAnotherDetail(gameCreateDto, existingGame);
        }
        
        return await this.gamesService.createNewGame(gameCreateDto);
    }

    @HttpCode(204)
    @Delete(":id")
    public async delete(@Param("id") id: number) {
        const game = await this.gamesService.findDetailById(id);
        if (!game) throw new NotFoundException();
        await this.gamesService.delete(id);
    }
}
