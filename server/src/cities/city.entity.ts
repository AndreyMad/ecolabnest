import { IsNotEmpty, IsString } from 'class-validator';
import { Restourant } from 'src/restaurants/restaurant.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseDto } from '../global-definitions/dto/base.dto';

@Entity()
export class City extends BaseDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  region: string;

  @OneToMany(() => Restourant, (restourant) => restourant.city)
  restourants: Restourant[];  
}
