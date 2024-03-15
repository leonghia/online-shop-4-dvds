import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), CategoriesModule],
  providers: [MoviesService],
  controllers: [MoviesController],
  exports: [MoviesService, TypeOrmModule]
})
export class MoviesModule {}
