import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import MaidNearMe from "../components/service/MaidNearMe";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Maid Near Me in Pune",
	description:
		"Find a trusted maid near me in Pune with Daily Hands. 500+ verified maids across all Pune zones. Location-matched helpers within 2-5 km of your home.",
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

export default function MaidNearMePage() {
	return (
		<>
			<SEO
				pageTitle="Maid Near Me in Pune | Verified Local Maids | Daily Hands"
				description="Find a maid near me in Pune instantly. Daily Hands provides location-matched, verified maids within 2-5 km. 500+ helpers across all Pune zones. Book in 2 minutes!"
				jsonLd={jsonLd}
			/>
			<Header />
			<Breadcrumb
				heading="Find a Maid Near Me"
				currentPage="Maid Near Me"
				bgImage="/assets/images/backgrounds/page-header-img14.webp"
			/>
			<MaidNearMe />
			<BrandShowcase />
			<Footer />
		</>
	);
}
