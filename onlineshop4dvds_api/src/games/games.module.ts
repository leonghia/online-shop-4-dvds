import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { CategoriesModule } from 'src/categories/categories.module';
import { GameDetail } from './game-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game, GameDetail]), CategoriesModule],
  providers: [GamesService],
  controllers: [GamesController],
  exports: [GamesService, TypeOrmModule]
})
export class GamesModule {}
