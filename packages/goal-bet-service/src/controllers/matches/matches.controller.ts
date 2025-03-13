import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateMatchDto } from 'src/dtos/CreateMatch.dto';
import { updateMatchDto } from 'src/dtos/UpdateMatch.dto';
import { MatchesService } from 'src/services/matches/matches.service';

@Controller('api/v1/matches')
export class MatchesController {

    constructor(private matchesService: MatchesService) {}

    @Get("find-all")
    findAll () {
        return this.matchesService.findAll()
    }

    @Post("create")
    create (@Body() payload: CreateMatchDto) {
        return this.matchesService.create(payload);
    }

    @Get("find-one/:id")
    findOne (@Param("id", ParseIntPipe) id: number) {
        return this.matchesService.findOne(id);
    }

    @Put("update/:id")
    update (@Body() payload: updateMatchDto, @Param("id", ParseIntPipe) id: number) {
        return this.matchesService.update(payload, id);
    }
}
