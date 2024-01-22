import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './resource/dto';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  async getAllProducts() {
    try {
      const result = await this.prismaService.products.findMany();
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getProductById(id: number) {
    try {
      const result = await this.prismaService.products.findUnique({
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createProduct(request: CreateProductDto) {
    try {
      const result = await this.prismaService.products.create({
        data: {
          name: request.name,
          price: request.price,
          description: request.description,
          image: request.image,
          color: request.color,
        },
      });
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateProduct(id: number, request: UpdateProductDto) {
    try {
      const result = await this.prismaService.products.update({
        where: {
          id: id,
        },
        data: {
          name: request.name,
          price: request.price,
          description: request.description,
          image: request.image,
          color: request.color,
        },
      });
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteProduct(id: number) {
    try {
      const result = await this.prismaService.products.delete({
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
