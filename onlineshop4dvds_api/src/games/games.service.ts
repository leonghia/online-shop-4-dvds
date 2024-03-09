import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {
    public constructor(@InjectRepository(Game) private gameRepository: Repository<Game>) {}

    public async findRange(): Promise<Game[]> {
        return await this.gameRepository.find({
            relations: {genres: true},
        });
    }

    public async findById(id: number): Promise<Game | null> {
        return await this.gameRepository.findOne({
            where: {id},
            relations: {genres: true},
        });
    }

    public async create(gameToCreate: Game): Promise<Game> {
        return await this.gameRepository.save(gameToCreate);
    }

    public async delete(id: number): Promise<void> {
        await this.gameRepository.delete(id);
    }
}
