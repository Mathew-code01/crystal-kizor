import type { Project } from "@/types/project";

export const projects: Project[] = [
	{
		name: "Nature Home",
		category: "Residential",
		images: [
			{
				src: "/images/nature-home/front-view.webp",
				alt: "A residence set behind the shade of a mature tree.",
			},
			{
				src: "/images/nature-home/sitting-room.webp",
				alt: "A bright sitting room with a curved pale sofa and tall windows.",
			},
		],
	},
	{
		name: "Community Centre",
		category: "Community",
		images: [
			{
				src: "/images/community-centre/interior.webp",
				alt: "A communal interior beneath a high timber roof.",
			},
			{
				src: "/images/community-centre/exterior.webp",
				alt: "A communal courtyard around a mature tree beneath a timber canopy.",
			},
		],
	},
];
