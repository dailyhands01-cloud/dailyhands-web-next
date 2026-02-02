import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import CommercialCleaning from "../components/service/CommercialCleaning";

export default function LibraryBusinessPage() {
	return (
		<>
			<SEO pageTitle={"Commercial Cleaning Services | Daily Hands Pune"} />
			<Header />
			<Breadcrumb
				heading="Commercial Cleaning Services"
				currentPage="Commercial Cleaning"
			/>
			<CommercialCleaning />
			<BrandShowcase />
			<Footer />
		</>
	);
}