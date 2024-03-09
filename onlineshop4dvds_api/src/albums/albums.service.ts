import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { Repository } from 'typeorm';
import { Artist } from 'src/artists/artist.entity';

@Injectable()
export class AlbumsService {
    public constructor(@InjectRepository(Album) private albumRepository: Repository<Album>) {}

    public async findRange({artist}: {artist: Artist | null}): Promise<Album[]> {
        if (artist)
            return await this.albumRepository.find({
                where: {artist},
                relations: {genres: true, artist: true}
            });
        else
            return await this.albumRepository.find({
                relations: {genres: true, artist: true}
            });
    }

    public async findById(id: number): Promise<Album | null> {
        return await this.albumRepository.findOne({
            where: {id},
            relations: {genres: true, artist: true}
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
