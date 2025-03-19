import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BetModule } from './bet/bet.module';
import { MatchesModule } from './matches/matches.module';
import { TransactionsModule } from './transactions/transactions.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';

import { ConfigModule } from '@nestjs/config'
import { environments } from './environment';

import config from './config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV || '.env'],
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASS: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      })
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
