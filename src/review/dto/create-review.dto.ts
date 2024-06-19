import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
	@IsString()
	name: string;

	@IsString()
	title: string;

	@IsString()
	description: string;

	@Min(1, { message: 'Рейтинг не может быть менее одного' })
	@Max(5, { message: 'Рейтинг не может быть более 5' })
	@IsNumber({}, { message: 'Значение должно быть числом' })
	rating: number;

	@IsString()
	productId: string;
}