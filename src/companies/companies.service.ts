import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetCompanyArgs } from './dto/args/get-company.args';
import { GetCompaniesArgs } from './dto/args/get-companies.args';
import { CreateCompanyInput } from './dto/input/create-company';
import { DeleteCompanyInput } from './dto/input/delete-company';
import { UpdateCompanyInput } from './dto/input/update-company';
import { CompanyEntity } from './entities/company.entity';
import { StatesService } from 'src/states/states.service';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
    private readonly statesService: StatesService,
  ) {}

  public async createCompany(createCompanyData: CreateCompanyInput) {
    const state = await this.statesService.preloadState(
      createCompanyData.state,
    );

    const company = await this.companyRepository.create({
      ...createCompanyData,
      state,
    });

    return company.save();
  }

  public async updateCompany(
    id: number,
    updateCompanyData: UpdateCompanyInput,
  ) {
    const company = await this.companyRepository.preload({
      // ...updateCompanyData,
      id,
    });

    if (!company) {
      throw new NotFoundException('company not found');
    }

    return company.save();
  }

  public async getCompany(getCompanyArgs: GetCompanyArgs) {
    const company = await this.companyRepository.findOne({ ...getCompanyArgs });

    return company;
  }

  public async getCompanies(getCompaniesArgs: GetCompaniesArgs) {
    const companies = await Promise.all(
      getCompaniesArgs.companyNames.map((companyName) =>
        this.companyRepository.findOne({ companyName }),
      ),
    );

    return companies;
  }

  public async deleteCompany(deleteCompanyData: DeleteCompanyInput) {
    const company = await this.getCompany(deleteCompanyData);

    return this.companyRepository.remove(company);
  }
}
