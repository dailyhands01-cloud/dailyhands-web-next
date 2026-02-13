import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import MaidServicePune from "../components/service/MaidServicePune";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Maid Service in Pune",
	description:
		"Professional and reliable maid service in Pune by Daily Hands. Background-verified maids for sweeping, mopping, dusting, utensil washing, and complete home upkeep across all Pune areas.",
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
	serviceType: "Maid Service",
	areaServed: "Pune, Maharashtra",
};

export default function MaidServiceInPunePage() {
	return (
		<>
			<SEO
				pageTitle="Maid Service in Pune | Trusted & Affordable Maids | Daily Hands"
				description="Looking for reliable maid service in Pune? Daily Hands provides background-verified, trained maids for daily housekeeping, sweeping, mopping & more. Book now!"
				jsonLd={jsonLd}
			/>
			<Header />
			<Breadcrumb
				heading="Maid Service in Pune"
				currentPage="Maid Service in Pune"
				bgImage="/assets/images/backgrounds/page-header-img5.webp"
			/>
			<MaidServicePune />
			<BrandShowcase />
			<Footer />
		</>
	);
}
