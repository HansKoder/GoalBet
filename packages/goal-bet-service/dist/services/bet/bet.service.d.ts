import { CreateBetDto } from 'src/dtos/CreateBet.dto';
import { UpdateBetDto } from 'src/dtos/UpdateBet.dto';
import { Bet } from 'src/entities/Bet';
export declare class BetService {
    private bets;
    private idx;
    findAll(): Bet[];
    findOne(id: number): Bet;
    create(payload: CreateBetDto): Bet;
    update(payload: UpdateBetDto, id: number): void;
}
