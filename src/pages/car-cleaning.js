import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import CarCleaning from "../components/service/CarCleaning";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";

export default function FocusEmergencyPage() {
	return (
		<>
			<SEO pageTitle={"Car Cleaning"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Car Cleaning"
                currentPage="Car Cleaning" 
				bgImage="/assets/images/backgrounds/page-header-img6.jpg"
            />
			<CarCleaning />
			<BrandOne />
			<FooterOne />
		</>
	);
}