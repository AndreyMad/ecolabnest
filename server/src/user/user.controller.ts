import {
  Controller, UseGuards,
} from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';

import { User } from './user.entity';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CurrentUser } from './decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Crud({
  model: {
    type: User,
  },
  dto: {
    update: UpdateUserDto,
  },
  query: {
    exclude: ['password'],
    join: {
      visits: {
        eager: true,
      }
    },
  },
})

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}

  @Override('createOneBase')
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() body: UpdateUserDto,
  ) {
    return this.service.createOne(req, body);
  }

  @Override('updateOneBase')
  async updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() body: UpdateUserDto,
  ) {
    return this.service.updateOne(req, body);
  }

  @Override('deleteOneBase')
  async deleteOne(
    @ParsedRequest() req: CrudRequest,
  ) {
    return this.service.deleteOne(req);
  }
}
