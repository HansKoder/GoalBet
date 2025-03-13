import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateBetDto {

    @IsString()
    @IsNotEmpty()
    readonly match: string;

    @IsString()
    @IsNotEmpty()
    readonly user: string;

    @IsNumber()
    @IsPositive()
    readonly scoreLocalTeam: number;

    @IsNumber()
    @IsPositive()
    readonly scoreVisitingTeam: number;

    @IsNotEmpty()
    readonly statusMatch: StatusMatch;

    @IsNumber()
    @IsPositive()
    readonly amount: number;
}