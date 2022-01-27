import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional, IsPositive } from 'class-validator';

@ArgsType()
export class GetStateArgs {
  @Field()
  @IsPositive()
  @IsOptional()
  id: number;

  @Field()
  @IsPositive()
  @IsOptional()
  name: string;
}
