import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Restourant } from './restourant.entity';
import { RestourantService } from './restourant.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Crud({
  model: {
    type: Restourant,
  },
  query: {
    join: {
      city: {
        eager: true,
      },
      equipments:{
        eager:true,
      },
      visits:{
        eager:true,
      },
    },
  },
})
@UseGuards(JwtAuthGuard)
@Controller('restourants')
export class RestourantController implements CrudController<Restourant> {
  constructor(public service: RestourantService) {}
}
