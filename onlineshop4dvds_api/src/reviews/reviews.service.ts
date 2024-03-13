import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { GenreType } from 'src/utils/genre-type';

@Injectable()
export class ReviewsService {
    public constructor(@InjectRepository(Review) private reviewRepo: Repository<Review>) {}

    public async findRange({genreType, productId, pageSize, pageNumber}: {genreType: GenreType, productId: number, pageSize: number, pageNumber: number}): Promise<Review[]> {
        return this.reviewRepo.find({
            where: {
                genreType,
                productId
            },
            skip: pageSize * (pageNumber - 1),
            take: pageSize
        });
    }

    public async calculateAvgRatings({genreType, productId}: {genreType: GenreType, productId: number}): Promise<{ratings: number, numbersOfReviews: number}> {
        const ratings = await this.reviewRepo.average("ratings", {
            genreType,
            productId
        });
        const numbersOfReviews = await this.reviewRepo.countBy({genreType, productId});

        return {ratings, numbersOfReviews};
    }

    public async create(reviewToCreate: Review): Promise<Review> {
        return await this.reviewRepo.save(reviewToCreate);
    }

    public async delete(id: number): Promise<void> {
        await this.reviewRepo.delete(id);
    }
}
