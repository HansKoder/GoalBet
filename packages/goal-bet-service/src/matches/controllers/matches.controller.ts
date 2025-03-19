import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateMatchDto } from 'src/matches/dtos/CreateMatch.dto';
import { MatchesService } from 'src/matches/services/matches.service';
import { updateMatchDto } from '../dtos/UpdateMatch.dto';

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
