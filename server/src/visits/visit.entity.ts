import { IsNotEmpty, IsString } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseDto } from '../global-definitions/dto/base.dto';

export enum VISIT_TYPES {
  SERVICE= "SERVICE",
  NEW_RESTOURANT = "NEW_RESTOURANT",
  REQUEST_VISIT = "REQUEST_VISIT"
}

@Entity()
export class Visit extends BaseDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  //restourant many-to-one

}
