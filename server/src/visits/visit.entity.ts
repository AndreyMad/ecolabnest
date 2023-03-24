import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Equipment } from 'src/equipment/equipment.entity';
import { Restourant } from 'src/restourants/restourant.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseDto } from '../global-definitions/dto/base.dto';
import { EquipmentListDto } from './dto/equipmentList.dto';

export enum VISIT_TYPES {
  SERVICE = 'SERVICE',
  NEW_RESTOURANT = 'NEW_RESTOURANT',
  REQUEST_VISIT = 'REQUEST_VISIT',
}

@Entity()
export class Visit extends BaseDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @OneToMany(() => User, (user) => user.visits)
  @JoinTable()
  user?: User;

  @Column()
  @IsEnum(VISIT_TYPES)
  @IsNotEmpty()
  visitType: string;

  @ManyToOne(() => Restourant, (restourant) => restourant.visits)
  restourant: Restourant;

  @ManyToMany(() => Equipment, (equipment) => equipment.visits)
  @JoinTable()
  equipmentsList?: Equipment[];

  @Column({ nullable: true })
  @IsString()
  engineerComment?: string;

  @Column({ nullable: true })
  @IsString()
  managerComment?: string;
}
