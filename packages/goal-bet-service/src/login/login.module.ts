import { Module } from '@nestjs/common';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { TransactionsService } from 'src/transactions/services/transactions.service';
import { UsersService } from 'src/users/services/users.service';

@Module({
    controllers: [LoginController],
    providers: [LoginService, TransactionsService, UsersService]
})
export class LoginModule {}
