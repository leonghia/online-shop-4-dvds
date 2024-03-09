import { Artist } from "../artists/artist.entity";
import { Category } from "../categories/category.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 256})
    title: string;

    @Column("date")
    released: Date;

    @Column({nullable: true})
    lengthInSeconds: number;

    @ManyToMany(() => Category)
    @JoinTable()
    genres: Category[];

    @ManyToOne(() => Artist, (artist) => artist.albums)
    artist: Artist;
}