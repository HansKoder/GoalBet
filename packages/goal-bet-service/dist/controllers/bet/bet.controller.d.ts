import { CreateBetDto } from 'src/dtos/CreateBet.dto';
import { BetService } from 'src/services/bet/bet.service';
import { UpdateBetDto } from 'src/dtos/UpdateBet.dto';
export declare class BetController {
    private betService;
    constructor(betService: BetService);
    findAll(): any[];
    findOne(id: number): import("../../entities/Bet").Bet;
    create(payload: CreateBetDto): import("../../entities/Bet").Bet;
    update(payload: UpdateBetDto, id: number): void;
}
