import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { StatusMatch } from "src/matches/enums/StatusMatch.enum";

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

    @ApiProperty({ 
        description: 'Estado del partido', 
        enum: StatusMatch,
        example: StatusMatch.Finished
      })
    @IsNotEmpty()    
    readonly statusMatch: StatusMatch;

    @IsNumber()
    @IsPositive()
    readonly amount: number;
}