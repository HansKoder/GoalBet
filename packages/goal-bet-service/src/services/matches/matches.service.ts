import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMatchDto } from 'src/dtos/CreateMatch.dto';
import { updateMatchDto } from 'src/dtos/UpdateMatch.dto';
import { Match } from 'src/entities/Match';

@Injectable()
export class MatchesService {

    private id: number = -1;

    private matches: Match[] = [];

    findAll (): Match[] {
        return this.matches;
    }

    create (payload: CreateMatchDto): Match {
        this.id++;

        const entity: Match = {
            id: this.id,
            ...payload
        }

        this.matches.push(entity);

        return entity;
    }

    findOne (id: number): Match {
        const find = this.matches.find(m => m.id == id);

        if (!find) 
            throw new NotFoundException(`The match with the ID ${id} is not found`);

        return find;
    }

    update (payload: updateMatchDto, id: number): Match {
        const findIndex = this.matches.findIndex(m => m.id == id);

        if (findIndex == -1) 
            throw new NotFoundException(`The match with the ID ${id} is not found`);

        const old: Match = this.matches[findIndex];

        this.matches[findIndex] = {
            ...old,
            ...payload,
        };

        return this.matches[findIndex];
    }

}
