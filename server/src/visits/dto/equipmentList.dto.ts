import {
    IsOptional,
    IsString,
  } from 'class-validator';
import { Equipment } from 'src/equipment/equipment.entity';
import { BaseDto } from 'src/global-definitions/dto/base.dto';
import { JoinTable, OneToMany } from 'typeorm';
    
  export class EquipmentListDto extends BaseDto {
    
    // @OneToMany(() => Equipment, (equipment) => equipment.visits)
    // @JoinTable()
    // equipment?: Equipment;

    // @IsString()
    // @IsOptional()
    // comment: string;
  
  }
  