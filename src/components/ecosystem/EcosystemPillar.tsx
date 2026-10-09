import type { EcosystemPillar as EcosystemPillarData } from "@/types/ecosystem";
import InitiativeItem from "@/components/ecosystem/InitiativeItem";

interface EcosystemPillarProps {
	pillar: EcosystemPillarData;
}

const accentClasses = {
	olive: "text-olive",
	clay: "text-clay",
	ink: "text-ink",
};

export default function EcosystemPillar({ pillar }: EcosystemPillarProps) {
	return (
		<li className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-7 sm:grid-cols-[3.5rem_1fr] sm:gap-7 sm:py-9">
			<span className={`pt-1 font-serif text-2xl ${accentClasses[pillar.accent]}`}>{pillar.number}</span>
			<div>
				<h3 className="mb-5 mt-0 font-serif text-2xl font-normal sm:text-3xl">{pillar.name}</h3>
				<ul className="m-0 list-none p-0">
					{pillar.initiatives.map((initiative) => (
						<InitiativeItem
							description={initiative.description}
							key={initiative.name}
							title={initiative.name}
						/>
					))}
				</ul>
			</div>
		</li>
	);
}
