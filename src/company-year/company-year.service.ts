import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompaniesService } from 'src/companies/companies.service';
import { Repository } from 'typeorm';
import { CompanyYearCreateDto } from './dto/company-year.dto';
import { CompanyYearEntity } from './entities/company-year.entity';

@Injectable()
export class CompanyYearService {
  constructor(
    @InjectRepository(CompanyYearEntity)
    private readonly companyYearRepository: Repository<CompanyYearEntity>,
    private readonly companiesService: CompaniesService,
  ) {}

  async create(id: number, companyYear: CompanyYearCreateDto) {
    const company = await this.companiesService.getCompany(id);

    const createdCompanyYear = this.companyYearRepository.create({
      ...companyYear,
      company,
    });

    return createdCompanyYear.save();
  }
}
