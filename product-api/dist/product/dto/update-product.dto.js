"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_product_dto_1 = require("./create-product.dto");
class UpdateProductDto extends (0, mapped_types_1.PartialType)(create_product_dto_1.CreateProductDto) {
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
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=update-product.dto.js.map