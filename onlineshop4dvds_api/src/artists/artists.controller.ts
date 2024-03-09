import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistCreateDto } from './dtos/artist-create.dto';
import { Artist } from './artist.entity';
import { CategoriesService } from 'src/categories/categories.service';
import { ArtistGetDto } from './dtos/artist-get.dto';
import { ArtistUpdateDto } from './dtos/artist-update.dto';

@Controller('artists')
export class ArtistsController {
    
    public constructor(private artistsService: ArtistsService, private categoriesService: CategoriesService) {}

    @Get()
    public async getRange() {
        const artists = await this.artistsService.findRange({ids: undefined});
        const artistsToReturn = artists.map(a => {
            const artistToReturn = new ArtistGetDto();
            artistToReturn.genres = a.categories.map(c => c.name);
            artistToReturn.dob = a.dob;
            artistToReturn.fullName = a.fullName;
            artistToReturn.id = a.id;
            artistToReturn.nationality = a.nationality;
            return artistToReturn;
        })

        return artistsToReturn;
    }

    @Get(":id")
    public async getById(@Param("id") id: number) {
        const artist = await this.artistsService.findById(id, true);
        if (!artist) throw new NotFoundException();
        const artistToReturn = new ArtistGetDto();
        artistToReturn.genres = artist.categories.map(cat => cat.name);
        artistToReturn.dob = artist.dob;
        artistToReturn.fullName = artist.fullName;
        artistToReturn.id = artist.id;
        artistToReturn.nationality = artist.nationality;
        return artistToReturn;
    }

    @Post()
    public async create(@Body() artistCreateDto: ArtistCreateDto) {
        const artistToCreate = new Artist();
        artistToCreate.fullName = artistCreateDto.fullName;
        artistToCreate.dob = artistCreateDto.dob;
        artistToCreate.nationality = artistCreateDto.nationality;
        artistToCreate.categories = await this.categoriesService.findRange({type: undefined, ids: artistCreateDto.genres});
        return await this.artistsService.create(artistToCreate);
    }

    @HttpCode(204)
    @Put(":id")
    public async update(@Param("id") id: number, @Body() artistUpdateDto: ArtistUpdateDto) {
        const artist = await this.artistsService.findById(id, true);
        if (!artist) throw new NotFoundException();

        const artistToUpdate = new Artist();
        artistToUpdate.dob = artistUpdateDto.dob;
        artistToUpdate.fullName = artistUpdateDto.fullName;
        artistToUpdate.nationality = artistUpdateDto.nationality;

        await this.artistsService.update(id, artistToUpdate);
    }

    @HttpCode(204)
    @Delete(":id")
    public async delete(@Param("id") id: number) {
        const artist = await this.artistsService.findById(id, false);
        if (!artist) throw new NotFoundException();

        await this.artistsService.delete(id);
    }
}
