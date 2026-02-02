import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import PricingOne from "../components/pricing/";
import NewsletterOne from "../components/newsletters/NewsletterSection";
import BrandTwo from "../components/brand/BrandShowcase";
import FooterOne from "../common/footer/Footer";

export default function PricingPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Service Pricing in Pune | Daily Hands Affordable Rates"} />
			<HeaderOne />
			<Breadcrumb
				heading="Cleaning Service Pricing"
				currentPage="Pricing"
				bgImage="/assets/images/backgrounds/page-header-img8.webp"
			/>
			<PricingOne />
			<NewsletterOne />
			<BrandTwo />
			<FooterOne />
		</>
	);
}