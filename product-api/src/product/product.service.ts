import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Repository, FindOneOptions } from "typeorm";

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(Product)
		private productRepository: Repository<Product>
	) {}

	create(createProductDto: CreateProductDto) {
		return this.productRepository.save(createProductDto);
	}

	findAll() {
		return this.productRepository.find();
	}

	findOne(id: FindOneOptions<number>) {
		return this.productRepository.findOne(id);
	}

	update(id: number, updateProductDto: UpdateProductDto) {
		return this.productRepository.update(id, updateProductDto);
	}

	remove(id: number) {
		return this.productRepository.delete(id);
	}

	updateProductQuantity(id: number, amount: number) {
		return this.productRepository.increment({ id }, "quantity", amount);
	}
}
