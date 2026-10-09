export interface EcosystemPillar {
	name: string;
	number: string;
	accent: "olive" | "clay" | "ink";
	initiatives: {
		name: string;
		description: string;
	}[];
}
