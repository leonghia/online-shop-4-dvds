import { Album } from "src/albums/album.entity";
import { Artist } from "src/artists/artist.entity";
import { Category } from "src/categories/category.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Song {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(() => Artist, (artist) => artist.songs)
    artist: Artist;

    @Column("date")
    released: Date;

    @Column()
    lengthInSeconds: number;

    @ManyToMany(() => Category)
    @JoinTable()
    genres: Category[];

    @ManyToOne(() => Album, (album) => album.songs, {nullable: true})
    album: Album;
}