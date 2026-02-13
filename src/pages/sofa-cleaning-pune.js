import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import SofaCleaningPune from "../components/service/SofaCleaningPune";

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Sofa Cleaning in Pune",
		description:
			"Professional sofa cleaning in Pune by Daily Hands. Hot-water extraction, stain removal, and anti-allergen treatment for fabric, leather, velvet, and microfiber sofas.",
		image: "https://dailyhands.in/assets/images/resources/service-details-img6.webp",
		url: "https://dailyhands.in/sofa-cleaning-pune/",
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
		serviceType: "Sofa Cleaning",
		areaServed: "Pune, Maharashtra",
		priceRange: "₹799 - ₹1,999",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "118",
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "How long does the sofa take to dry after cleaning?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "With our industrial extraction machines, the sofa is 90% dry immediately after cleaning. We then use high-speed blowers for speed drying. Most sofas are fully dry and ready to use within 3-4 hours, or 1-2 hours for leather/rexine.",
				},
			},
			{
				"@type": "Question",
				name: "Will the cleaning damage my sofa color or fabric?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "No. We test every cleaning solution on a hidden area of your sofa before full cleaning. This ensures color-fastness and fabric safety. We use different solutions for different fabric types — cotton, velvet, leather, and microfiber each get specialized treatment.",
				},
			},
			{
				"@type": "Question",
				name: "Can you remove turmeric and curry stains from the sofa?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, turmeric and curry stains are common in Indian homes. We pre-treat these with specialized spot-treatment solutions before the full extraction process. Fresh stains are removed completely; very old, set-in stains are significantly lightened.",
				},
			},
			{
				"@type": "Question",
				name: "Do you also clean mattresses and carpets?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, we offer mattress cleaning (vacuuming + UV sanitization + deodorization) and carpet shampooing as add-on services. Combo packages with sofa cleaning are available at discounted rates.",
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
				name: "Sofa Cleaning in Pune",
				item: "https://dailyhands.in/sofa-cleaning-pune/",
			},
		],
	},
];

export default function SofaCleaningPunePage() {
	return (
		<>
			<SEO
				pageTitle="Sofa Cleaning in Pune | Upholstery Deep Clean | Daily Hands"
				description="Professional sofa cleaning in Pune. Daily Hands uses hot-water extraction for fabric, leather, velvet sofas. Stain removal + Scotchgard protection. From ₹799!"
				jsonLd={jsonLd}
				openGraph={{
					image: "https://dailyhands.in/assets/images/resources/service-details-img6.webp",
				}}
			/>
			<Header />
			<Breadcrumb
				heading="Sofa Cleaning in Pune"
				currentPage="Sofa Cleaning"
				bgImage="/assets/images/backgrounds/page-header-img13.webp"
			/>
			<SofaCleaningPune />
			<BrandShowcase />
			<Footer />
		</>
	);
}
