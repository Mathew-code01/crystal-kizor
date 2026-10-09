import { ecosystemPillars } from "@/data/ecosystem";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import EcosystemPillar from "@/components/ecosystem/EcosystemPillar";

export default function EcosystemSection() {
	return (
		<section aria-labelledby="ecosystem-title" className="bg-soft py-20 sm:py-28" id="ecosystem">
			<Container>
				<div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
					<div className="md:sticky md:top-12 md:self-start">
						<SectionLabel>A wider ecosystem</SectionLabel>
						<h2 className="mb-0 mt-5 max-w-lg font-serif text-4xl font-normal leading-tight sm:text-5xl" id="ecosystem-title">
							One perspective. <em className="text-clay">Many expressions.</em>
						</h2>
						<p className="mb-0 mt-6 max-w-sm text-sm leading-relaxed text-muted">
							Architecture, design, knowledge and community come together across three connected areas of work.
						</p>
					</div>
					<div>
						<ul className="m-0 list-none p-0">
							{ecosystemPillars.map((pillar) => (
								<EcosystemPillar key={pillar.number} pillar={pillar} />
							))}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
}
