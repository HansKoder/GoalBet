import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BetController } from './controllers/bet/bet.controller';
import { BetService } from './services/bet/bet.service';
import { MatchesController } from './controllers/matches/matches.controller';
import { MatchesService } from './services/matches/matches.service';
import { UsersService } from './services/users/users.service';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, BetController, MatchesController, UsersController],
  providers: [AppService, BetService, MatchesService, UsersService],
})
export class AppModule {}
