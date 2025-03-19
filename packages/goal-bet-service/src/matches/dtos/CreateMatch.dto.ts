import { IsDateString, IsNotEmpty, IsString } from "class-validator";

import { ApiProperty } from '@nestjs/swagger';
import { StatusMatch } from "../enums/StatusMatch.enum";

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

    @ApiProperty({ 
        description: 'Current status about match', 
        enum: StatusMatch,
        example: StatusMatch.Pending 
      })
    @IsNotEmpty()
    readonly statusMatch: StatusMatch;

}