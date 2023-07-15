export declare class Product {
    static _OPENAPI_METADATA_FACTORY(): {
        id: {
            required: boolean;
            type: () => NumberConstructor;
        };
        name: {
            required: boolean;
            type: () => StringConstructor;
        };
        description: {
            required: boolean;
            type: () => StringConstructor;
        };
        price: {
            required: boolean;
            type: () => NumberConstructor;
        };
        quantity: {
            required: boolean;
            type: () => NumberConstructor;
        };
        category: {
            required: boolean;
            type: () => StringConstructor;
        };
    };
}
