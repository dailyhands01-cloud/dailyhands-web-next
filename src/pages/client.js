import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandClients from "../components/brand/BrandClients";
import BrandPartners from "../components/brand/BrandPartners";
import CTASection from "../components/cta/CTASection";

export default function ClientPage() {
	return (
		<>
			<SEO pageTitle={"Our Clients & Partners | Daily Hands Cleaning Services Pune"} />
			<Header />
			<Breadcrumb
				heading="Our Valued Clients"
				currentPage="Client Page"
			/>
			<BrandClients />
			<BrandPartners />
			<CTASection />
			<Footer />
		</>
	);
}