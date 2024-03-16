import { Body, ConflictException, Controller, Get, HttpCode, Post, Put, Req } from '@nestjs/common';
import { CartsService } from './carts.service';
import { Request } from 'express';
import { CartUpdateDto } from './dto/cart-update.dto';
import { CartDto } from './dto/cart.dto';
import { CartItemDto } from './dto/cart-item.dto';
import { CartCreateDto } from './dto/cart-create.dto';
import { toString } from 'src/utils/genre-type';

@Controller('carts')
export class CartsController {
    public constructor(private cartsService: CartsService) { }

    @Get()
    public async get(@Req() request: Request) {
        const cartId = Number(request.cookies["cartId"]);
        if (!cartId) return;
        const cart = await this.cartsService.findById(cartId);
        if (!cart) throw new ConflictException();
        const cartToReturn: CartDto = {
            id: cart.id,
            items: cart.cartProducts.map(cp => {
                const itemToReturn: CartItemDto = {
                    id: cp.id,
                    title: cp.product.title,
                    price: cp.product.price,
                    quantity: cp.quantity,
                    thumbnailUrl: cp.product.thumbnailUrl,
                    type: toString(cp.product.genreType),
                    stock: cp.product.stock
                };
                return itemToReturn;
            }),
        };
        return cartToReturn;
    }

    @Post()
    public async create(@Body() cartCreateDto: CartCreateDto) {
        const cartCreated = await this.cartsService.create({ productId: cartCreateDto.productId });
        const cartToReturn: CartDto = {
            id: cartCreated.id,
            items: cartCreated.cartProducts.map(cp => {
                const itemToReturn: CartItemDto = {
                    id: cp.id,
                    title: cp.product.title,
                    price: cp.product.price,
                    quantity: cp.quantity,
                    thumbnailUrl: cp.product.thumbnailUrl,
                    type: toString(cp.product.genreType),
                    stock: cp.product.stock
                };
                return itemToReturn;
            }),
        };
        return cartToReturn;

    }

    @Put()
    public async update(@Req() request: Request, @Body() cartUpdateDto: CartUpdateDto) {
        const cartId = Number(request.cookies["cartId"]);
        const cart = await this.cartsService.findById(cartId);
        if (!cart) throw new ConflictException();
        const cartUpdated = await this.cartsService.update({ cartId: cart.id, productId: cartUpdateDto.productId, quantity: cartUpdateDto.quantity });
        const cartToReturn: CartDto = {
            id: cartUpdated.id,
            items: cartUpdated.cartProducts.map(cp => {
                const itemToReturn: CartItemDto = {
                    id: cp.id,
                    title: cp.product.title,
                    price: cp.product.price,
                    quantity: cp.quantity,
                    thumbnailUrl: cp.product.thumbnailUrl,
                    type: toString(cp.product.genreType),
                    stock: cp.product.stock
                };
                return itemToReturn;
            }),
        };
        return cartToReturn;
    }
}
