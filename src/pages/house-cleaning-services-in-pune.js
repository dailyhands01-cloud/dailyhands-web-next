import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import HouseCleaningServicesPune from "../components/service/HouseCleaningServicesPune";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "House Cleaning Services in Pune",
	description:
		"Top-rated house cleaning services in Pune by Daily Hands. Complete room-by-room cleaning for apartments, villas, and bungalows with eco-friendly products.",
	provider: {
		"@type": "LocalBusiness",
		name: "Daily Hands",
		url: "https://dailyhands.in",
		telephone: "+91-XXXXXXXXXX",
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
};

export default function HouseCleaningServicesInPunePage() {
	return (
		<>
			<SEO
				pageTitle="House Cleaning Services in Pune | Professional Home Cleaning | Daily Hands"
				description="Best house cleaning services in Pune. Daily Hands offers complete home cleaning — bedrooms, kitchen, bathrooms, balconies. Trained staff, eco-safe products. Book today!"
				jsonLd={jsonLd}
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
