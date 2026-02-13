import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import MaidServicePune from "../components/service/MaidServicePune";

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Maid Service in Pune",
		description:
			"Professional and reliable maid service in Pune by Daily Hands. Background-verified maids for sweeping, mopping, dusting, utensil washing, and complete home upkeep across all Pune areas.",
		image: "https://dailyhands.in/assets/images/resources/service-details-img2.webp",
		url: "https://dailyhands.in/maid-service-in-pune/",
		provider: {
			"@type": "LocalBusiness",
			name: "Daily Hands",
			url: "https://dailyhands.in",
			telephone: "+91-88057-79006",
			priceRange: "₹₹",
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
		serviceType: "Maid Service",
		areaServed: "Pune, Maharashtra",
		priceRange: "₹3,000 - ₹15,000/month",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "254",
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "How much does a maid cost in Pune?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Daily Hands maid service in Pune starts from ₹3,000/month for 1 hour daily. Pricing depends on hours, tasks, and home size. A 2-hour maid for a 2BHK costs around ₹5,000/month.",
				},
			},
			{
				"@type": "Question",
				name: "Are your maids background verified?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, every maid is Aadhaar-verified and police background-checked before assignment. We also conduct reference checks and provide a 40+ hour training program.",
				},
			},
			{
				"@type": "Question",
				name: "What if the maid doesn't show up?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "We provide same-day replacement if your assigned maid is absent. Our digital attendance system notifies you of check-in/check-out times daily.",
				},
			},
			{
				"@type": "Question",
				name: "Do you offer a free trial?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, we offer a 7-day free trial with zero deposit and no contracts. If you're not satisfied, you can cancel anytime or request a different maid.",
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
				name: "Maid Service in Pune",
				item: "https://dailyhands.in/maid-service-in-pune/",
			},
		],
	},
];

export default function MaidServiceInPunePage() {
	return (
		<>
			<SEO
				pageTitle="Maid Service in Pune | Trusted & Affordable Maids | Daily Hands"
				description="Looking for reliable maid service in Pune? Daily Hands provides background-verified, trained maids for daily housekeeping, sweeping, mopping & more. Book now!"
				jsonLd={jsonLd}
				openGraph={{
					image: "https://dailyhands.in/assets/images/resources/service-details-img2.webp",
				}}
			/>
			<Header />
			<Breadcrumb
				heading="Maid Service in Pune"
				currentPage="Maid Service in Pune"
				bgImage="/assets/images/backgrounds/page-header-img5.webp"
			/>
			<MaidServicePune />
			<BrandShowcase />
			<Footer />
		</>
	);
}
