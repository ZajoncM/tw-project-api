import { Field, InputType } from '@nestjs/graphql';
import { IsPositive } from 'class-validator';

@InputType()
export class DeleteStateInput {
  @Field()
  @IsPositive()
  id: number;
}
