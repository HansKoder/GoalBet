import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { CreateUserDto } from '../dtos/CreateUser.dto';

@Controller('api/v1/users')
export class UsersController {

    constructor (private usersService: UsersService) {}

    @Post("create")
    create (@Body() payload: CreateUserDto) {
        return this.usersService.create(payload);
    }

    @Get("find-uuid/:uuid")
    findByUUID (@Param("uuid") uuid: string) {
        return this.usersService.findByUUID(uuid);
    }

}
