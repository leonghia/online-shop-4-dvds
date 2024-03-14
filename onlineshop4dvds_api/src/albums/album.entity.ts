import { Song } from "src/songs/song.entity";
import { Artist } from "../artists/artist.entity";
import { Category } from "../categories/category.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({length: 256})
    public title: string;

    @Column("date")
    public released: Date;

    @Column({nullable: true})
    public lengthInSeconds: number;

    @Column("decimal", {nullable: true})
    public price: number;

    @Column({nullable: true})
    public coverUrl: string;

    @Column({nullable: true})
    public imgUrl: string;

    @Column({nullable: true})
    public description: string;

    @Column({nullable: true, default: 200})
    public stock: number;

    @ManyToMany(() => Category)
    @JoinTable()
    public genres: Category[];

    @ManyToOne(() => Artist, (artist) => artist.albums)
    public artist: Artist;

    @OneToMany(() => Song, (song) => song.album)
    public songs: Song[];
}