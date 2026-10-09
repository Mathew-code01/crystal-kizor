import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

export default function PointOfViewSection() {
	return (
		<section aria-labelledby="perspective-title" className="border-y border-line bg-soft py-20 sm:py-28" id="perspective">
			<Container>
				<div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
					<SectionLabel>Point of view</SectionLabel>
					<div>
						<h2 className="m-0 max-w-4xl font-serif text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl" id="perspective-title">
							The spaces we inhabit shape the <em className="text-clay">ways we live.</em>
						</h2>
						<p className="mb-0 mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
							A perspective on the relationship between space, shared ideas, and the communities we shape.
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}
