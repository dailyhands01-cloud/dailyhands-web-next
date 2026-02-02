import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import HouseCleaning from "../components/service/HouseCleaning";
import BrandOne from "../components/brand/BrandShowcase";
import FooterOne from "../common/footer/Footer";

export default function BusinessOptionsPage() {
	return (
		<>
			<SEO pageTitle={"Professional House Cleaning Services in Pune | Daily Hands"} />
			<HeaderOne />
			<Breadcrumb
				heading="House Cleaning Services"
				currentPage="House Cleaning"
				bgImage="/assets/images/backgrounds/page-header-img5.webp"
			/>
			<HouseCleaning />
			<BrandOne />
			<FooterOne />
		</>
	);
}