import PricingSection from "@/components/pricing/PricingSection";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import NewsletterSection from "../components/newsletters/NewsletterSection";

export default function PricingPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Service Pricing in Pune | Daily Hands Affordable Rates"} />
			<Header />
			<Breadcrumb
				heading="Cleaning Service Pricing"
				currentPage="Pricing"
				bgImage="/assets/images/backgrounds/page-header-img8.webp"
			/>
			<PricingSection />
			<NewsletterSection />
			<BrandShowcase />
			<Footer />
		</>
	);
}