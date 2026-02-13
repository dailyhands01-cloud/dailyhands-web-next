import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import KitchenCleaningPune from "../components/service/KitchenCleaningPune";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Kitchen Cleaning in Pune",
	description:
		"Professional kitchen cleaning in Pune by Daily Hands. Chimney degreasing, oven cleaning, countertop polishing, and appliance deep cleaning with food-safe products.",
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
	serviceType: "Kitchen Cleaning",
	areaServed: "Pune, Maharashtra",
};

export default function KitchenCleaningPunePage() {
	return (
		<>
			<SEO
				pageTitle="Kitchen Cleaning in Pune | Chimney & Appliance Deep Clean | Daily Hands"
				description="Expert kitchen cleaning in Pune. Daily Hands deep cleans chimneys, ovens, stoves, refrigerators with food-safe degreasers. Starts from ₹799. Book today!"
				jsonLd={jsonLd}
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
