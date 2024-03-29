import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { City } from './city.entity';

@Injectable()
export class CityService extends TypeOrmCrudService<City> {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {
    super(cityRepository);
  }
}
