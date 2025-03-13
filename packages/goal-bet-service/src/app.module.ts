import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BetController } from './controllers/bet/bet.controller';
import { BetService } from './services/bet/bet.service';
import { MatchesController } from './controllers/matches/matches.controller';
import { MatchesService } from './services/matches/matches.service';

@Module({
  imports: [],
  controllers: [AppController, BetController, MatchesController],
  providers: [AppService, BetService, MatchesService],
})
export class AppModule {}
