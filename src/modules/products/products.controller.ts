import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './resource/dto';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('')
  async getProducts() {
    const result = await this.productsService.getAllProducts();
    return {
      message: 'Products retrieved successfully',
      data: result,
    };
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    const result = await this.productsService.getProductById(parseInt(id));
    return {
      message: 'Product retrieved successfully',
      data: result,
    };
  }

  @Post('')
  @HttpCode(201)
  async createProduct(
    @Body()
    request: CreateProductDto,
  ) {
    const result = await this.productsService.createProduct(request);
    return {
      message: 'Product created successfully',
      data: result,
    };
  }

  @Put(':id')
  @HttpCode(200)
  async updateProduct(
    @Param('id') id: string,
    @Body() request: UpdateProductDto,
  ) {
    const result = await this.productsService.updateProduct(
      parseInt(id),
      request,
    );
    return {
      message: 'Product updated successfully',
      data: result,
    };
  }

  @Delete(':id')
  @HttpCode(200)
  async deleteProduct(@Param('id') id: string) {
    const result = await this.productsService.deleteProduct(parseInt(id));
    return {
      message: 'Product deleted successfully',
      data: result,
    };
  }
}
