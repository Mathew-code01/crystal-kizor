import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutSection() {
	return (
		<section aria-labelledby="about-title" className="border-y border-line bg-soft py-20 sm:py-28" id="about">
			<Container>
				<div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
					<div className="relative min-h-72 overflow-hidden bg-soft sm:min-h-[28rem]">
						<Image
							alt="Crystal Kizor in a warm-toned design studio."
							className="object-cover object-[center_35%]"
							fill
							sizes="(min-width: 768px) 36vw, 100vw"
							src="/images/crystal/about-portrait.webp"
						/>
					</div>
					<div className="self-center">
						<SectionLabel>About</SectionLabel>
						<h2 className="mb-0 mt-5 font-serif text-4xl font-normal sm:text-5xl" id="about-title">Crystal Kizor</h2>
						<p className="mb-0 mt-6 max-w-lg text-sm font-semibold uppercase text-olive">
							Architect · Designer · Entrepreneur · Researcher · Speaker
						</p>
						<p className="mb-0 mt-5 max-w-xl text-base leading-relaxed text-muted">
							Exploring how thoughtful design, shared ideas, and a sense of purpose can shape the spaces and communities around us.
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}
