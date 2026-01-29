import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import HouseCleaning from "../components/service/HouseCleaning";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";

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