import { Artist } from "../artists/artist.entity";
import { Category } from "../categories/category.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 256})
    title: string;

    @Column("date")
    released: Date;

    @ManyToMany(() => Category)
    @JoinTable()
    genres: Category[];

    @ManyToMany(() => Artist, (artist) => artist.albums, {onDelete: "CASCADE"})
    artists: Artist[];
}