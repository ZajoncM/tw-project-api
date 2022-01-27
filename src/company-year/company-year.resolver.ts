import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { CompanyYearService } from './company-year.service';
import { CompanyYearCreateDto } from './dto/company-year.dto';
import { CompanyYearEntity } from './entities/company-year.entity';

@Resolver()
export class CompanyYearResolver {
  constructor(private readonly companyYearService: CompanyYearService) {}

  @Mutation(() => CompanyYearEntity)
  createCompanyYear(
    @Args({ name: 'id', type: () => ID }) id: number,
    @Args('createCompanyYearData') createCompanyYearData: CompanyYearCreateDto,
  ) {
    return this.companyYearService.create(id, createCompanyYearData);
  }
}
