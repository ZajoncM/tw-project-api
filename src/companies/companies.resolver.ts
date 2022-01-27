import { Args, Resolver, Query, Mutation, ID } from '@nestjs/graphql';
import { CompaniesService } from './companies.service';
import { GetCompanyArgs } from './dto/args/get-company.args';
import { GetCompaniesArgs } from './dto/args/get-companies.args';
import { CreateCompanyInput } from './dto/input/create-company';
import { DeleteCompanyInput } from './dto/input/delete-company';
import { UpdateCompanyInput } from './dto/input/update-company';
import { CompanyEntity } from './entities/company.entity';

@Resolver(() => CompanyEntity)
export class CompaniesResolver {
  constructor(private readonly companiesService: CompaniesService) {}

  @Query(() => CompanyEntity, { name: 'company', nullable: true })
  getCompany(@Args() getCompanyArgs: GetCompanyArgs) {
    return this.companiesService.getCompany(getCompanyArgs);
  }

  @Query(() => [CompanyEntity], { name: 'companies', nullable: true })
  getCompanies(@Args() getCompaniesArgs: GetCompaniesArgs) {
    return this.companiesService.getCompanies(getCompaniesArgs);
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
  deleteCompany(
    @Args('deleteCompanyData') deleteCompanyData: DeleteCompanyInput,
  ) {
    return this.companiesService.deleteCompany(deleteCompanyData);
  }
}
