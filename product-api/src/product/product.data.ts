import { ApiProperty } from "@nestjs/swagger";

export class ProductData {
	@ApiProperty()
	id: number;

	@ApiProperty()
	name: string;

	@ApiProperty()
	description: string;

	@ApiProperty()
	price: number;

	@ApiProperty()
	quantity: number;

	@ApiProperty()
	category: string;
}
