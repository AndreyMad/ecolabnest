import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restourant } from './restourant.entity';
import { RestourantService } from './restourant.service';
import { RestourantController } from './restourant.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Restourant])],
  providers: [RestourantService],
  exports: [RestourantService],
  controllers: [RestourantController],
})
export class RestourantModule {}
