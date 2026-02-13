import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import DeepCleaningServicesPune from "../components/service/DeepCleaningServicesPune";

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Deep Cleaning Services in Pune",
		description:
			"Premium deep cleaning services in Pune by Daily Hands. Intensive 100+ point cleaning with commercial-grade steam sanitization for homes, offices, and villas.",
		image: "https://dailyhands.in/assets/images/resources/service-details-img4.webp",
		url: "https://dailyhands.in/deep-cleaning-services-in-pune/",
		provider: {
			"@type": "LocalBusiness",
			name: "Daily Hands",
			url: "https://dailyhands.in",
			telephone: "+91-88057-79006",
			priceRange: "₹₹₹",
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
		serviceType: "Deep Cleaning",
		areaServed: "Pune, Maharashtra",
		priceRange: "₹2,999 - ₹14,999",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "312",
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "How long does deep cleaning take?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "A 1BHK takes 3-4 hours, 2BHK takes 5-6 hours, 3BHK takes 6-8 hours, and larger homes may take a full day. A team of 2-4 trained professionals handles the work.",
				},
			},
			{
				"@type": "Question",
				name: "What's included in deep cleaning?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Our 100+ point checklist covers every room: kitchen degreasing, chimney cleaning, bathroom descaling, fan and AC vent cleaning, window track scrubbing, cabinet interior cleaning, floor scrubbing, and balcony pressure washing.",
				},
			},
			{
				"@type": "Question",
				name: "How often should I get deep cleaning done?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "We recommend deep cleaning every 3-6 months. However, before/after monsoon season, festivals like Diwali, before moving into a new flat, or after renovation requires immediate deep cleaning.",
				},
			},
			{
				"@type": "Question",
				name: "Do you bring all the equipment?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, we bring all commercial-grade equipment including steam cleaners, floor scrubbers, pressure washers, degreasing solutions, descaling agents, and microfiber cloths. No preparation needed from your side.",
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
				name: "Deep Cleaning Services in Pune",
				item: "https://dailyhands.in/deep-cleaning-services-in-pune/",
			},
		],
	},
];

export default function DeepCleaningServicesInPunePage() {
	return (
		<>
			<SEO
				pageTitle="Deep Cleaning Services in Pune | Intensive Home Deep Clean | Daily Hands"
				description="Expert deep cleaning services in Pune. 100+ point checklist, steam sanitization, chimney degreasing, grout restoration. Trained teams for 1BHK–5BHK homes. Book now!"
				jsonLd={jsonLd}
				openGraph={{
					image: "https://dailyhands.in/assets/images/resources/service-details-img4.webp",
				}}
			/>
			<Header />
			<Breadcrumb
				heading="Deep Cleaning Services in Pune"
				currentPage="Deep Cleaning Services"
				bgImage="/assets/images/backgrounds/page-header-img7.webp"
			/>
			<DeepCleaningServicesPune />
			<BrandShowcase />
			<Footer />
		</>
	);
}
