import { Category } from "src/categories/category.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GameDetail } from "./game-detail.entity";

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

    @Column({nullable: true})
    public description: string;

    @ManyToMany(() => Category)
    @JoinTable()
    public genres: Category[];

    @OneToMany(() => GameDetail, (gameDetail) => gameDetail.game)
    public gameDetails: GameDetail[];
}