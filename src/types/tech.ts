export interface Technology {
	id: string;
	name: string;
	description: string;
  type: "programming-language" | "framework" | "library" | "tool" | "other";
  category: "frontend" | "backend" | "fullstack" | "devops" | "other";
}