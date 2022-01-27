import { InputType, PartialType } from '@nestjs/graphql';
import { CompanyEntity } from 'src/companies/entities/company.entity';

@InputType()
export class UpdateCompanyInput extends PartialType(CompanyEntity) {}
