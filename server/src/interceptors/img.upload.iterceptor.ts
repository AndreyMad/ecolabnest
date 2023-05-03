import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import * as fs from 'fs';
  import { join } from 'path';
  import { Observable } from 'rxjs';
  import { validateBase64Image } from '../utils/validateImage';
  
  @Injectable()
  export class FileUploadInterceptor implements NestInterceptor {
    private publicPath = '/uploads';
  
    private uploadFolder = join(
      __dirname,
      '..',
      '..',
      process.env.UPLOADS_FOLDER,
    );
  
    async intercept(
      context: ExecutionContext,
      next: CallHandler,
    ): Promise<Observable<string>> {
      const { body } = context.switchToHttp().getRequest();
  
      if (body.imgFile) {
        const randomStr = Math.random().toString(36).substring(2, 8);
        const fileName = `${randomStr}.${body.imgFile.name}`;
        await this.saveFileTo(body.imgFile.file, fileName);
        body.imgUrl = `${this.publicPath}/${fileName}`;
      }
  
      return next.handle();
    }
  
    async saveFileTo(base64FileData: string, name: string): Promise<boolean> {
      const base64Data = await validateBase64Image(base64FileData);
  
      await fs.promises.writeFile(
        join(this.uploadFolder, name),
        base64Data,
        'base64',
      );
      return true;
    }
  }
  