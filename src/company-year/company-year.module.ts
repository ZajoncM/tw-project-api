import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyYearResolver } from './company-year.resolver';
import { CompanyYearService } from './company-year.service';
import { CompanyYearEntity } from './entities/company-year.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyYearEntity])],
  providers: [CompanyYearResolver, CompanyYearService],
})
export class CompanyYearModule {}
