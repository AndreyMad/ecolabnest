import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';


export enum RestourantType {
  MACDONALDS= 'MACDONALDS',
  KFC= 'KFC',
  HASBURGER= 'HASBURGER',
  PUZATA_HATA= 'PUZATA_HATA',
  SUSHI_MASTER= 'SUSHI_MASTER',
  OTHER= 'OTHER',

}
@Entity()
export class Restourant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  @IsString()
  name?: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  adress: string;

  @Column({nullable:true})
  @IsString()
  latitude?: string;
  
  @Column({nullable:true})
  @IsString()
  longtitude?: string;

  @Column()
  @IsEnum(RestourantType)
  @IsNotEmpty()
  type: string;

  //city many-to-one
  //items one-to-many

}
