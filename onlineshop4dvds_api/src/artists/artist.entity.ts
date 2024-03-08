import { Album } from "../albums/album.entity";
import { Category } from "../categories/category.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Artist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 64})
    fullName: string;

    @Column("date")
    dob: Date;

    @Column({length: 64})
    nationality: string;

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[];

    @ManyToMany(() => Album, (album) => album.artists)
    @JoinTable()
    albums: Album[];
}