import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import PricingOne from "../components/pricing/PricingOne";
import NewsletterOne from "../components/newsletters/NewsletterOne";
import BrandTwo from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";

export default function PricingPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Service Pricing"} />
			<HeaderOne />
			<Breadcrumb
                heading="Cleaning Service Pricing"
                currentPage="Pricing"
				bgImage="/assets/images/backgrounds/page-header-img8.jpg"
            />
			<PricingOne />
			<NewsletterOne />
			<BrandTwo />
			<FooterOne />
		</>
	);
}