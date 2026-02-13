import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import FullTimeMaidPune from "../components/service/FullTimeMaidPune";

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Full Time Maid in Pune",
		description:
			"Hire a reliable full time maid in Pune through Daily Hands. 8-hour daily service for complete home management including cleaning, cooking assistance, laundry, and childcare support.",
		image: "https://dailyhands.in/assets/images/resources/service-details-img2.webp",
		url: "https://dailyhands.in/full-time-maid-pune/",
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
		serviceType: "Full Time Maid",
		areaServed: "Pune, Maharashtra",
		priceRange: "₹10,000 - ₹18,000/month",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.7",
			reviewCount: "142",
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "What does a full time maid do?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "A full time maid works 8 hours/day covering sweeping, mopping, dusting, utensil washing, laundry, ironing, bathroom and kitchen cleaning, bed making, grocery support, and basic cooking assistance.",
				},
			},
			{
				"@type": "Question",
				name: "How much does a full time maid cost in Pune?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Full time maid pricing in Pune starts from ₹10,000/month for standard cleaning. With cooking assistance it's ₹12,000-₹15,000/month. Premium housekeeping with all tasks costs ₹15,000-₹18,000/month.",
				},
			},
			{
				"@type": "Question",
				name: "Do full time maids get weekly offs?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, all full time maids get one weekly off (typically Sunday). We provide a replacement maid on off-days if you opt for our 7-day coverage plan at a small additional charge.",
				},
			},
			{
				"@type": "Question",
				name: "Can a full time maid also cook?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, many of our full time maids are trained in basic Indian cooking. We can match you with a maid who can handle both cleaning and cooking tasks. Dedicated cook-cum-maid service is available on request.",
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
				name: "Full Time Maid in Pune",
				item: "https://dailyhands.in/full-time-maid-pune/",
			},
		],
	},
];

export default function FullTimeMaidPunePage() {
	return (
		<>
			<SEO
				pageTitle="Full Time Maid in Pune | 8-Hour Daily Home Help | Daily Hands"
				description="Hire a verified full time maid in Pune. Daily Hands provides trained maids for 8-hour daily service — cleaning, cooking, laundry & childcare support. Book now!"
				jsonLd={jsonLd}
				openGraph={{
					image: "https://dailyhands.in/assets/images/resources/service-details-img2.webp",
				}}
			/>
			<Header />
			<Breadcrumb
				heading="Full Time Maid in Pune"
				currentPage="Full Time Maid"
				bgImage="/assets/images/backgrounds/page-header-img9.webp"
			/>
			<FullTimeMaidPune />
			<BrandShowcase />
			<Footer />
		</>
	);
}
