import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './user.entity';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Crud({
  model: {
    type: User,
  },
})
// @UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
