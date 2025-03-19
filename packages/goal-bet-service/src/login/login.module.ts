import { Module } from '@nestjs/common';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';

import { UsersModule } from 'src/users/users.module';
import { TransactionsModule } from 'src/transactions/transactions.module';

@Module({
    imports: [UsersModule, TransactionsModule],
    controllers: [LoginController],
    providers: [LoginService]
})
export class LoginModule {}
