interface SectionLabelProps { children: string; className?: string; }

export default function SectionLabel({
	children,
	className = "",
}: SectionLabelProps) {
	return (
		<p
			className={`inline-flex items-center gap-3 text-xs font-semibold uppercase text-stone-500 before:h-px before:w-6 before:bg-current ${className}`.trim()}
		>
			{children}
		</p>
	);
}