import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './song.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SongsService {
    public constructor(@InjectRepository(Song) private songRepository: Repository<Song>) {}

    public async findRange(): Promise<Song[]> {
        return await this.songRepository.find({
            relations: {
                artist: true,
                album: true,
                genres: true
            }
        });
    }

    public async findById(id: number): Promise<Song | null> {
        return await this.songRepository.findOne({
            where: {id},
            relations: {artist: true, album: true, genres: true}
        });
    }

    public async create(songToCreate: Song): Promise<Song> {
        return await this.songRepository.save(songToCreate);
    }

    public async update(id: number, updateOptions: {}): Promise<void> {
        await this.songRepository.update(id, updateOptions);
    }

    public async delete(id: number): Promise<void> {
        await this.songRepository.delete(id);
    }
}
