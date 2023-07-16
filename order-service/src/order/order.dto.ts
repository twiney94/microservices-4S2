import { IsNumber, Min } from 'class-validator';
import { CreateOrderRequest } from './proto/order.pb';

export class CreateOrderRequestDto implements CreateOrderRequest {
  @IsNumber()
  public productId: number;
  @IsNumber()
  public userId: number;
}
