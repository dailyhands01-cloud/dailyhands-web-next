import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import CarCleaning from "../components/service/CarCleaning";
import Footer from "../common/footer/Footer";

export default function FocusEmergencyPage() {
	return (
		<>
			<SEO pageTitle={"Professional Car Cleaning Services in Pune | Daily Hands"} />
			<Header />
			<Breadcrumb
				heading="Professional Car Cleaning Services in Pune"
				currentPage="Car Cleaning"
				bgImage="/assets/images/backgrounds/page-header-img6.webp"
			/>
			<CarCleaning />
			<BrandShowcase />
			<Footer />
		</>
	);
}