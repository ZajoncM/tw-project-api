import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetStateArgs } from './dto/args/get-state.args';
import { GetStatesArgs } from './dto/args/get-states.args';
import { CreateStateInput } from './dto/input/create-state';
import { DeleteStateInput } from './dto/input/delete-state';
import { UpdateStateInput } from './dto/input/update-state';
import { StateEntity } from './entities/state.entity';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>,
  ) {}

  public async createState(createStateData: CreateStateInput) {
    const state = await this.stateRepository.create({
      ...createStateData,
    });

    return this.stateRepository.save(state);
  }

  public async updateState(updateStateData: UpdateStateInput) {
    const state = await this.stateRepository.preload({
      ...updateStateData,
    });

    return this.stateRepository.save(state);
  }

  public async getState(getStateArgs: GetStateArgs) {
    const state = await this.stateRepository.findOne({ ...getStateArgs });

    return state;
  }

  public async getStates(getStatesArgs: GetStatesArgs) {
    const states = await Promise.all(
      getStatesArgs.names.map((name) => this.stateRepository.findOne({ name })),
    );

    return states;
  }

  public async preloadState(state: StateEntity) {
    const foundState = await this.stateRepository.findOne({ name: state.name });

    if (foundState) {
      return foundState;
    }

    return await this.stateRepository.create({ name: state.name });
  }
}
