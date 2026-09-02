import type { Project } from "../types/project";
import { REACT, TYPESCRIPT, TAILWIND, VITE } from "./technologies";

export const projects: Project[] = [
	{
		id: "dc-portfolio",
		name: "Developer Chance Portfolio",
		description: "This project. My personal portfolio website built to showcase my skills, projects, and experience as a developer.",
		category: "professional",
		role: "solo-developer",
		type: "web",
		status: "in-development",
		technologies: [REACT, TYPESCRIPT, TAILWIND, VITE],
		links: {
			github: "https://github.com/DeveloperChance/DeveloperChancePortfolio",
		},
		isPrivate: false,
		yearStarted: 2026,
		featured: true
	}
];
