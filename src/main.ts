import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('api');

	const options: SwaggerDocumentOptions =  {
		operationIdFactory: (
			controllerKey: string,
			methodKey: string
		) => methodKey
	};

	const config = new DocumentBuilder()
		.setTitle('Top api example')
		.setDescription('The Top API description')
		.setVersion('1.0')
		.addTag('top-api')
		.build();
	const document = SwaggerModule.createDocument(app, config, options);
	SwaggerModule.setup('api', app, document);

	await app.listen(3000);
}

bootstrap();
