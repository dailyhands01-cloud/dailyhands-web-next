import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import KitchenCleaningPune from "../components/service/KitchenCleaningPune";

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Kitchen Cleaning in Pune",
		description:
			"Professional kitchen cleaning in Pune by Daily Hands. Chimney degreasing, slab polishing, appliance cleaning, and complete kitchen deep cleaning for Indian kitchens.",
		image: "https://dailyhands.in/assets/images/resources/service-details-img5.webp",
		url: "https://dailyhands.in/kitchen-cleaning-pune/",
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
		serviceType: "Kitchen Cleaning",
		areaServed: "Pune, Maharashtra",
		priceRange: "₹699 - ₹2,499",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			reviewCount: "94",
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "Does kitchen cleaning include chimney cleaning?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, our kitchen deep cleaning includes chimney exterior degreasing and filter cleaning. For complete chimney dismantling and internal cleaning, we offer it as an add-on service at ₹499 extra.",
				},
			},
			{
				"@type": "Question",
				name: "Can you clean Indian-style kitchens with heavy oil buildup?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Absolutely. Our team specializes in Indian kitchen cleaning with commercial-grade degreasing solutions that cut through years of oil buildup on walls, cabinets, chimneys, and exhaust fans. We understand tadka spatters and masala stains.",
				},
			},
			{
				"@type": "Question",
				name: "How long does kitchen deep cleaning take?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "A standard kitchen takes 1.5-2 hours. Larger kitchens or those with heavy grease buildup may take 2-3 hours. We clean while you continue your day — minimal disruption to your routine.",
				},
			},
			{
				"@type": "Question",
				name: "Are the cleaning products safe for food preparation areas?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, we use food-safe, non-toxic cleaning solutions on all surfaces that come in contact with food. Industrial degreasers are used only on chimneys, exhaust fans, and outer cabinet surfaces. All surfaces are rinsed thoroughly after cleaning.",
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
				name: "Kitchen Cleaning in Pune",
				item: "https://dailyhands.in/kitchen-cleaning-pune/",
			},
		],
	},
];

export default function KitchenCleaningPunePage() {
	return (
		<>
			<SEO
				pageTitle="Kitchen Cleaning in Pune | Chimney & Deep Degrease | Daily Hands"
				description="Professional kitchen cleaning in Pune. Chimney degreasing, slab polishing, cabinet cleaning & appliance sanitization. Indian kitchen specialists. Book now!"
				jsonLd={jsonLd}
				openGraph={{
					image: "https://dailyhands.in/assets/images/resources/service-details-img5.webp",
				}}
			/>
			<Header />
			<Breadcrumb
				heading="Kitchen Cleaning in Pune"
				currentPage="Kitchen Cleaning"
				bgImage="/assets/images/backgrounds/page-header-img12.webp"
			/>
			<KitchenCleaningPune />
			<BrandShowcase />
			<Footer />
		</>
	);
}
