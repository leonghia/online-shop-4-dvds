import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumsService {
    public constructor(@InjectRepository(Album) private albumRepository: Repository<Album>) {}

    public async findRange(): Promise<Album[]> {
        return await this.albumRepository.find({
            take: 10,
            relations: {genres: true, artists: true}
        });
    }

    public async findById(id: number): Promise<Album | null> {
        return await this.albumRepository.findOne({
            where: {id},
            relations: {genres: true, artists: true}
        });
    }

    public async create(albumToCreate: Album): Promise<Album> {
        return await this.albumRepository.save(albumToCreate);
    }

    public async update(id: number, updateOptions: {}): Promise<void> {
        await this.albumRepository.update(id, updateOptions);
    }

    public async delete(id: number): Promise<void> {
        await this.albumRepository.delete(id);
    }
}
