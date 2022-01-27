import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsOptional, IsPositive } from 'class-validator';
import { CreateStateInput } from './create-state';

@InputType()
export class UpdateStateInput extends PartialType(CreateStateInput, InputType) {
  @Field()
  @IsPositive()
  @IsOptional()
  id: number;
}
