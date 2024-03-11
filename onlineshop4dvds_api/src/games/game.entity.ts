import { Category } from "src/categories/category.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({length: 256})
    public title: string;

    @Column()
    public releasedYear: number;

    @Column({length: 256})
    public publisher: string;

    @Column("decimal", {nullable: true})
    public price: number;

    @Column({nullable: true})
    public description: string;

    @ManyToMany(() => Category)
    @JoinTable()
    public genres: Category[];
}