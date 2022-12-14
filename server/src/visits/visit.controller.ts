import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Visit } from './visit.entity';
import { VisitService } from './visit.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Crud({
  model: {
    type: Visit,
  },
})
// @UseGuards(JwtAuthGuard)
@Controller('visits')
export class VisitController implements CrudController<Visit> {
  constructor(public service: VisitService) {}
}
