import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StateEntity } from './entities/state.entity';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>,
  ) {}

  public async preloadState(state: StateEntity) {
    const foundState = await this.stateRepository.findOne({ name: state.name });

    if (foundState) {
      return foundState;
    }

    return await this.stateRepository.create({ name: state.name });
  }
}
