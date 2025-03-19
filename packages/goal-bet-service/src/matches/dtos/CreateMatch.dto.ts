import { IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateMatchDto {

    @IsString()
    @IsNotEmpty()
    readonly league: string;

    @IsString()
    @IsNotEmpty()
    readonly localTeam: string;

    @IsString()
    @IsNotEmpty()
    readonly visitingTeam : string;

    @IsDateString()
    readonly dateMatch: Date;

    @IsNotEmpty()
    readonly statusMatch: StatusMatch;

}