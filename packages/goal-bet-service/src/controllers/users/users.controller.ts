import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/CreateUser.dto';
import { UsersService } from 'src/services/users/users.service';

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
