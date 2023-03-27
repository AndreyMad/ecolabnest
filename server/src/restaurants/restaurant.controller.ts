import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Restourant } from './restaurant.entity';
import { RestaurantService } from './restaurant.service';
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
@Controller('restaurants')
export class RestaurantController implements CrudController<Restourant> {
  constructor(public service: RestaurantService) {}
}
