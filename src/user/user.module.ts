import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './schema/user.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
   TypeOrmModule.forFeature([Users]),
   JwtModule.register({
    secret:'secreteKey',
    signOptions:{expiresIn:'1h'}

    })
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}


