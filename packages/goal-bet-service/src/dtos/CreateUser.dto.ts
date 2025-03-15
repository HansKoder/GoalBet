import { IsEmail, IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsNumberString()
    readonly documentNumber : string;

    @IsNotEmpty()
    @IsEmail()
    readonly email : string;

    @IsNotEmpty()
    @IsString()
    readonly name : string;

    @IsNotEmpty()
    @IsString()
    readonly lastName : string;

}