import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { MailModule } from './mail/mail.module';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/category.entity';
import { ArtistsModule } from './artists/artists.module';
import { Artist } from './artists/artist.entity';
import { AlbumsModule } from './albums/albums.module';
import { Album } from './albums/album.entity';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "fiora",
      database: "onlineshop4dvds",
      entities: [User, Category, Artist, Album],
      synchronize: true, // auto migration
    }),
    AuthModule,
    UsersModule,
    MailModule,
    CategoriesModule,
    ArtistsModule,
    AlbumsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
