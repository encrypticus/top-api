import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

class HhData {
	@prop()
	count: number;
	@prop()
	juniorSalary: number;
	@prop()
	middleSalary: number;
	@prop()
	seniorSalary: number;
}

export class Advantage {
	@prop()
	title: string;
	@prop()
	description: string;
}

export interface TopPageModel extends Base {
}

export class TopPageModel extends TimeStamps {
	@prop({ enum: TopLevelCategory })
	firstCategory: TopLevelCategory;

	@prop()
	secondCategory: string;

	@prop({ unique: true })
	alias: string;

	@prop()
	title: string;

	@prop()
	category: string;

	@prop({ type: () => HhData })
	hh?: HhData;

	@prop({ type: () => [Advantage]})
	advantages: Advantage[];

	@prop()
	seoText: string;

	@prop({ type: () => [String]})
	tags: string[];

	@prop()
	tagsTitle: string;
}
