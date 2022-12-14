import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Restourant } from 'src/restourants/restourant.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(() => Restourant, (restourant) => restourant.equipments, { nullable: true })
  @JoinColumn()
  restourant: Restourant;

}
