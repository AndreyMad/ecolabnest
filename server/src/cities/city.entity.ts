import { IsNotEmpty, IsString } from 'class-validator';
import { Restourant } from 'src/restourants/restourant.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class City extends BaseEntity {
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
