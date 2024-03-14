import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './image.entity';
import { Repository } from 'typeorm';
import { GenreType } from 'src/utils/genre-type';

@Injectable()
export class ImagesService {
    public constructor(@InjectRepository(Image) private imageRepo: Repository<Image>) {}

    public async getRange({genreType, productId}: {genreType: GenreType, productId: number}) {
        return await this.imageRepo.findBy({genreType, productId});
    }
}
