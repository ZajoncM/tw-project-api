import { ObjectType, InputType, Field } from '@nestjs/graphql';
import { CompanyEntity } from 'src/companies/entities/company.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType('CompanyYear')
@Entity('company-year')
export class CompanyYearEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  salesQuantity: number;

  @Field()
  @Column()
  year: string;

  @Field(() => CompanyEntity)
  @ManyToOne(() => CompanyEntity, (company) => company.years)
  company: CompanyEntity;
}
