import * as bcrypt from 'bcrypt';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseDto } from '../global-definitions/dto/base.dto';
import { Visit } from 'src/visits/visit.entity';

export const RAND_SALT = 12;

export enum USER_ROLE {
  ADMIN = 'ADMIN',
  INGENER = 'INGENER',
  RESTAURANT = 'RESTAURANT',
}

@Entity()
export class User extends BaseDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  phone: string;

  @Column({ nullable: true })
  @IsString()
  telegram: string;

  @Column({ unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  password: string;

  @Column()
  @IsEnum(USER_ROLE)
  role: string;

  @BeforeUpdate()
  @BeforeInsert()
  private async hashPassword(): Promise<void> {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, RAND_SALT);
    }
  }

  public async compareHash(passwordToCompare: string): Promise<boolean> {
    return bcrypt.compare(passwordToCompare, this.password);
  }

  @ManyToOne(()=>Visit,(visit)=>visit.user)
  visits?: Visit[];
}
