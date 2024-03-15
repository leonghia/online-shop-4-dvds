import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { Repository } from 'typeorm';
import { GameDetail } from './game-detail.entity';
import { GameCreateDto } from './dtos/game-create.dto';
import { GameDto } from './dtos/game.dto';
import { CategoriesService } from 'src/categories/categories.service';
import { toString } from 'src/utils/console-type';
import { GameInfoDto } from './dtos/game-info.dto';

@Injectable()
export class GamesService {
    public constructor(@InjectRepository(Game) private gameRepository: Repository<Game>, @InjectRepository(GameDetail) private gameDetailRepository: Repository<GameDetail>, private categoriesService: CategoriesService) { }

    public async findRange(): Promise<GameDto[]> {
        const gameDetails = await this.gameDetailRepository.find({
            relations: {
                game: {
                    genres: true
                },
            },
        });

        return gameDetails.map(gameDetail => {
            const gameToReturn: GameDto = {
                id: gameDetail.id,
                title: gameDetail.game.title,
                genres: gameDetail.game.genres.map(genre => genre.name),
                price: gameDetail.price,
                description: gameDetail.game.description,
                coverUrl: gameDetail.coverUrl,
                consoleType: toString(gameDetail.consoleType)
            };
            return gameToReturn;
        });
    }

    public async findDetailByProductId(productId: number): Promise<GameDto | null> {
        const gameDetail = await this.gameDetailRepository.findOne({
            where: { product: {id: productId} },
            relations: {
                game: {
                    genres: true,
                },
            },
        });

        if (!gameDetail) return null;

        const gameToReturn: GameInfoDto = {
            id: gameDetail.id,
            title: gameDetail.game.title,
            genres: gameDetail.game.genres.map(genre => genre.name),
            price: gameDetail.price,
            description: gameDetail.game.description,
            coverUrl: gameDetail.coverUrl,
            consoleType: toString(gameDetail.consoleType),
            releasedYear: gameDetail.game.releasedYear,
            publisher: gameDetail.game.publisher,
            stock: gameDetail.stock,
            imgUrl: gameDetail.imgUrl
        };
        return gameToReturn;
    }

    public async findById(gameId: number): Promise<Game | null> {
        return await this.gameRepository.findOne({
            where: {id: gameId},
            relations: {genres: true},
        });
    }

    public async createNewGame(gameCreateDto: GameCreateDto): Promise<GameDto | null> {
        const gameToCreate = new Game();
        gameToCreate.description = gameCreateDto.description;
        gameToCreate.genres = await this.categoriesService.findRange({ requestParams: undefined, ids: gameCreateDto.genresIds });
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

        const gameToReturn: GameDto = {
            id: gameDetailCreated.id,
            title: gameDetailCreated.game.title,
            genres: gameDetailCreated.game.genres.map(genre => genre.name),
            price: gameDetailCreated.price,
            description: gameDetailCreated.game.description,
            coverUrl: gameDetailCreated.coverUrl,
            consoleType: toString(gameDetailCreated.consoleType)
        };
        return gameToReturn;
    }

    public async createAnotherDetail(gameCreateDto: GameCreateDto, existingGame: Game): Promise<GameDto | null> {
        const gameDetailToCreate = new GameDetail();
        gameDetailToCreate.consoleType = gameCreateDto.consoleType;
        gameDetailToCreate.coverUrl = gameCreateDto.coverUrl;
        gameDetailToCreate.game = existingGame;
        gameDetailToCreate.price = gameCreateDto.price;
        const gameDetailCreated = await this.gameDetailRepository.save(gameDetailToCreate);

        const gameToReturn: GameDto = {
            id: gameDetailCreated.id,
            title: gameDetailCreated.game.title,
            genres: gameDetailCreated.game.genres.map(genre => genre.name),
            price: gameDetailCreated.price,
            description: gameDetailCreated.game.description,
            coverUrl: gameDetailCreated.coverUrl,
            consoleType: toString(gameDetailCreated.consoleType)
        };
        return gameToReturn;
    }

    public async delete(id: number): Promise<void> {
        await this.gameRepository.delete(id);
    }
}
