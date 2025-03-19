import { Module } from '@nestjs/common';
import { TransactionsController } from './controllers/transactions.controller';
import { TransactionsService } from './services/transactions.service';
import { UsersService } from 'src/users/services/users.service';

@Module({
    controllers: [TransactionsController],
    providers: [TransactionsService, UsersService]
})
export class TransactionsModule {}
