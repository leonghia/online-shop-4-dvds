import { IsNumber, IsString, Length } from "class-validator";

export class CategoryUpdateDto {

    @IsNumber(undefined, {message: "Loại danh mục không được để trống"})
    type: number;

    @IsString({message: "Tên danh mục không được để trống"})
    @Length(3, 64, {message: "Tên danh mục phải chứa từ 3 đến 64 kí tự"})
    name: string;
}