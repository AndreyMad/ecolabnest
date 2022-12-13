import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';



@Entity()
export class Equipment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column({nullable:true})
  @IsString()
  article?: string;

  @Column({nullable:true})
  @IsNotEmpty()
  restourantId?: string;

}
