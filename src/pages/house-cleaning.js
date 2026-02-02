import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import HouseCleaning from "../components/service/HouseCleaning";

export default function BusinessOptionsPage() {
	return (
		<>
			<SEO pageTitle={"Professional House Cleaning Services in Pune | Daily Hands"} />
			<Header />
			<Breadcrumb
				heading="House Cleaning Services"
				currentPage="House Cleaning"
				bgImage="/assets/images/backgrounds/page-header-img5.webp"
			/>
			<HouseCleaning />
			<BrandShowcase />
			<Footer />
		</>
	);
}