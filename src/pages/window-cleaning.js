import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import WindowCleaning from "../components/service/WindowCleaning";
import BrandOne from "../components/brand/BrandShowcase";
import FooterOne from "../common/footer/Footer";

export default function WindowCleaningPage() {
	return (
		<>
			<SEO pageTitle={"Best Window Cleaning Services in Pune | Daily Hands - Sparkling Clean Homes & Offices"} />
			<HeaderOne />
			<Breadcrumb
				heading="Window Cleaning Services"
				currentPage="Window Cleaning"
				bgImage="/assets/images/backgrounds/page-header-img3.webp"
			/>
			<WindowCleaning />
			<BrandOne />
			<FooterOne />
		</>
	);
}