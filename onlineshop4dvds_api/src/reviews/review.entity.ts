import { User } from "src/users/user.entity";
import { GenreType } from "src/utils/genre-type";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(() => User, (user) => user.reviews)
    public user: User;

    @Column("timestamptz", {default: new Date()})
    public createdAt: Date = new Date();

    @Column("smallint")
    public ratings: number;

    @Column({nullable: true})
    public content: string;

    @Column()
    public genreType: GenreType;

    @Column()
    public productId: number;
}