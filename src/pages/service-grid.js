import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandPartners from "../components/brand/BrandPartners";
import CTASection from "../components/cta/CTASection";
import ServiceProcess from "../components/service/ServiceProcess";

export default function ServicePageOne() {
	return (
		<>
			<SEO pageTitle={"Professional Cleaning Services in Pune | Daily Hands"} />
			<Header />
			<Breadcrumb
				heading="Our Cleaning Services"
				currentPage="Service"
			/>
			<ServiceProcess />
			<BrandPartners />
			<CTASection />
			<Footer />
		</>
	);
}