import type { Project } from "@/types/project";

interface ProjectMetaProps {
	project: Project;
	index: number;
}

export default function ProjectMeta({ project, index }: ProjectMetaProps) {
	return (
		<div className="flex items-center justify-between gap-4 border-t border-line pt-4 text-[10px] font-semibold uppercase text-muted">
			<span>{String(index + 1).padStart(2, "0")} / {project.category}</span>
			<span>{project.name}</span>
		</div>
	);
}
