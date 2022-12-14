import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { CityModule } from './cities/city.module';
import { VisitModule } from './visits/visit.module';
import { RestourantModule } from './restourants/restourant.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      charset: 'utf8mb4',
      synchronize: false,
      dropSchema: process.env.NODE_ENV === 'test',
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      migrationsRun: process.env.NODE_ENV === 'test',
      logging: ['error'],
      logger: 'file',
      migrations: [`${__dirname}/db/migrations/**/*{.ts,.js}`],
      cli: {
        migrationsDir: 'src/db/migrations',
      },
      extra: {
        connectionLimit: 50,
      },
      host: process.env.MYSQL_HOST,
      port: +process.env.MYSQL_PORT,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', process.env.UPLOADS_FOLDER),
      serveRoot: '/uploads',
    }),
    AuthModule,
    UserModule,
    CityModule,
    VisitModule,
    RestourantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
