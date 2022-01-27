import { InputType, PickType } from '@nestjs/graphql';
import { CompanyYearEntity } from '../entities/company-year.entity';

@InputType()
export class CompanyYearCreateDto extends PickType(CompanyYearEntity, [
  'salesQuantity',
  'year',
]) {}
