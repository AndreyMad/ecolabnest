import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { City } from './city.entity';
import { CityService } from './city.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Crud({
  model: {
    type: City,
  },
})
// @UseGuards(JwtAuthGuard)
@Controller('city')
export class CityController implements CrudController<City> {
  constructor(public service: CityService) {}
}
