import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import BathroomCleaningPune from "../components/service/BathroomCleaningPune";

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Bathroom Cleaning in Pune",
		description:
			"Professional bathroom cleaning in Pune by Daily Hands. Deep descaling, grout scrubbing, hard water stain removal, and sanitization using commercial-grade solutions.",
		image: "https://dailyhands.in/assets/images/resources/service-details-img4.webp",
		url: "https://dailyhands.in/bathroom-cleaning-pune/",
		provider: {
			"@type": "LocalBusiness",
			name: "Daily Hands",
			url: "https://dailyhands.in",
			telephone: "+91-88057-79006",
			priceRange: "₹",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Pune",
				addressRegion: "Maharashtra",
				addressCountry: "IN",
			},
			areaServed: {
				"@type": "City",
				name: "Pune",
			},
		},
		serviceType: "Bathroom Cleaning",
		areaServed: "Pune, Maharashtra",
		priceRange: "₹499 - ₹1,499",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "86",
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "How do you remove hard water stains in bathrooms?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "We use commercial-grade acid-based descaling solutions specifically formulated for Pune's hard water. These are applied to tiles, taps, shower heads, and glass panels, left to dissolve mineral deposits, then scrubbed and rinsed. Results are visible immediately.",
				},
			},
			{
				"@type": "Question",
				name: "How long does professional bathroom cleaning take?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "A single bathroom takes 45-60 minutes for standard cleaning and 60-90 minutes for deep cleaning with descaling. Multiple bathrooms are cleaned simultaneously by our team to save time.",
				},
			},
			{
				"@type": "Question",
				name: "Can you clean black mold from bathroom walls?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, we use anti-fungal solutions to kill and remove black mold from grout lines, silicone seals, ceiling corners, and wall surfaces. We also apply a preventive anti-mold coating to slow regrowth, especially important during Pune's humid monsoon season.",
				},
			},
			{
				"@type": "Question",
				name: "Is bathroom cleaning safe for marble and natural stone?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, we use pH-neutral cleaners for natural stone surfaces like marble, granite, and Kota stone. Acidic solutions are only used on ceramic tiles and vitrified surfaces. We always check the surface material before applying any cleaning agent.",
				},
			},
		],
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://dailyhands.in/",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Bathroom Cleaning in Pune",
				item: "https://dailyhands.in/bathroom-cleaning-pune/",
			},
		],
	},
];

export default function BathroomCleaningPunePage() {
	return (
		<>
			<SEO
				pageTitle="Bathroom Cleaning in Pune | Deep Descaling & Sanitization | Daily Hands"
				description="Professional bathroom cleaning in Pune. Hard water stain removal, grout scrubbing, mold treatment & sanitization. 25-point checklist. Book bathroom deep clean!"
				jsonLd={jsonLd}
				openGraph={{
					image: "https://dailyhands.in/assets/images/resources/service-details-img4.webp",
				}}
			/>
			<Header />
			<Breadcrumb
				heading="Bathroom Cleaning in Pune"
				currentPage="Bathroom Cleaning"
				bgImage="/assets/images/backgrounds/page-header-img11.webp"
			/>
			<BathroomCleaningPune />
			<BrandShowcase />
			<Footer />
		</>
	);
}
