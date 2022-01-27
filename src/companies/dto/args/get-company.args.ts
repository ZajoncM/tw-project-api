import { ArgsType, Field } from '@nestjs/graphql';
import { IsPositive } from 'class-validator';

@ArgsType()
export class GetCompanyArgs {
  @Field()
  @IsPositive()
  id: number;
}
