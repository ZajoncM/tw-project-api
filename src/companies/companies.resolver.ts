import { Args, Resolver, Query, Mutation, ID } from '@nestjs/graphql';
import { CompaniesService } from './companies.service';
import { CreateCompanyInput } from './dto/input/create-company';
import { UpdateCompanyInput } from './dto/input/update-company';
import { CompanyEntity } from './entities/company.entity';

@Resolver(() => CompanyEntity)
export class CompaniesResolver {
  constructor(private readonly companiesService: CompaniesService) {}

  @Query(() => CompanyEntity, { name: 'company' })
  getCompany(@Args({ name: 'id', type: () => ID }) id: number) {
    return this.companiesService.getCompany(id);
  }

  @Query(() => [CompanyEntity], { name: 'companies', nullable: true })
  getCompanies() {
    return this.companiesService.getCompanies();
  }

  @Mutation(() => CompanyEntity)
  createCompany(
    @Args('createCompanyData') createCompanyData: CreateCompanyInput,
  ) {
    return this.companiesService.createCompany(createCompanyData);
  }

  @Mutation(() => CompanyEntity)
  async updateCompany(
    @Args({ name: 'id', type: () => ID }) id: number,
    @Args('updateCompanyData') updateCompanyData: UpdateCompanyInput,
  ) {
    return await this.companiesService.updateCompany(id, updateCompanyData);
  }

  @Mutation(() => CompanyEntity)
  deleteCompany(@Args({ name: 'id', type: () => ID }) id: number) {
    return this.companiesService.deleteCompany(id);
  }
}
