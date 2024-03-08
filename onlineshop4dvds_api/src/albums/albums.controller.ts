import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumGetDto } from './albums/album-get.dto';
import { AlbumCreateDto } from './albums/album-create.dto';
import { Album } from './album.entity';
import { CategoriesService } from 'src/categories/categories.service';
import { ArtistsService } from 'src/artists/artists.service';

@Controller('albums')
export class AlbumsController {
    public constructor(private albumsService: AlbumsService, private categoriesService: CategoriesService, private artistsService: ArtistsService) { }

    @Get()
    public async getRange() {
        const albums = await this.albumsService.findRange();
        const albumsToReturn = albums.map(album => {
            const albumToReturn = new AlbumGetDto();
            albumToReturn.artists = album.artists.map(artist => artist.fullName);
            albumToReturn.genres = album.genres.map(genre => genre.name);
            albumToReturn.id = album.id;
            albumToReturn.released = album.released;
            albumToReturn.title = album.title;
            return albumToReturn;
        });
        return albumsToReturn;
    }

    @Get(":id")
    public async getById(@Param("id") id: number) {
        const album = await this.albumsService.findById(id);
        if (!album) throw new NotFoundException();
        const albumToReturn = new AlbumGetDto();
        albumToReturn.artists = album.artists.map(artist => artist.fullName);
        albumToReturn.genres = album.genres.map(genre => genre.name);
        albumToReturn.id = album.id;
        albumToReturn.released = album.released;
        albumToReturn.title = album.title;
        return albumToReturn;
    }

    @Post()
    public async create(@Body() albumCreateDto: AlbumCreateDto) {
        const albumToCreate = new Album();
        albumToCreate.genres = await this.categoriesService.findRange({type: undefined, ids: albumCreateDto.genres });
        albumToCreate.artists = await this.artistsService.findRange({ids: albumCreateDto.artists});
        albumToCreate.released = albumCreateDto.released;
        albumToCreate.title = albumCreateDto.title;
        const albumCreated = await this.albumsService.create(albumToCreate);
        const albumToReturn = new AlbumGetDto();
        albumToReturn.artists = albumCreated.artists.map(artist => artist.fullName);
        albumToReturn.genres = albumCreated.genres.map(genre => genre.name);
        albumToReturn.id = albumCreated.id;
        albumToReturn.released = albumCreated.released;
        albumToReturn.title = albumCreated.title;
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
