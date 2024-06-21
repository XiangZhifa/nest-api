import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@src/user/entities/user.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'username',
    password: 'password',
    database: 'nest-api',
    entities: [User],
    // synchronize 生产环境严禁为true
    synchronize: true,
    timezone: '+08:00'
  })],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
