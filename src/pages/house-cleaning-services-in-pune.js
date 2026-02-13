import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import HouseCleaningServicesPune from "../components/service/HouseCleaningServicesPune";

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "Service",
		name: "House Cleaning Services in Pune",
		description:
			"Professional house cleaning services in Pune by Daily Hands. Trained cleaners for daily, weekly, and one-time home cleaning across all Pune areas.",
		image: "https://dailyhands.in/assets/images/resources/service-details-img3.webp",
		url: "https://dailyhands.in/house-cleaning-services-in-pune/",
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
		serviceType: "House Cleaning",
		areaServed: "Pune, Maharashtra",
		priceRange: "₹3,000 - ₹12,000/month",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			reviewCount: "198",
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "What does your house cleaning service include?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Our house cleaning includes sweeping, mopping, dusting all surfaces, bathroom cleaning, kitchen platform wiping, utensil washing, bed making, cobweb removal, window sill cleaning, and trash disposal.",
				},
			},
			{
				"@type": "Question",
				name: "How often should I get house cleaning done?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "For most Pune homes, daily cleaning for 1-2 hours is recommended. Weekly deep cleaning complements daily maintenance. Homes near construction zones or main roads may need more frequent cleaning due to dust.",
				},
			},
			{
				"@type": "Question",
				name: "Do you bring your own cleaning supplies?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "For daily cleaning, maids use your home's cleaning supplies. For deep cleaning and specialized services, we bring commercial-grade equipment and eco-friendly cleaning solutions at no extra charge.",
				},
			},
			{
				"@type": "Question",
				name: "Can I customize the cleaning tasks?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, absolutely. You can prioritize specific areas or tasks based on your needs. Our maids follow your instructions while ensuring all basic cleaning standards are met.",
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
				name: "House Cleaning Services in Pune",
				item: "https://dailyhands.in/house-cleaning-services-in-pune/",
			},
		],
	},
];

export default function HouseCleaningServicesInPunePage() {
	return (
		<>
			<SEO
				pageTitle="House Cleaning Services in Pune | Daily, Weekly & Deep Clean | Daily Hands"
				description="Top-rated house cleaning services in Pune. Daily Hands provides trained cleaners for sweeping, mopping, dusting, bathroom & kitchen cleaning. Book now!"
				jsonLd={jsonLd}
				openGraph={{
					image: "https://dailyhands.in/assets/images/resources/service-details-img3.webp",
				}}
			/>
			<Header />
			<Breadcrumb
				heading="House Cleaning Services in Pune"
				currentPage="House Cleaning Services"
				bgImage="/assets/images/backgrounds/page-header-img6.webp"
			/>
			<HouseCleaningServicesPune />
			<BrandShowcase />
			<Footer />
		</>
	);
}
