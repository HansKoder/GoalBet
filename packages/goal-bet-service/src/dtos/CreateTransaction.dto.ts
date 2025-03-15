import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateTransactionDto {

    @IsNotEmpty()
    @IsString()
    readonly userId : string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly amount: number;
}