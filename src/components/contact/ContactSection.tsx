import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowDownRight } from "lucide-react";

export default function ContactSection() {
	return (
		<section aria-labelledby="contact-title" className="py-20 sm:py-28" id="contact">
			<Container>
				<div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
					<SectionLabel>Contact</SectionLabel>
					<div>
						<h2 className="m-0 max-w-3xl font-serif text-4xl font-normal leading-tight sm:text-6xl" id="contact-title">
							Start a <em className="text-clay">conversation.</em>
						</h2>
						<p className="mb-0 mt-6 max-w-lg text-base leading-relaxed text-muted">
							Choose a starting point. Direct enquiry details are not included in the supplied materials.
						</p>
						<div className="mt-9 grid border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-line">
							<a className="group flex min-h-20 items-center justify-between gap-4 border-b border-line py-4 text-sm transition-colors hover:text-clay sm:border-b-0 sm:px-4 sm:first:pl-0 sm:last:pr-0" href="#work">
								<span>Start a project</span><ArrowDownRight aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" size={17} />
							</a>
							<a className="group flex min-h-20 items-center justify-between gap-4 border-b border-line py-4 text-sm transition-colors hover:text-clay sm:border-b-0 sm:px-4" href="#ideas">
								<span>Invite Crystal to speak</span><ArrowDownRight aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" size={17} />
							</a>
							<a className="group flex min-h-20 items-center justify-between gap-4 py-4 text-sm transition-colors hover:text-clay sm:px-4 sm:first:pl-0 sm:last:pr-0" href="#ecosystem">
								<span>Explore the ecosystem</span><ArrowDownRight aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" size={17} />
							</a>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
