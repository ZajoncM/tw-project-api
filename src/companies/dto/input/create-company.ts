import { InputType, PickType } from '@nestjs/graphql';
import { CompanyEntity } from 'src/companies/entities/company.entity';

@InputType()
export class CreateCompanyInput extends PickType(CompanyEntity, [
  'companyName',
  'firstName',
  'lastName',
  'streetAddress',
  'houseNumber',
  'city',
  'postalCode',
  'state',
]) {}
