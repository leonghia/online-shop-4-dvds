import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { CategoriesModule } from 'src/categories/categories.module';
import { ArtistsModule } from 'src/artists/artists.module';

@Module({
  imports: [TypeOrmModule.forFeature([Album]), CategoriesModule, ArtistsModule],
  providers: [AlbumsService],
  controllers: [AlbumsController]
})
export class AlbumsModule {}
