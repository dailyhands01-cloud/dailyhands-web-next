import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import DeepCleaningServicesPune from "../components/service/DeepCleaningServicesPune";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Deep Cleaning Services in Pune",
	description:
		"Premium deep cleaning services in Pune by Daily Hands. Intensive 100+ point cleaning with commercial-grade steam sanitization for homes, offices, and villas.",
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
	serviceType: "Deep Cleaning",
	areaServed: "Pune, Maharashtra",
};

export default function DeepCleaningServicesInPunePage() {
	return (
		<>
			<SEO
				pageTitle="Deep Cleaning Services in Pune | Intensive Home Deep Clean | Daily Hands"
				description="Expert deep cleaning services in Pune. 100+ point checklist, steam sanitization, chimney degreasing, grout restoration. Trained teams for 1BHK–5BHK homes. Book now!"
				jsonLd={jsonLd}
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
