import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BedroomCleaning from "../components/service/BedroomCleaning";
import BrandOne from "../components/brand/BrandShowcase";
import FooterOne from "../common/footer/Footer";

export default function BusinessGroceryPage() {
	return (
		<>
			<SEO pageTitle={"Professional Bedroom Cleaning Services in Pune | Daily Hands"} />
			<HeaderOne />
			<Breadcrumb
				heading="Bedroom Cleaning Services"
				currentPage="Bedroom Cleaning"
				bgImage="/assets/images/backgrounds/page-header-img2.webp"
			/>
			<BedroomCleaning />
			<BrandOne />
			<FooterOne />
		</>
	);
}