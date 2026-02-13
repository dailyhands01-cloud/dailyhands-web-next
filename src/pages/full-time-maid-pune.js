import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import FullTimeMaidPune from "../components/service/FullTimeMaidPune";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Full Time Maid in Pune",
	description:
		"Hire a dedicated full time maid in Pune from Daily Hands. 8-10 hour daily helpers for cooking, cleaning, childcare, elderly care, and complete home management.",
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
	serviceType: "Full Time Maid",
	areaServed: "Pune, Maharashtra",
};

export default function FullTimeMaidPunePage() {
	return (
		<>
			<SEO
				pageTitle="Full Time Maid in Pune | Dedicated Home Help | Daily Hands"
				description="Hire a full time maid in Pune with Daily Hands. Trained, verified domestic helpers for all-day home care — cleaning, cooking, childcare, elderly support. From ₹10,000/month."
				jsonLd={jsonLd}
			/>
			<Header />
			<Breadcrumb
				heading="Full Time Maid in Pune"
				currentPage="Full Time Maid"
				bgImage="/assets/images/backgrounds/page-header-img9.webp"
			/>
			<FullTimeMaidPune />
			<BrandShowcase />
			<Footer />
		</>
	);
}
