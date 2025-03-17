import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BetController } from './controllers/bet/bet.controller';
import { BetService } from './services/bet/bet.service';
import { MatchesController } from './controllers/matches/matches.controller';
import { MatchesService } from './services/matches/matches.service';
import { UsersService } from './services/users/users.service';
import { UsersController } from './controllers/users/users.controller';
import { TransactionsService } from './services/transactions/transactions.service';
import { TransactionsController } from './controllers/transactions/transactions.controller';
import { LoginService } from './services/login/login.service';
import { LoginController } from './controllers/login/login.controller';

@Module({
  imports: [],
  controllers: [AppController, BetController, MatchesController, UsersController, TransactionsController, LoginController],
  providers: [AppService, BetService, MatchesService, UsersService, TransactionsService, LoginService],
})
export class AppModule {}
