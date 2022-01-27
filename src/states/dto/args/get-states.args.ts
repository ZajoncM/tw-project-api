import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

@ArgsType()
export class GetStatesArgs {
  @Field(() => [String])
  @IsArray()
  names: string[];
}
