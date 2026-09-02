import type { Technology } from './tech';

export interface Project {
	id: string;
	name: string;
	description: string;
	longDescription?: string;

	category: "professional" | "educational" | "hobby" | "open-source";
	role?: "solo-developer" | "contributor";
	type: "web" | "library" | "game" | "desktop app" | "mobile app" | "cli" | "api" | "other";
	status: "in-development" | "completed" | "on-hold" | "abandoned" | "maintained";
	technologies: Technology[];

	links: {
		github?: string;
		otherRepo?: string;
		live?: string;
		demo?: {
			url: string;
			type: "video" | "image" | "link";
		};
	};
	imageUrl?: string;
	isPrivate: boolean;

	yearStarted: number;
	yearCompleted?: number;
	featured?: boolean;
}