import { Product } from "src/products/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public url: string;

    @ManyToOne(() => Product, (product) => product.images)
    public product: Product;
}