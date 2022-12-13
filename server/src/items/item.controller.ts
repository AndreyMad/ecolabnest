import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Item } from './item.entity';
import { ItemService } from './item.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Crud({
  model: {
    type: Item,
  },
})
// @UseGuards(JwtAuthGuard)
@Controller('item')
export class ItemController implements CrudController<Item> {
  constructor(public service: ItemService) {}
}
