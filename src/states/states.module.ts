import { Module } from '@nestjs/common';
import { StatesService } from './states.service';

import { StateEntity } from './entities/state.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StateEntity])],
  providers: [StatesService],
  exports: [StatesService],
})
export class StatesModule {}
