import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { City } from 'src/cities/city.entity';
import { Equipment } from 'src/equipment/equipment.entity';
import { Visit } from 'src/visits/visit.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseDto } from '../global-definitions/dto/base.dto';

export enum RestourantType {
  MCDONALDS = 'MCDONALDS',
  KFC = 'KFC',
  HESBURGER = 'HESBURGER',
  SLOUFUDS = 'SLOUFUDS',
  CINNABONE = 'CINNABONE',
  OTHER = 'OTHER',
}
@Entity()
export class Restourant extends BaseDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  @IsString()
  name: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  address: string;

  @Column({ nullable: true, default: '' })
  @IsOptional()
  @IsString()
  latitude?: string;

  @Column({ nullable: true, default: '' })
  @IsOptional()
  @IsString()
  longtitude?: string;

  @Column()
  @IsEnum(RestourantType)
  @IsNotEmpty()
  type: string;

  @ManyToOne(() => City, (city) => city.restourants, { nullable: true })
  city: City;

  @OneToMany(() => Equipment, (equipment) => equipment.restourant, {
    nullable: true,
  })
  @JoinColumn()
  equipments: Equipment[];

  @OneToMany(() => Visit, (visit) => visit.restourant, { nullable: true })
  @JoinColumn()
  visits: Visit[];
}
