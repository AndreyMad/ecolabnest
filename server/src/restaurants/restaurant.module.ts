import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restourant } from './restaurant.entity';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Restourant])],
  providers: [RestaurantService],
  exports: [RestaurantService],
  controllers: [RestaurantController],
})
export class RestaurantModule {}
