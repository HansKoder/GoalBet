import { Module } from '@nestjs/common';
import { BetController } from './controllers/bet.controller';
import { BetService } from './services/bet.service';

@Module({
    controllers: [BetController],
    providers: [BetService]
})
export class BetModule {}
