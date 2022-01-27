import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyInput } from './dto/input/create-company';

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
    await this.companyRepository.update({ id }, { ...updateCompanyData });

    return this.getCompany(id);
  }

  public async getCompany(id: number) {
    const company = await this.companyRepository.findOne(
      { id },
      { relations: ['state', 'years'] },
    );

    return company;
  }

  public async getCompanies() {
    const companies = this.companyRepository.find();

    return companies;
  }

  public async deleteCompany(id: number) {
    const company = await this.getCompany(id);

    return await this.companyRepository.remove(company);
  }
}
