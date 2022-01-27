import { Module } from '@nestjs/common';
import { StatesService } from './states.service';
import { StatesResolver } from './states.resolver';
import { StateEntity } from './entities/state.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StateEntity])],
  providers: [StatesService, StatesResolver],
  exports: [StatesService],
})
export class StatesModule {}
