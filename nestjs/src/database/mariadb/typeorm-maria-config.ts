import * as dotenv from 'dotenv';
dotenv.config();

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmMariadbConfig: TypeOrmModuleOptions = {
    type: 'mariadb',
    host: process.env.DB_MARIA_HOST,
    port: parseInt(process.env.DB_MARIA_PORT),
    username: process.env.DB_MARIA_USERNAME,
    password: process.env.DB_MARIA_PASSWORD,
    database: process.env.DB_MARIA_DATABASE,
    entities: [__dirname + './entities/**/*.entity{.ts,.js}'],
};
