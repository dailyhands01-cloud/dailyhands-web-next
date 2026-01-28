import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";
import BrandOne from "../components/brand/BrandTwo";
import CtaOne from "../components/cta/CtaOne";
import ServiceOne from "../components/service/ServiceOne";

export default function ServicePageOne() {
	return (
		<>
			<SEO pageTitle={"Professional Cleaning Services in Pune | Dailyhand"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Our Cleaning Services"
                currentPage="Service" 
            />
			<ServiceOne />
			<BrandOne />
			<CtaOne />
			<FooterOne />
		</>
	);
}