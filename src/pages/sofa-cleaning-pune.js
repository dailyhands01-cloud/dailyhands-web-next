import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import SofaCleaningPune from "../components/service/SofaCleaningPune";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Sofa Cleaning in Pune",
	description:
		"Professional sofa cleaning in Pune by Daily Hands. Hot-water extraction, stain removal, and anti-allergen treatment for all fabrics. Starts from ₹300 per seat.",
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
	serviceType: "Sofa Cleaning",
	areaServed: "Pune, Maharashtra",
};

export default function SofaCleaningPunePage() {
	return (
		<>
			<SEO
				pageTitle="Sofa Cleaning in Pune | Upholstery Deep Clean | Daily Hands"
				description="Professional sofa cleaning in Pune. Daily Hands uses hot-water extraction for fabric, leather, velvet sofas. Stain removal + Scotchgard protection. From ₹300/seat."
				jsonLd={jsonLd}
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
