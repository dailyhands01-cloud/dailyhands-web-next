import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import WindowCleaning from "../components/service/WindowCleaning";

export default function WindowCleaningPage() {
	return (
		<>
			<SEO pageTitle={"Best Window Cleaning Services in Pune | Daily Hands - Sparkling Clean Homes & Offices"} />
			<Header />
			<Breadcrumb
				heading="Window Cleaning Services"
				currentPage="Window Cleaning"
				bgImage="/assets/images/backgrounds/page-header-img3.webp"
			/>
			<WindowCleaning />
			<BrandShowcase />
			<Footer />
		</>
	);
}