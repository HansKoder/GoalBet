import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CredentialDto {

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsString()
    @IsStrongPassword()
    readonly password: string;

}