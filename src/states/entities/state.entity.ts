import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CompanyEntity } from 'src/companies/entities/company.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType('state')
@Entity('state')
export class StateEntity {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => CompanyEntity, (company) => company.state, {
    primary: true,
  })
  companies: CompanyEntity[];

  @Field()
  @Column({ unique: true })
  name: string;
}
