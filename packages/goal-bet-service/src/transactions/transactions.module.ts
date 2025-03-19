import { Module } from '@nestjs/common';
import { TransactionsController } from './controllers/transactions.controller';
import { TransactionsService } from './services/transactions.service';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [UsersModule],
    controllers: [TransactionsController],
    providers: [TransactionsService],
    exports: [TransactionsService]
})
export class TransactionsModule {}
