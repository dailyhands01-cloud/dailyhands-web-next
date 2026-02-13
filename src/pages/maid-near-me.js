import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import MaidNearMe from "../components/service/MaidNearMe";

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Maid Near Me in Pune",
		description:
			"Find a trusted, verified maid near you in Pune. Daily Hands has 3,000+ background-checked maids across 50+ Pune localities with 24-hour matching.",
		image: "https://dailyhands.in/assets/images/resources/service-details-img2.webp",
		url: "https://dailyhands.in/maid-near-me/",
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
			reviewCount: "432",
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "How quickly can I get a maid in my area?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "For most Pune localities, we assign a verified maid within 24-48 hours. For newer or remote areas, it may take 3-5 days. During the free trial period, we ensure you're fully satisfied with the assigned maid.",
				},
			},
			{
				"@type": "Question",
				name: "What languages do your maids speak?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Our maids speak Marathi, Hindi, and basic English. For areas with significant non-Marathi populations, we prioritize Hindi-speaking maids. Specify your language preference during booking.",
				},
			},
			{
				"@type": "Question",
				name: "What if I want to switch my assigned maid?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "No questions asked — you can request a maid change anytime during or after the trial period. We'll assign a new verified maid within 24-48 hours at no extra charge.",
				},
			},
			{
				"@type": "Question",
				name: "Do you serve gated societies and managed apartments?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, we serve all property types — gated communities, standalone apartments, row houses, and bungalows. We provide ID cards and coordinate with society security for smooth daily access.",
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
				name: "Maid Near Me",
				item: "https://dailyhands.in/maid-near-me/",
			},
		],
	},
];

export default function MaidNearMePage() {
	return (
		<>
			<SEO
				pageTitle="Maid Near Me in Pune | Find Verified Local Maids | Daily Hands"
				description="Find a trusted maid near you in Pune. 3,000+ verified maids across 50+ localities. 24-hour matching, 7-day free trial, same-day replacement. Book now!"
				jsonLd={jsonLd}
				openGraph={{
					image: "https://dailyhands.in/assets/images/resources/service-details-img2.webp",
				}}
			/>
			<Header />
			<Breadcrumb
				heading="Maid Near Me"
				currentPage="Maid Near Me"
				bgImage="/assets/images/backgrounds/page-header-img14.webp"
			/>
			<MaidNearMe />
			<BrandShowcase />
			<Footer />
		</>
	);
}
