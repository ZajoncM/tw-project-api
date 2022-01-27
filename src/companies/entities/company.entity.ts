import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsOptional, ValidateNested } from 'class-validator';
import { CompanyYearEntity } from 'src/company-year/entities/company-year.entity';
import { StateEntity } from 'src/states/entities/state.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity('company')
export class CompanyEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  companyName: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  streetAddress: string;

  @Field()
  @Column()
  houseNumber: number;

  @Field()
  @Column()
  city: string;

  @Field()
  @Column()
  postalCode: string;

  @Field(() => StateEntity)
  @ValidateNested()
  @ManyToOne((type) => StateEntity, (state) => state.companies, {
    cascade: true,
  })
  state: StateEntity;

  @OneToMany(() => CompanyYearEntity, (companyYear) => companyYear.company)
  years: CompanyYearEntity[];
}
