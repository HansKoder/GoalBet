import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/CreateUser.dto';
import { User } from 'src/entities/User';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {

    private users : User[] = []

    create (payload: CreateUserDto): User {
        const entity: User = {
            uuid: uuidv4(),
            ...payload
        }

        this.users.push(entity);

        return entity;
    }

    findByUUID (uuid: string) {
        const find = this.users.find(item => item.uuid == uuid);

        if (!find) 
            throw new NotFoundException(`The user with the UUID ${uuid} is not found`)

        return find;
    }
}
