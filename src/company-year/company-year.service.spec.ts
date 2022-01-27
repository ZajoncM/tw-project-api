import { Test, TestingModule } from '@nestjs/testing';
import { CompanyYearService } from './company-year.service';

describe('CompanyYearService', () => {
  let service: CompanyYearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyYearService],
    }).compile();

    service = module.get<CompanyYearService>(CompanyYearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
