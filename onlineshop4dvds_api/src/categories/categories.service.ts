import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class CategoriesService {

    public constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

    public async create(categoryToCreate: Category): Promise<Category> {
        return await this.categoryRepository.save(categoryToCreate);
    }

    public async findRange({type, ids}: {type: number, ids: number[]}): Promise<Category[]> {
        if (type)
            return await this.categoryRepository.find({
                
                where: {
                    type
                },
            });
        else if (ids)
            return await this.categoryRepository.find({
                
                where: {
                    id: In(ids)
                }
            });
        else
            return await this.categoryRepository.find({
                
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
