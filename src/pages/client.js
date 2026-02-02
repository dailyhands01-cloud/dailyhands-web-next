import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BrandThree from "../components/brand/BrandClients";
import BrandOne from "../components/brand/BrandPartners";
import CtaOne from "../components/cta/CTASection";
import FooterOne from "../common/footer/Footer";

export default function ClientPage() {
	return (
		<>
			<SEO pageTitle={"Our Clients & Partners | Daily Hands Cleaning Services Pune"} />
			<HeaderOne />
			<Breadcrumb
				heading="Our Valued Clients"
				currentPage="Client Page"
			/>
			<BrandThree />
			<BrandOne />
			<CtaOne />
			<FooterOne />
		</>
	);
}