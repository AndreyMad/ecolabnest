import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { Visit } from './visit.entity';
import { VisitService } from './visit.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Crud({
  model: {
    type: Visit,
  },
  query: {
    join: {
      restourant: {
        eager: true,
      },
      user: {
        eager: true,
      },
      equipmentsList: {
        eager: true,
      },
    },
  },
})
// @UseGuards(JwtAuthGuard)
@Controller('visits')
export class VisitController implements CrudController<Visit> {
  constructor(public service: VisitService) {}
  
  // @Override('createOneBase')
  // async createOneBase(
  //   @ParsedRequest() req: CrudRequest,
  //   @ParsedBody() body: Visit,
  // ) {
  //   console.log(body);
    
  //   return this.service.createOne(req, body);
  // }
}
