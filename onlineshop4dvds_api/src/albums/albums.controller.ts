import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumGetDto } from './dtos/album-get.dto';
import { AlbumCreateDto } from './dtos/album-create.dto';
import { Album } from './album.entity';
import { CategoriesService } from 'src/categories/categories.service';
import { ArtistsService } from 'src/artists/artists.service';

@Controller('albums')
export class AlbumsController {
    public constructor(private albumsService: AlbumsService, private categoriesService: CategoriesService, private artistsService: ArtistsService) { }

    @Get()
    public async getRange(@Query("artistId") artistId: number) {
        let albums: Album[];
        if (artistId) {
            const artist = await this.artistsService.findById(artistId, false);
            albums = await this.albumsService.findRange({artist});
        } else {
            albums = await this.albumsService.findRange({artist: null});
        }
        
        const albumsToReturn = albums.map(album => {
            const albumToReturn: AlbumGetDto = {
                artist: album.artist.fullName,
                genres: album.genres.map(g => g.name),
                id: album.id,
                released: album.released,
                title: album.title,
                lengthInSeconds: album.lengthInSeconds,
                price: album.price,
                coverUrl: album.coverUrl,
                artistAvatar: album.artist.avatar
            };
            return albumToReturn;
        });
        return albumsToReturn;
    }

    @Get(":id")
    public async getById(@Param("id") id: number) {
        const album = await this.albumsService.findById(id);
        if (!album) throw new NotFoundException();
        const albumToReturn: AlbumGetDto = {
            artist: album.artist.fullName,
            genres: album.genres.map(g => g.name),
            id: album.id,
            released: album.released,
            title: album.title,
            lengthInSeconds: album.lengthInSeconds,
            price: album.price,
            coverUrl: album.coverUrl,
            artistAvatar: album.artist.avatar
        };
        return albumToReturn;
    }

    @Post()
    public async create(@Body() albumCreateDto: AlbumCreateDto) {
        const albumToCreate = new Album();
        albumToCreate.genres = await this.categoriesService.findRange({requestParams: undefined, ids: albumCreateDto.genres });
        albumToCreate.artist = await this.artistsService.findById(albumCreateDto.artistId, false);
        albumToCreate.released = albumCreateDto.released;
        albumToCreate.title = albumCreateDto.title;
        albumToCreate.lengthInSeconds = albumCreateDto.minutes * 60 + albumCreateDto.seconds;
        albumToCreate.price = albumCreateDto.price;
        albumToCreate.coverUrl = albumCreateDto.coverUrl;
        const albumCreated = await this.albumsService.create(albumToCreate);
    
        const albumToReturn: AlbumGetDto = {
            artist: albumCreated.artist.fullName,
            genres: albumCreated.genres.map(g => g.name),
            id: albumCreated.id,
            released: albumCreated.released,
            title: albumCreated.title,
            lengthInSeconds: albumCreated.lengthInSeconds,
            price: albumCreated.price,
            coverUrl: albumCreated.coverUrl,
            artistAvatar: albumCreated.artist.avatar
        };
        return albumToReturn;
    }

    @HttpCode(204)
    @Delete(":id")
    public async delete(@Param("id") id: number) {
        const album = await this.albumsService.findById(id);
        if (!album) throw new NotFoundException();
        await this.albumsService.delete(id);
    }
}
