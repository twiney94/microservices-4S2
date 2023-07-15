"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = void 0;
class CreateProductDto {
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
exports.CreateProductDto = CreateProductDto;
//# sourceMappingURL=create-product.dto.js.map