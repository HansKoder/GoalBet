import { CreateMatchDto } from 'src/dtos/CreateMatch.dto';
import { updateMatchDto } from 'src/dtos/UpdateMatch.dto';
import { MatchesService } from 'src/services/matches/matches.service';
export declare class MatchesController {
    private matchesService;
    constructor(matchesService: MatchesService);
    findAll(): import("../../entities/Match").Match[];
    create(payload: CreateMatchDto): import("../../entities/Match").Match;
    findOne(id: number): import("../../entities/Match").Match;
    update(payload: updateMatchDto, id: number): import("../../entities/Match").Match;
}
