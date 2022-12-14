import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Equipment } from './equipment.entity';
import { EquipmentService } from './equipment.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Crud({
  model: {
    type: Equipment,
  },
})
// @UseGuards(JwtAuthGuard)
@Controller('Equipment')
export class EquipmentController implements CrudController<Equipment> {
  constructor(public service: EquipmentService) {}
}
