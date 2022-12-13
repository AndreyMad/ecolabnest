import { SetMetadata } from '@nestjs/common';
export const SkipAuthGuard = () => SetMetadata('isPublic', true);
