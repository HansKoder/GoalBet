import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/CreateUser.dto';
import { User } from 'src/entities/User';
import { UserRepository } from 'src/repositories/User.repository';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {

    private repository : UserRepository = UserRepository.getInstance();

    create (payload: CreateUserDto): User {
        const entity: User = {
            uuid: uuidv4(),
            ...payload
        }

        this.repository.save(entity);

        return entity;
    }

    findByUUID (uuid: string) {
        const user = this.repository.getUserPerUUID(uuid);

        if (!user) 
            throw new NotFoundException(`The user with the UUID ${uuid} is not found`)

        return user;
    }
}
