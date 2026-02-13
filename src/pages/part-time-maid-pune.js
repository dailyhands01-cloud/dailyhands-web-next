import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import PartTimeMaidPune from "../components/service/PartTimeMaidPune";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Part Time Maid in Pune",
	description:
		"Affordable part time maid in Pune from Daily Hands. Flexible 1-4 hour daily cleaning slots starting ₹3,000/month. Verified helpers for sweeping, mopping, dishwashing.",
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
	serviceType: "Part Time Maid",
	areaServed: "Pune, Maharashtra",
};

export default function PartTimeMaidPunePage() {
	return (
		<>
			<SEO
				pageTitle="Part Time Maid in Pune | Affordable Daily Cleaning | Daily Hands"
				description="Hire a part time maid in Pune starting ₹3,000/month. Daily Hands offers flexible 1-4 hour cleaning slots — morning, afternoon, or evening. Verified staff, free replacement."
				jsonLd={jsonLd}
			/>
			<Header />
			<Breadcrumb
				heading="Part Time Maid in Pune"
				currentPage="Part Time Maid"
				bgImage="/assets/images/backgrounds/page-header-img10.webp"
			/>
			<PartTimeMaidPune />
			<BrandShowcase />
			<Footer />
		</>
	);
}
