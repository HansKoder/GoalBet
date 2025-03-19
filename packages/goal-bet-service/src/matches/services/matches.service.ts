import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { CreateMatchDto } from 'src/matches/dtos/CreateMatch.dto';
import { Match } from 'src/matches/entities/Match.entity';
import { updateMatchDto } from '../dtos/UpdateMatch.dto';

import { ConfigType } from '@nestjs/config';
import config from '../../config';

@Injectable()
export class MatchesService {

    constructor(@Inject(config.KEY) private configService: ConfigType<typeof config>) {}

    private id: number = -1;

    private matches: Match[] = [];

    findAll (): Match[] {
        const apiKey = this.configService.API_KEY; 
        const databaseName = this.configService.DATABASE.DATABASE_NAME;
        console.log(`Env ${process.env.NODE_ENV}`);
        console.log(`[INFO] API KEY ${apiKey} - DATABASE NAME ${databaseName}`);
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
