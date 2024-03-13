import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { CategoriesModule } from 'src/categories/categories.module';
import { ArtistsModule } from 'src/artists/artists.module';
import { ReviewsModule } from 'src/reviews/reviews.module';

@Module({
  imports: [TypeOrmModule.forFeature([Album]), CategoriesModule, ArtistsModule, ReviewsModule],
  providers: [AlbumsService],
  controllers: [AlbumsController],
  exports: [AlbumsService, TypeOrmModule]
})
export class AlbumsModule {}
