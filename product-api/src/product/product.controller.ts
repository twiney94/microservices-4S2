import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Put,
	Delete,
} from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { FindOneOptions } from "typeorm";
import { Product } from "./entities/product.entity";

@Controller("products") // Specify the base path for the routes
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Post()
	@MessagePattern("createProduct")
	create(@Payload() createProductDto: CreateProductDto) {
		return this.productService.create(createProductDto);
	}

	@Get()
	@MessagePattern("findAllProduct")
	findAll() {
		return this.productService.findAll();
	}

	@Get(":id")
	@MessagePattern("findOneProduct")
	findOne(@Param("id") id: number) {
		return this.productService.findOne(id);
	}

	@Put(":id")
	@MessagePattern("updateProduct")
	update(@Param("id") id: number, @Body() updateProductDto: UpdateProductDto) {
		return this.productService.update(id, updateProductDto);
	}

	@Delete(":id")
	@MessagePattern("removeProduct")
	remove(@Param("id") id: number) {
		return this.productService.remove(id);
	}

	@Put(":id/quantity")
	@MessagePattern("updateProductQuantity")
	updateProductQuantity(
		@Param("id") id: number,
		@Body("amount") amount: number
	) {
		return this.productService.updateProductQuantity(id, amount);
	}
}
