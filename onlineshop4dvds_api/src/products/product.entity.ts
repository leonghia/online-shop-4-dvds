import { Category } from "src/categories/category.entity";
import { GenreType } from "src/utils/genre-type";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({length: 256})
    public title: string;

    @Column()
    public yearReleased: number;

    @Column("decimal")
    public price: number;

    @Column()
    public coverUrl: string;

    @Column()
    public imgUrl: string;

    @Column()
    public description: string;

    @Column({default: 200})
    public stock: number;

    @Column()
    public genreType: GenreType;

    @Column()
    public entityId: number;

    @ManyToMany(() => Category)
    @JoinTable()
    public genres: Category[];
}