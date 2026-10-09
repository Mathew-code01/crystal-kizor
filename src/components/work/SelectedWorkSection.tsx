import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectFeature from "@/components/work/ProjectFeature";

export default function SelectedWorkSection() {
	return (
		<section aria-labelledby="work-title" className="py-20 sm:py-28" id="work">
			<Container>
				<div className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-14">
					<div>
						<SectionLabel>Selected work</SectionLabel>
						<h2 className="mb-0 mt-5 font-serif text-4xl font-normal sm:text-5xl" id="work-title">Spaces for living.</h2>
					</div>
					<a className="inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-semibold transition-colors hover:border-clay hover:text-clay" href="#contact">
						Discuss a project <ArrowUpRight aria-hidden="true" size={15} />
					</a>
				</div>
				<div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:gap-12">
					{projects.map((project, index) => (
						<ProjectFeature index={index} key={project.name} project={project} />
					))}
				</div>
			</Container>
		</section>
	);
}
