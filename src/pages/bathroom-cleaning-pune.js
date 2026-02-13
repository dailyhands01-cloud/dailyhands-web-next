import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import BathroomCleaningPune from "../components/service/BathroomCleaningPune";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Bathroom Cleaning in Pune",
	description:
		"Professional bathroom cleaning in Pune by Daily Hands. Steam sanitization, tile grout restoration, limescale removal, mold treatment. Starts from ₹499 per bathroom.",
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
	serviceType: "Bathroom Cleaning",
	areaServed: "Pune, Maharashtra",
};

export default function BathroomCleaningPunePage() {
	return (
		<>
			<SEO
				pageTitle="Bathroom Cleaning in Pune | Deep Sanitization | Daily Hands"
				description="Expert bathroom cleaning in Pune. Daily Hands removes hard-water stains, limescale, mold with 180°F steam. 25-point checklist, anti-bacterial coating. From ₹499."
				jsonLd={jsonLd}
			/>
			<Header />
			<Breadcrumb
				heading="Bathroom Cleaning in Pune"
				currentPage="Bathroom Cleaning"
				bgImage="/assets/images/backgrounds/page-header-img11.webp"
			/>
			<BathroomCleaningPune />
			<BrandShowcase />
			<Footer />
		</>
	);
}
