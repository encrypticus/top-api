import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModel } from './user.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getJWTConfig } from '../configs/jwt.config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
	controllers: [AuthController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: UserModel,
				schemaOptions: {
					collection: 'User'
				}
			}
		]),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJWTConfig
		}),
		PassportModule,
		ConfigModule
	],
	providers: [AuthService, JwtStrategy]
})
export class AuthModule {
}
