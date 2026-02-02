import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import OfficeCleaning from "../components/service/OfficeCleaning";

export default function OfficeCleaningPage() {
	return (
		<>
			<SEO pageTitle={"Professional Office Cleaning Services in Pune | Daily Hands"} />
			<Header />
			<Breadcrumb
				heading="Office Cleaning Services"
				currentPage="Office Cleaning"
				bgImage="/assets/images/backgrounds/page-header-img4.webp"
			/>
			<OfficeCleaning />
			<BrandShowcase />
			<Footer />
		</>
	);
}