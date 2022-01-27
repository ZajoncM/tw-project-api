import { Field, InputType } from '@nestjs/graphql';
import { IsPositive } from 'class-validator';

@InputType()
export class DeleteCompanyInput {
  @Field()
  @IsPositive()
  id: number;
}
