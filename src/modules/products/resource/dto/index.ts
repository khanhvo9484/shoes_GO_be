import { IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  image: string;
  @IsNotEmpty()
  color: string;
}

export class UpdateProductDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  image: string;
  @IsNotEmpty()
  color: string;
}
