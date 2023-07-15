import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductModule } from "./product/product.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product/entities/product.entity";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "mariadb",
			host: "localhost",
			port: 3306,
			username: "root1234",
			password: "root1234",
			database: "product_db",
			entities: [Product],
			synchronize: true,
		}),
		ProductModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

