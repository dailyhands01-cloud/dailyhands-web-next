import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import CTASection from "../components/cta/CTASection";
import ServiceHero from "../components/service/ServiceHero";

export default function ServicePageOne() {
	return (
		<>
			<SEO pageTitle={"Professional Cleaning Services in Pune | Daily Hands"} />
			<Header />
			<Breadcrumb
				heading="Our Cleaning Services"
				currentPage="Service"
			/>
			<ServiceHero />
			<BrandShowcase />
			<CTASection />
			<Footer />
		</>
	);
}