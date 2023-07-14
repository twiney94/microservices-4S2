export class CreateProductDto {
	static _OPENAPI_METADATA_FACTORY() {
		return {
			name: { required: true, type: () => String },
			description: { required: true, type: () => String },
			price: { required: true, type: () => Number },
			quantity: { required: true, type: () => Number },
			category: { required: true, type: () => String },
		};
	}
}
