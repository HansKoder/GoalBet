import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from 'src/transactions/dtos/CreateTransaction.dto';
import { GetWalletDto } from 'src/transactions/dtos/GetWallet.dto';
import { Transaction } from 'src/transactions/entities/Transaction';

import { v4 as uuidv4 } from 'uuid';
import { UsersService } from '../../users/services/users.service';

@Injectable()
export class TransactionsService {

    constructor (private usersService: UsersService) {}

    private transactions : Transaction[] = [];

    private movement (payload: CreateTransactionDto, income: boolean) {
        const existUser = this.usersService.findByUUID(payload.userId);
        if (!existUser) 
            throw new NotFoundException(`The user with the UUID ${payload.userId} not found`);

        const entity : Transaction = {
            ...payload,
            uuid: uuidv4(),
            typeTransaction: income ? 'INCOME' : 'DEPOSIT',
        }

        this.transactions.push(entity);

        return entity;
    }

    income (payload: CreateTransactionDto) {
        return this.movement(payload, true);
    }

    deposit (payload: CreateTransactionDto) {
        return this.movement(payload, false);
    }

    getWalletByUserId (userId: string) : GetWalletDto {
        const wallet: number = this.transactions
            .filter(item => item.userId == userId)
            .reduce((total, tx) => total + (tx.typeTransaction == 'INCOME' ? tx.amount : -tx.amount), 0);

        return {
            userId,
            wallet,
        }
    }

}
