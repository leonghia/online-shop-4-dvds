import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {

    public constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

    public async create(categoryToCreate: Category): Promise<Category> {
        return await this.categoryRepository.save(categoryToCreate);
    }

    public async findRange(): Promise<Category[]> {
        return await this.categoryRepository.find({
            take: 10,
        });
    }

    public async findById(id: number): Promise<Category | null> {
        return await this.categoryRepository.findOneBy({ id });
    }

    public async update(id: number, categoryToUpdate: {}): Promise<void> {
        await this.categoryRepository.update(id, categoryToUpdate);
    }

    public async delete(id: number): Promise<void> {
        await this.categoryRepository.delete(id);
    }
}
