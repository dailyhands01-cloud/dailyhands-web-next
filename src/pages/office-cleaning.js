import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import OfficeCleaning from "../components/service/OfficeCleaning";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";

export default function OfficeCleaningPage() {
	return (
		<>
			<SEO pageTitle={"Professional Office Cleaning Services in Pune | Daily Hands"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Office Cleaning Services"
                currentPage="Office Cleaning" 
				bgImage="/assets/images/backgrounds/page-header-img4.webp"
            />
			<OfficeCleaning />
			<BrandOne />
			<FooterOne />
		</>
	);
}