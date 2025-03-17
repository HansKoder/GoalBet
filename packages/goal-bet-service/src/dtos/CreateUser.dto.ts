import { IsEmail, IsNotEmpty, IsNumberString, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsNumberString()
    readonly documentNumber : string;

    @IsNotEmpty()
    @IsEmail()
    readonly email : string;

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    readonly name : string;

    @IsNotEmpty()
    @IsString()
    readonly lastName : string;

}