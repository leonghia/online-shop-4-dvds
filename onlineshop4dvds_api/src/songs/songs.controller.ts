import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongGetDto } from './dtos/song-get.dto';
import { SongCreateDto } from './dtos/song-create.dto';
import { Song } from './song.entity';
import { AlbumsService } from 'src/albums/albums.service';
import { ArtistsService } from 'src/artists/artists.service';
import { CategoriesService } from 'src/categories/categories.service';

@Controller('songs')
export class SongsController {
    public constructor(private songsService: SongsService, private albumsService: AlbumsService, private artistsService: ArtistsService, private categoriesService: CategoriesService) { }

    @Get()
    public async getRange() {
        const songs = await this.songsService.findRange();
        const songsToReturn = songs.map(song => {
            const songToReturn = new SongGetDto();
            songToReturn.album = song.album?.title || null;
            songToReturn.artist = song.artist.fullName;
            songToReturn.genres = song.genres.map(genre => genre.name);
            songToReturn.id = song.id;
            songToReturn.lengthInSeconds = song.lengthInSeconds;
            songToReturn.released = song.released;
            songToReturn.title = song.title;
            return songToReturn;
        });
        return songsToReturn;
    }

    @Get(":id")
    public async getById(@Param("id") id: number) {
        const song = await this.songsService.findById(id);
        if (!song) throw new NotFoundException();

        const songToReturn = new SongGetDto();
        songToReturn.album = song.album?.title || null;
        songToReturn.artist = song.artist.fullName;
        songToReturn.genres = song.genres.map(genre => genre.name);
        songToReturn.id = song.id;
        songToReturn.lengthInSeconds = song.lengthInSeconds;
        songToReturn.released = song.released;
        songToReturn.title = song.title;
        return songToReturn;
    }

    @Post()
    public async create(@Body() songCreateDto: SongCreateDto) {
        const songToCreate = new Song();
        if (songCreateDto.albumId)
            songToCreate.album = await this.albumsService.findById(songCreateDto.albumId);
        songToCreate.artist = await this.artistsService.findById(songCreateDto.artistId, false);
        songToCreate.genres = await this.categoriesService.findRange({type: undefined, ids: songCreateDto.genresIds});
        songToCreate.lengthInSeconds = songCreateDto.minutes * 60 + songCreateDto.seconds;
        songToCreate.released = songCreateDto.released;
        songToCreate.title = songCreateDto.title;
        
        const songCreated = await this.songsService.create(songToCreate);
        const songToReturn = new SongGetDto();
        songToReturn.album = songCreated.album?.title || null;
        songToReturn.artist = songCreated.artist.fullName;
        songToReturn.genres = songCreated.genres.map(genre => genre.name);
        songToReturn.id = songCreated.id;
        songToReturn.lengthInSeconds = songCreated.lengthInSeconds;
        songToReturn.released = songCreated.released;
        songToReturn.title = songCreated.title;
        return songToReturn;
    }

    @HttpCode(204)
    @Delete(":id")
    public async delete(@Param("id") id: number) {
        const song = await this.songsService.findById(id);
        if (!song) throw new NotFoundException();
        await this.songsService.delete(id);
    }
}
