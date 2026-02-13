import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import PartTimeMaidPune from "../components/service/PartTimeMaidPune";

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Part Time Maid in Pune",
		description:
			"Affordable part time maid in Pune by Daily Hands. 1-4 hour daily service for cleaning, dusting, mopping, utensil washing, and laundry across all Pune areas.",
		image: "https://dailyhands.in/assets/images/resources/service-details-img2.webp",
		url: "https://dailyhands.in/part-time-maid-pune/",
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
		serviceType: "Part Time Maid",
		areaServed: "Pune, Maharashtra",
		priceRange: "₹3,000 - ₹8,000/month",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			reviewCount: "215",
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "How many hours does a part time maid work?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Our part time maids work 1-4 hours per day based on your requirement. 1 hour is ideal for 1BHK basic cleaning, 2 hours for 2BHK with laundry, and 3-4 hours for larger homes with comprehensive tasks.",
				},
			},
			{
				"@type": "Question",
				name: "What time slots are available for part time maids?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Morning slots (6 AM - 12 PM), afternoon slots (12 PM - 4 PM), and evening slots (4 PM - 8 PM) are available. You can choose a fixed daily slot that works best for your schedule.",
				},
			},
			{
				"@type": "Question",
				name: "Can a part time maid handle cooking?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Part time maids primarily handle cleaning tasks. For households needing cooking, we recommend our 3-4 hour plan where the maid can handle basic cooking along with cleaning, or our dedicated cook service add-on.",
				},
			},
			{
				"@type": "Question",
				name: "What if I need to change the maid's timing?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "You can request a permanent time slot change with 48 hours notice. For one-time changes, inform your account manager the previous day and we'll adjust the schedule accordingly.",
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
				name: "Part Time Maid in Pune",
				item: "https://dailyhands.in/part-time-maid-pune/",
			},
		],
	},
];

export default function PartTimeMaidPunePage() {
	return (
		<>
			<SEO
				pageTitle="Part Time Maid in Pune | 1-4 Hour Daily Cleaning | Daily Hands"
				description="Hire an affordable part time maid in Pune. Daily Hands provides verified maids for 1-4 hours daily — sweeping, mopping, dusting, laundry & utensils. Book now!"
				jsonLd={jsonLd}
				openGraph={{
					image: "https://dailyhands.in/assets/images/resources/service-details-img2.webp",
				}}
			/>
			<Header />
			<Breadcrumb
				heading="Part Time Maid in Pune"
				currentPage="Part Time Maid"
				bgImage="/assets/images/backgrounds/page-header-img10.webp"
			/>
			<PartTimeMaidPune />
			<BrandShowcase />
			<Footer />
		</>
	);
}
