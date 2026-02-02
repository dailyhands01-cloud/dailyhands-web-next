import BrandTwo from "@/components/brand/BrandShowcase";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/Footer";
import HeaderOne from "../common/header/Header";
import SEO from "../common/seo/Seo";
import ContactTwo from "../components/contact/ContactForm";
import FaqOne from "../components/faq/";

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