import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { RequestParams } from 'src/utils/request-params';

@Injectable()
export class ProductsService {
    public constructor(@InjectRepository(Product) private productRepo: Repository<Product>) {}

    public async findRange(requestParams: RequestParams = null): Promise<Product[]> {
        requestParams ??= new RequestParams();
        const products = await this.productRepo.find({
            relations: {genres: true},
            skip: requestParams.pageSize * (requestParams.pageNumber - 1),
            take: requestParams.pageSize
        });
        return products;
    }

    public async findById(id: number): Promise<Product | null> {
        return await this.productRepo.findOneBy({id});
    }

    public async create(productToCreate): Promise<Product> {
        return await this.productRepo.save(productToCreate);
    }

    public async delete(id: number): Promise<void> {
        await this.productRepo.delete(id);
    }
}
