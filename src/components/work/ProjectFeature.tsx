import Image from "next/image";
import type { Project } from "@/types/project";
import ProjectMeta from "@/components/work/ProjectMeta";

interface ProjectFeatureProps {
	project: Project;
	index: number;
}

export default function ProjectFeature({ project, index }: ProjectFeatureProps) {
	return (
		<article className={`group min-w-0 ${index === 1 ? "sm:mt-20" : ""}`}>
			<figure className="relative mb-5 aspect-[4/5] overflow-hidden bg-soft">
				<Image
					alt={project.images[0].alt}
					className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
					fill
					sizes="(min-width: 640px) 46vw, 100vw"
					src={project.images[0].src}
				/>
			</figure>
			<div className="mb-5 flex items-end justify-between gap-4">
				<div>
					<p className="mb-2 mt-0 text-[10px] font-semibold uppercase text-muted">{project.category}</p>
					<h3 className="m-0 font-serif text-3xl font-normal sm:text-4xl">{project.name}</h3>
				</div>
				<span className="pb-1 font-serif text-xl text-clay">0{index + 1}</span>
			</div>
			<figure className={`relative aspect-[4/5] overflow-hidden bg-soft ${index === 0 ? "sm:mr-[16%]" : "sm:ml-[16%]"}`}>
				<Image
					alt={project.images[1].alt}
					className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
					fill
					sizes="(min-width: 640px) 38vw, 84vw"
					src={project.images[1].src}
				/>
			</figure>
			<ProjectMeta index={index} project={project} />
		</article>
	);
}
