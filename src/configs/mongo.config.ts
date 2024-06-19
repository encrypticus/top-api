import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
	return {
		uri: getMongoString(configService),
		...getMongoOptions()
	};
};

const getMongoString = (configService: ConfigService): string => {
	return 'mongodb://' +
		configService.get('MONGO_LOGIN') +
		':' +
		configService.get('MONGO_PASSWORD') +
		'@' +
		configService.get('MONGO_HOST') +
		':' +
		configService.get('MONGO_PORT') +
		'/' +
		configService.get('MONGO_AUTHDATABASE');
};

const getMongoOptions = () => {
	return {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// serverSelectionTimeoutMS: 30000, // Increased timeout value
		// maxPoolSize: 50,
		// wtimeoutMS: 25000,
		// socketTimeoutMS: 60000,
	};
};

