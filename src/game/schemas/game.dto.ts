import { IsString,IsNumber,IsOptional } from "class-validator";
export class CreateGameDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly brand: string;

    @IsString()
    readonly ganre: string;

    @IsNumber()
    readonly price: Number;

    @IsNumber()
    @IsOptional()
    readonly stock?: number;

    @IsOptional()
    @IsString()
    readonly description?: string;
}