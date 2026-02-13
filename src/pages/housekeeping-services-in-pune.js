import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import HousekeepingServicesPune from "../components/service/HousekeepingServicesPune";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Housekeeping Services in Pune",
	description:
		"Premium housekeeping services in Pune by Daily Hands. Dedicated trained housekeepers for daily home maintenance, laundry, cooking support, and complete household management.",
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
	serviceType: "Housekeeping",
	areaServed: "Pune, Maharashtra",
};

export default function HousekeepingServicesInPunePage() {
	return (
		<>
			<SEO
				pageTitle="Housekeeping Services in Pune | Daily Home Care | Daily Hands"
				description="Reliable housekeeping services in Pune. Trained housekeepers for daily sweeping, mopping, laundry, kitchen upkeep. 7-day free trial, zero deposit. Book today!"
				jsonLd={jsonLd}
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
