export class Transaction {
    uuid: string;
    userId: string;
    amount: number;
    description: string;
    typeTransaction: 'INCOME' | 'DEPOSIT';
}