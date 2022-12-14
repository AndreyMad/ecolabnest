import { FindOneOptions } from 'typeorm';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../user.entity';

export type CurrentUserResult = User;

export const CurrentUser = createParamDecorator(
  async (ctx: ExecutionContext): Promise<CurrentUserResult> => {
    console.log('ctx', ctx);
    
    // const { user } = ctx.switchToHttp().getRequest();

    // if (!user) {
    //   return null;
    // }
    return new Promise(()=>'sss')
    // return user as CurrentUserResult;
  },
);
