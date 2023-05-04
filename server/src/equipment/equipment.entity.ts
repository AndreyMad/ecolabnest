import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Restourant } from 'src/restaurants/restaurant.entity';
import { Visit } from 'src/visits/visit.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseDto } from '../global-definitions/dto/base.dto';

export enum EQUIPMENT_TYPES {
  SOLID_SENSE = 'SOLID_SENSE',
  LIQUID_SENSE = 'LIQUID_SENSE',
  MATCH_UP = 'MATCH_UP',
  OTHER = 'OTHER',
};

@Entity()
export class Equipment extends BaseDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  article?: string;

  @ManyToOne(() => Restourant, (restourant) => restourant.equipments, {
    nullable: true,
  })
  @IsOptional()
  restourant?: Restourant;

  @ManyToMany(() => Visit, (visit) => visit.equipmentsList)
  visits?: Visit[];

  @Column()
  @IsEnum(EQUIPMENT_TYPES)
  @IsNotEmpty()
  equipmentType: string;

  @Column({ nullable: true })
  @IsOptional()
  imgUrl: string;

  imgFile: { file: string; name: string };
}
