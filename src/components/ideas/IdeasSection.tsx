import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

export default function IdeasSection() {
	return (
		<section aria-labelledby="ideas-title" className="py-20 sm:py-28" id="ideas">
			<Container>
				<div className="grid gap-8 border-y border-line py-8 sm:py-12 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
					<SectionLabel>Ideas & research</SectionLabel>
					<div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
						<div>
						<h2 className="m-0 max-w-3xl font-serif text-4xl font-normal leading-tight sm:text-5xl" id="ideas-title">
							Questions that make room for <em className="text-olive">possibility.</em>
						</h2>
						<p className="mb-0 mt-6 max-w-xl text-base leading-relaxed text-muted">
							Research, writing and speaking interests span architecture and climate, design in African context, and people, cities and opportunity.
						</p>
						<ul aria-label="Areas of interest" className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-line pt-5 text-xs text-olive">
							<li>Architecture & climate</li>
							<li>Design & African context</li>
							<li>People, cities & opportunity</li>
						</ul>
						</div>
						<figure className="relative m-0 aspect-[4/3] overflow-hidden bg-soft lg:mt-2">
							<Image
								alt="Crystal Kizor at a desk with a microphone, laptop, and architecture references."
								className="object-cover object-center"
								fill
								sizes="(min-width: 1024px) 34vw, 100vw"
								src="/images/crystal/speaking-workspace.webp"
							/>
						</figure>
					</div>
				</div>
			</Container>
		</section>
	);
}
