import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/Footer";
import HeaderOne from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandOne from "../components/brand/BrandPartners";
import CtaOne from "../components/cta/CTASection";
import ServiceThree from "../components/service/ServiceProcess";

export default function ServicePageOne() {
	return (
		<>
			<SEO pageTitle={"Professional Cleaning Services in Pune | Daily Hands"} />
			<HeaderOne />
			<Breadcrumb
				heading="Our Cleaning Services"
				currentPage="Service"
			/>
			<ServiceThree />
			<BrandOne />
			<CtaOne />
			<FooterOne />
		</>
	);
}