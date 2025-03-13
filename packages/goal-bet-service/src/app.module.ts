import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BetController } from './controllers/bet/bet.controller';
import { BetService } from './services/bet/bet.service';

@Module({
  imports: [],
  controllers: [AppController, BetController],
  providers: [AppService, BetService],
})
export class AppModule {}
