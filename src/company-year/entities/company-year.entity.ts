import { CompanyEntity } from 'src/companies/entities/company.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompanyYearEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  salesQuantity: number;

  @Column()
  year: string;

  @ManyToOne(() => CompanyEntity, (company) => company.years)
  company: CompanyEntity;
}
