import * as dotenv from 'dotenv';
dotenv.config();

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmMongodbConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    url: 'mongodb://localhost/school',
    synchronize: true,
    useUnifiedTopology: true,
    entities: [__dirname + '/entities/**.entity{.ts,.js}'],
};
