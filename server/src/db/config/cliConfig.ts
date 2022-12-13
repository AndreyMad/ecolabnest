import { ConnectionOptions } from 'typeorm';
import { join } from 'path';

const isTest = process.env.NODE_ENV === 'test';
// eslint-disable-next-line
require('dotenv').config({ path: join(__dirname, '..', '..', '..', isTest ? 'example.env' : '.env') });

const mysqlConfig: ConnectionOptions = {
  type: 'mysql',
  host: isTest ? 'localhost' : process.env.MYSQL_HOST,
  port: isTest ? 3360 : +process.env.MYSQL_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [`${__dirname}/../../**/*.entity{.ts,.js}`],
  synchronize: false,
  migrationsRun: false,
  logging: true,
  logger: 'file',
  migrations: [`${__dirname}/../migrations/**/*{.ts,.js}`],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};

export = mysqlConfig;
