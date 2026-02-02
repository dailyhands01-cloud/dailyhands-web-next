import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import CommercialCleaning from "../components/service/CommercialCleaning";
import BrandOne from "../components/brand/BrandShowcase";
import FooterOne from "../common/footer/Footer";

export default function LibraryBusinessPage() {
	return (
		<>
			<SEO pageTitle={"Commercial Cleaning Services | Daily Hands Pune"} />
			<HeaderOne />
			<Breadcrumb
				heading="Commercial Cleaning Services"
				currentPage="Commercial Cleaning"
			/>
			<CommercialCleaning />
			<BrandOne />
			<FooterOne />
		</>
	);
}