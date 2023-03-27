import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Equipment } from 'src/equipment/equipment.entity';
import { Restourant } from 'src/restaurants/restaurant.entity';
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
  OneToOne,
} from 'typeorm';
import { BaseDto } from '../global-definitions/dto/base.dto';

export enum VISIT_TYPES {
  SERVICE_VISIT = 'SERVICE_VISIT',
  NEW_RESTAURANT = 'NEW_RESTAURANT',
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

  @ManyToOne(() => Restourant, (restourant) => restourant.visits, {onDelete: 'CASCADE',})
  restourant: Restourant;

  @ManyToMany(() => Equipment, (equipment) => equipment.visits)
  @JoinTable()
  equipmentsList?: Equipment[];

  @Column({ nullable: true, default: '' })
  engineerComment?: string;

  @Column({ nullable: true })
  managerComment?: string;
}
