import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Restourant } from 'src/restourants/restourant.entity';
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
}
