import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateStateInput {
  @Field()
  @IsString()
  name: string;
}
