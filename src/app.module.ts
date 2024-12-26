import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user/schema/user.schema';
import { AuthModule } from './auth/auth.module';
import { LocalStrategy } from './strategies/Local.strategy';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.host,
      port: 5432,
      username: 'postgres',
      password: '123',
      database: process.env.db,
      entities: [Users],
      synchronize: true,
    }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
