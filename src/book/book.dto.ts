import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly author: string;

  @IsString()
  readonly isbn: string;

  @IsOptional()
  @IsDateString()
  readonly publishedDate?: string;

  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsNumber()
  readonly stock?: number;

  @IsOptional()
  @IsString()
  readonly description?: string;
}