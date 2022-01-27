import { Test, TestingModule } from '@nestjs/testing';
import { CompanyYearResolver } from './company-year.resolver';

describe('CompanyYearResolver', () => {
  let resolver: CompanyYearResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyYearResolver],
    }).compile();

    resolver = module.get<CompanyYearResolver>(CompanyYearResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
