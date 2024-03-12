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
            const albumToReturn = new AlbumGetDto();
            albumToReturn.artist = album.artist.fullName;
            albumToReturn.genres = album.genres.map(genre => genre.name);
            albumToReturn.id = album.id;
            albumToReturn.released = album.released;
            albumToReturn.title = album.title;
            albumToReturn.lengthInSeconds = album.lengthInSeconds;
            albumToReturn.price = album.price;
            albumToReturn.coverUrl = album.coverUrl;
            return albumToReturn;
        });
        return albumsToReturn;
    }

    @Get(":id")
    public async getById(@Param("id") id: number) {
        const album = await this.albumsService.findById(id);
        if (!album) throw new NotFoundException();
        const albumToReturn = new AlbumGetDto();
        albumToReturn.artist = album.artist.fullName;
        albumToReturn.genres = album.genres.map(genre => genre.name);
        albumToReturn.id = album.id;
        albumToReturn.released = album.released;
        albumToReturn.title = album.title;
        albumToReturn.lengthInSeconds = album.lengthInSeconds;
        albumToReturn.price = album.price;
        albumToReturn.coverUrl = album.coverUrl;
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
        const albumToReturn = new AlbumGetDto();
        albumToReturn.artist = albumCreated.artist.fullName;
        albumToReturn.genres = albumCreated.genres.map(genre => genre.name);
        albumToReturn.id = albumCreated.id;
        albumToReturn.released = albumCreated.released;
        albumToReturn.title = albumCreated.title;
        albumToReturn.lengthInSeconds = albumCreated.lengthInSeconds;
        albumToReturn.price = albumCreated.price;
        albumToReturn.coverUrl = albumCreated.coverUrl;
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
