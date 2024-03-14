import { Category } from "src/categories/category.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({length: 256})
    public title: string;

    @Column()
    public releasedYear: number;

    @Column()
    public lengthInMinutes: number;

    @Column("decimal", {nullable: true})
    public price: number;

    @Column("decimal", {nullable: true})
    public rating: number;

    @Column({nullable: true})
    public description: string;

    @Column({nullable: true})
    public coverUrl: string;

    @Column({nullable: true})
    public imgUrl: string;

    @Column({nullable: true, default: 200})
    public stock: number;

    @ManyToMany(() => Category)
    @JoinTable()
    public genres: Category[];
}