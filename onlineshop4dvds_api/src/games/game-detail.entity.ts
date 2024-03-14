import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";
import { ConsoleType } from "src/utils/console-type";

@Entity()
export class GameDetail {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column("smallint", {nullable: true})
    public consoleType: ConsoleType;

    @Column("decimal", {nullable: true})
    public price: number;

    @Column({nullable: true})
    public coverUrl: string;

    @ManyToOne(() => Game, (game) => game.gameDetails)
    public game: Game;

    @Column({nullable: true})
    public imgUrl: string;

    @Column({nullable: true, default: 200})
    public stock: number;
}