import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/Footer";
import HeaderOne from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandOne from "../components/brand/BrandShowcase";
import CtaOne from "../components/cta/CTASection";
import ServiceOne from "../components/service/ServiceHero";

export default function ServicePageOne() {
	return (
		<>
			<SEO pageTitle={"Professional Cleaning Services in Pune | Daily Hands"} />
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