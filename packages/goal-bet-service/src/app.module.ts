import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BetModule } from './bet/bet.module';
import { MatchesModule } from './matches/matches.module';
import { TransactionsModule } from './transactions/transactions.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';

import { ConfigModule } from '@nestjs/config'
import { environment } from './environment';

import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment.PROD || '.env',
      isGlobal: true,
      load: [config]
    }),
    BetModule, 
    MatchesModule, 
    TransactionsModule, 
    UsersModule, 
    LoginModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
