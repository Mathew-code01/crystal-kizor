interface InitiativeItemProps {
	title: string;
	description: string;
}

export default function InitiativeItem({ title, description }: InitiativeItemProps) {
	return (
		<li className="border-t border-line py-5 first:border-t-0 first:pt-0">
			<h4 className="m-0 text-sm font-semibold">{title}</h4>
			<p className="mb-0 mt-2 max-w-sm text-sm leading-relaxed text-muted">{description}</p>
		</li>
	);
}
