import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./create-product.dto";

export class UpdateProductDto extends PartialType(CreateProductDto) {
	static _OPENAPI_METADATA_FACTORY() {
		return {
			name: {
				required: false,
				type: () => String,
			},
			description: {
				required: false,
				type: () => String,
			},
			price: {
				required: false,
				type: () => Number,
			},
			quantity: {
				required: false,
				type: () => Number,
			},
			category: {
				required: false,
				type: () => String,
			},
		};
	}
}
