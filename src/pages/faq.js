import BrandTwo from "@/components/brand/BrandTwo";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";
import ContactTwo from "../components/contact/ContactTwo";
import FaqOne from "../components/faq/FaqOne";

export default function FaqPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Services FAQ | Daily Hands Pune - Common Questions Answered"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Frequently Asked Questions"
                currentPage="Faq" 
				bgImage="/assets/images/backgrounds/page-header-img10.webp"
            />
			<FaqOne />
			<ContactTwo />
			<BrandTwo />
			<FooterOne />
		</>
	);
}