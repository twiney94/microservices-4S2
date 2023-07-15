import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./create-product.dto";

export class UpdateProductDto extends PartialType(CreateProductDto) {
	static _OPENAPI_METADATA_FACTORY() {
		return {
			id: {
				required: true,
				type: () => Number,
			},
			name: {
				required: true,
				type: () => String,
			},
			description: {
				required: true,
				type: () => String,
			},
			price: {
				required: true,
				type: () => Number,
			},
			quantity: {
				required: true,
				type: () => Number,
			},
			category: {
				required: true,
				type: () => String,
			},
		};
	}
}
