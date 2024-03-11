import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { Repository } from 'typeorm';
import { GameDetail } from './game-detail.entity';
import { GameCreateDto } from './dtos/game-create.dto';
import { GameGetDto } from './dtos/game-get.dto';
import { CategoriesService } from 'src/categories/categories.service';
import { toString } from 'src/utils/console-type';

@Injectable()
export class GamesService {
    public constructor(@InjectRepository(Game) private gameRepository: Repository<Game>, @InjectRepository(GameDetail) private gameDetailRepository: Repository<GameDetail>, private categoriesService: CategoriesService) { }

    public async findRange(): Promise<GameGetDto[]> {
        const gameDetails = await this.gameDetailRepository.find({
            relations: {
                game: {
                    genres: true
                },
            },
        });

        return gameDetails.map(gameDetail => {
            const gameToReturn = new GameGetDto();
            gameToReturn.consoleType = toString(gameDetail.consoleType);
            gameToReturn.coverUrl = gameDetail.coverUrl;
            gameToReturn.description = gameDetail.game.description;
            gameToReturn.genres = gameDetail.game.genres.map(genre => genre.name);
            gameToReturn.id = gameDetail.id;
            gameToReturn.price = gameDetail.price;
            gameToReturn.publisher = gameDetail.game.publisher;
            gameToReturn.releasedYear = gameDetail.game.releasedYear;
            gameToReturn.title = gameDetail.game.title;
            return gameToReturn;
        });
    }

    public async findDetailById(gameDetailId: number): Promise<GameGetDto | null> {
        const gameDetail = await this.gameDetailRepository.findOne({
            where: { id: gameDetailId },
            relations: {
                game: {
                    genres: true,
                },
            },
        });

        if (!gameDetail) return null;

        const gameToReturn = new GameGetDto();
        gameToReturn.consoleType = toString(gameDetail.consoleType);
        gameToReturn.coverUrl = gameDetail.coverUrl;
        gameToReturn.description = gameDetail.game.description;
        gameToReturn.genres = gameDetail.game.genres.map(genre => genre.name);
        gameToReturn.id = gameDetail.id;
        gameToReturn.price = gameDetail.price;
        gameToReturn.publisher = gameDetail.game.publisher;
        gameToReturn.releasedYear = gameDetail.game.releasedYear;
        gameToReturn.title = gameDetail.game.title;
        return gameToReturn;
    }

    public async findById(gameId: number): Promise<Game | null> {
        return await this.gameRepository.findOne({
            where: {id: gameId},
            relations: {genres: true},
        });
    }

    public async createNewGame(gameCreateDto: GameCreateDto): Promise<GameGetDto | null> {
        const gameToCreate = new Game();
        gameToCreate.description = gameCreateDto.description;
        gameToCreate.genres = await this.categoriesService.findRange({ type: undefined, ids: gameCreateDto.genresIds });
        gameToCreate.publisher = gameCreateDto.publisher;
        gameToCreate.releasedYear = gameCreateDto.releasedYear;
        gameToCreate.title = gameCreateDto.title;
        const gameCreated = await this.gameRepository.save(gameToCreate);

        const gameDetailToCreate = new GameDetail();
        gameDetailToCreate.consoleType = gameCreateDto.consoleType;
        gameDetailToCreate.coverUrl = gameCreateDto.coverUrl;
        gameDetailToCreate.game = gameCreated;
        gameDetailToCreate.price = gameCreateDto.price;
        const gameDetailCreated = await this.gameDetailRepository.save(gameDetailToCreate);

        const gameToReturn = new GameGetDto();
        gameToReturn.consoleType = toString(gameDetailCreated.consoleType);
        gameToReturn.coverUrl = gameDetailCreated.coverUrl;
        gameToReturn.description = gameCreated.description;
        gameToReturn.genres = gameCreated.genres.map(genre => genre.name);
        gameToReturn.id = gameDetailCreated.id;
        gameToReturn.price = gameDetailCreated.price;
        gameToReturn.publisher = gameCreated.publisher;
        gameToReturn.releasedYear = gameCreated.releasedYear;
        gameToReturn.title = gameCreated.title;

        return gameToReturn;
    }

    public async createAnotherDetail(gameCreateDto: GameCreateDto, existingGame: Game): Promise<GameGetDto | null> {
        const gameDetailToCreate = new GameDetail();
        gameDetailToCreate.consoleType = gameCreateDto.consoleType;
        gameDetailToCreate.coverUrl = gameCreateDto.coverUrl;
        gameDetailToCreate.game = existingGame;
        gameDetailToCreate.price = gameCreateDto.price;
        const gameDetailCreated = await this.gameDetailRepository.save(gameDetailToCreate);

        const gameToReturn = new GameGetDto();
        gameToReturn.consoleType = toString(gameDetailCreated.consoleType);
        gameToReturn.coverUrl = gameDetailCreated.coverUrl;
        gameToReturn.description = existingGame.description;
        gameToReturn.genres = existingGame.genres.map(genre => genre.name);
        gameToReturn.id = gameDetailCreated.id;
        gameToReturn.price = gameDetailCreated.price;
        gameToReturn.publisher = existingGame.publisher;
        gameToReturn.releasedYear = existingGame.releasedYear;
        gameToReturn.title = existingGame.title;
        return gameToReturn;
    }

    public async delete(id: number): Promise<void> {
        await this.gameRepository.delete(id);
    }
}
