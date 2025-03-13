import { CreateMatchDto } from 'src/dtos/CreateMatch.dto';
import { updateMatchDto } from 'src/dtos/UpdateMatch.dto';
import { Match } from 'src/entities/Match';
export declare class MatchesService {
    private id;
    private matches;
    findAll(): Match[];
    create(payload: CreateMatchDto): Match;
    findOne(id: number): Match;
    update(payload: updateMatchDto, id: number): Match;
}
