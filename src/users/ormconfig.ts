import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: '14th-project',
  host: 'localhost',
  username: 'postgres',
  password: '7976',
  port: 5432,
  entities: ['dist/src/**/*.entity{.ts,.js}'],
  synchronize: true,
};
export default config;
