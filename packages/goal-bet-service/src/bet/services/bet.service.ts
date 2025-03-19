import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBetDto } from 'src/bet/dtos/CreateBet.dto';
import { Bet } from 'src/bet/entities/Bet';
import { UpdateBetDto } from '../dtos/UpdateBet.dto';

@Injectable()
export class BetService {

    private bets: Bet[] = [];

    private idx: number = -1;

    findAll (): Bet[] {
        return this.bets;
    }

    findOne (id: number): Bet {
        const find = this.bets.find(bet => bet.id == id);

        if (!find) 
            throw new NotFoundException(`The Bet with the ID ${id} does not found`);

        return find;
    }

    create (payload: CreateBetDto): Bet {
        this.idx += 1;

        const data: Bet = {
            id: this.idx,
            ...payload
        }

        this.bets.push(data);

        return data;
    }

    update (payload: UpdateBetDto, id: number): void {
        const findIndex = this.bets.findIndex(bet => bet.id == id);

        if (findIndex == -1) 
            throw new NotFoundException(`The Bet with the ID ${id} does not found`);

        const old = this.bets[findIndex];

        this.bets[findIndex] = {
            ...old,
            ...payload,
        }
    }

}
