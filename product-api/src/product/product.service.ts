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
		private readonly productRepository: Repository<Product>
	) {}

	create(createProductDto: CreateProductDto) {
		return this.productRepository.save(createProductDto);
	}

	findAll() {
		return this.productRepository.find();
	}

	findOne(id: number) {
		return this.productRepository.findOneBy({ id }); // TODO: ID is actually mutable
	}

	update(id: number, updateProductDto: UpdateProductDto) {
		return this.productRepository.update(id, updateProductDto);
	}

	remove(id: number) {
		return this.productRepository.delete(id);
	}
}
