import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";
import { Repository, FindOneOptions } from "typeorm";
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<CreateProductDto & Product>;
    findAll(): Promise<Product[]>;
    findOne(id: FindOneOptions<number>): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    updateProductQuantity(id: number, amount: number): Promise<import("typeorm").UpdateResult>;
}