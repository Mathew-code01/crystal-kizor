import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { siteOrigin } from "@/lib/site-config";
import "./globals.css";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: {
		default: "Crystal Kizor — Architecture, Design & Impact",
		template: "%s | Crystal Kizor",
	},
	description:
		"Explore the work, ideas, and initiatives of Crystal Kizor across architecture, design, education, and social impact.",
	applicationName: "Crystal Kizor",
	metadataBase: siteOrigin,
	alternates: siteOrigin
		? { canonical: new URL("/", siteOrigin) }
		: undefined,
	openGraph: {
		type: "website",
		title: "Crystal Kizor — Architecture, Design & Impact",
		description: "Architecture, ideas, and initiatives shaped around better living.",
		siteName: "Crystal Kizor",
		...(siteOrigin
			? {
					url: siteOrigin.toString(),
					images: [
						{
							url: new URL("/og/crystal-kizor.png", siteOrigin),
							width: 1200,
							height: 630,
							alt: "Crystal Kizor — Architecture, Ideas, Impact",
						},
					],
				}
			: {}),
	},
	twitter: {
		card: "summary_large_image",
		title: "Crystal Kizor — Architecture, Design & Impact",
		description: "Architecture, ideas, and initiatives shaped around better living.",
		...(siteOrigin
			? { images: [new URL("/og/crystal-kizor.png", siteOrigin)] }
			: {}),
	},
	robots: { index: true, follow: true },
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#f4f0e8",
};

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html className={`${cormorant.variable} ${manrope.variable}`} lang="en">
			<body>
				<a
					className="fixed left-4 top-4 z-50 -translate-y-24 bg-ink px-4 py-3 text-paper focus:translate-y-0"
					href="#main-content"
				>
					Skip to content
				</a>
				{children}
			</body>
		</html>
	);
}