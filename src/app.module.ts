import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { CompaniesModule } from './companies/companies.module';
import { DatabaseModule } from './database/database.module';
import { StatesModule } from './states/states.module';
import { CompanyYearModule } from './company-year/company-year.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    ConfigModule.forRoot({ envFilePath: ['.env'] }),
    DatabaseModule,
    CompaniesModule,
    StatesModule,
    CompanyYearModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
