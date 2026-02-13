import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import HousekeepingServicesPune from "../components/service/HousekeepingServicesPune";

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Housekeeping Services in Pune",
		description:
			"Premium housekeeping services in Pune by Daily Hands. Trained housekeepers for complete home management including cleaning, laundry, kitchen care, and organization.",
		image: "https://dailyhands.in/assets/images/resources/service-details-img5.webp",
		url: "https://dailyhands.in/housekeeping-services-in-pune/",
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
		serviceType: "Housekeeping",
		areaServed: "Pune, Maharashtra",
		priceRange: "₹5,000 - ₹15,000/month",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "176",
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "What is the difference between a maid and a housekeeper?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "A maid typically handles basic cleaning tasks like sweeping and mopping. A housekeeper provides comprehensive home management including deep cleaning, laundry care, wardrobe organization, kitchen management, guest preparation, and maintaining overall household hygiene standards.",
				},
			},
			{
				"@type": "Question",
				name: "How much does housekeeping cost in Pune?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Housekeeping services in Pune start from ₹5,000/month for a 2-hour daily service. Full-day housekeeping for larger homes ranges from ₹10,000-₹15,000/month depending on home size and tasks required.",
				},
			},
			{
				"@type": "Question",
				name: "Do housekeepers also cook?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Basic kitchen work like tea/coffee preparation, reheating, and simple meal prep is included. For dedicated cooking services, we recommend our cook service add-on which can be bundled with housekeeping at a discounted rate.",
				},
			},
			{
				"@type": "Question",
				name: "Can I get a live-in housekeeper?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, we provide live-in housekeepers for families who need full-day assistance. Live-in staff undergo extensive background verification and training. Accommodation and meals need to be provided by the family.",
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
				name: "Housekeeping Services in Pune",
				item: "https://dailyhands.in/housekeeping-services-in-pune/",
			},
		],
	},
];

export default function HousekeepingServicesInPunePage() {
	return (
		<>
			<SEO
				pageTitle="Housekeeping Services in Pune | Professional Home Management | Daily Hands"
				description="Premium housekeeping services in Pune. Trained housekeepers for cleaning, laundry, kitchen care & home organization. Daily, weekly or live-in options. Book now!"
				jsonLd={jsonLd}
				openGraph={{
					image: "https://dailyhands.in/assets/images/resources/service-details-img5.webp",
				}}
			/>
			<Header />
			<Breadcrumb
				heading="Housekeeping Services in Pune"
				currentPage="Housekeeping Services"
				bgImage="/assets/images/backgrounds/page-header-img8.webp"
			/>
			<HousekeepingServicesPune />
			<BrandShowcase />
			<Footer />
		</>
	);
}
