import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Restourant } from './restaurant.entity';

@Injectable()
export class RestaurantService extends TypeOrmCrudService<Restourant> {
  constructor(
    @InjectRepository(Restourant)
    private readonly restourantRepository: Repository<Restourant>,
  ) {
    super(restourantRepository);
  }
}
