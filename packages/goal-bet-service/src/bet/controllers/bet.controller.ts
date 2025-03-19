import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateBetDto } from 'src/bet/dtos/CreateBet.dto';
import { BetService } from 'src/bet/services/bet.service';

import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe'
import { UpdateBetDto } from '../dtos/UpdateBet.dto';

@Controller('api/v1/bet/')
export class BetController {

    constructor (private betService: BetService) {}

    @Get("find-all")
    findAll () : any[] {
        return this.betService.findAll();
    }

    @Get("find-by-id/:id")
    @HttpCode(HttpStatus.ACCEPTED)
    findOne (@Param("id", ParseIntPipe) id: number) {        
        return this.betService.findOne(id);
    }

    @Post("create")
    create (@Body() payload: CreateBetDto) {
        return this.betService.create(payload);
    }

    @Put("update/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    update (@Body() payload: UpdateBetDto, @Param("id", ParseIntPipe) id: number) {
        return this.betService.update(payload, id);
    }

}
