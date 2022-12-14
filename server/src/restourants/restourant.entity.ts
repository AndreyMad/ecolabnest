import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { City } from 'src/cities/city.entity';
import { Equipment } from 'src/equipment/equipment.entity';
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
  MACDONALDS = 'MACDONALDS',
  KFC = 'KFC',
  HASBURGER = 'HASBURGER',
  PUZATA_HATA = 'PUZATA_HATA',
  SUSHI_MASTER = 'SUSHI_MASTER',
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

  @Column({ nullable: true, default:'' })
  @IsOptional()
  @IsString()
  latitude?: string;

  @Column({ nullable: true, default:'' })
  @IsOptional()
  @IsString()
  longtitude?: string;

  @Column()
  @IsEnum(RestourantType)
  @IsNotEmpty()
  type: string;

  @ManyToOne(() => City, (city) => city.restourants,{ nullable: true })
  city: City;

  //items one-to-many
  @OneToMany(() => Equipment, (equipment) => equipment.restourant, { nullable: true })
  @JoinColumn()
  equipments: Equipment[];

  @Column()
  @IsOptional()
  @IsBoolean()
  isVisited?: boolean;

}
