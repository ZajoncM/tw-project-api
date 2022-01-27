import { Query, Resolver } from '@nestjs/graphql';
import { StateEntity } from './entities/state.entity';

@Resolver()
export class StatesResolver {
  @Query(() => StateEntity, { name: 'state', nullable: true })
  getState() {
    return { id: 1, name: 'test' };
  }
}
