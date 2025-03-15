import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateTransactionDto } from 'src/dtos/CreateTransaction.dto';
import { TransactionsService } from 'src/services/transactions/transactions.service';

@Controller('api/v1/transactions')
export class TransactionsController {

    constructor(private transactionsService: TransactionsService) {}

    @Post("income")
    @HttpCode(HttpStatus.OK)
    income (@Body() createTransaction: CreateTransactionDto) {
        return this.transactionsService.income(createTransaction);
    }

    @Post("deposit")
    @HttpCode(HttpStatus.OK)
    deposit (@Body() createTransaction: CreateTransactionDto) {
        return this.transactionsService.deposit(createTransaction);
    }

    @Get("wallet/:userId")
    wallet (@Param("userId") userId: string) {
        return this.transactionsService.getWalletByUserId(userId);
    }

}
