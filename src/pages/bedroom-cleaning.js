import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SEO from "../common/seo/Seo";
import BedroomCleaning from "../components/service/BedroomCleaning";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import BrandShowcase from "../components/brand/BrandShowcase";

export default function BusinessGroceryPage() {
	return (
		<>
			<SEO pageTitle={"Professional Bedroom Cleaning Services in Pune | Daily Hands"} />
			<Header />
			<Breadcrumb
				heading="Bedroom Cleaning Services"
				currentPage="Bedroom Cleaning"
				bgImage="/assets/images/backgrounds/page-header-img2.webp"
			/>
			<BedroomCleaning />
			<BrandShowcase />
			<Footer />
		</>
	);
}