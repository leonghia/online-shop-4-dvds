import { GenreType } from "src/utils/genre-type";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public url: string;

    @Column("smallint")
    public genreType: GenreType;

    @Column()
    public productId: number;
}