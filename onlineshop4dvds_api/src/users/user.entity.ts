import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 64})
    fullName: string;

    @Column()
    email: string;
    
    @Column()
    passwordHash: string;

    @Column()
    passwordSalt: string;

    @Column("boolean", {default: false})
    isEmailActive: boolean = false;

    @Column("boolean", {default: false})
    isAdmin: boolean = false;
}