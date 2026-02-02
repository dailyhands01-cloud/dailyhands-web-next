import BrandShowcase from "@/components/brand/BrandShowcase";
import FAQSection from "@/components/faq/FAQSection";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import ContactForm from "../components/contact/ContactForm";

export default function FaqPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Services FAQ | Daily Hands Pune - Common Questions Answered"} />
			<Header />
			<Breadcrumb
				heading="Frequently Asked Questions"
				currentPage="Faq"
				bgImage="/assets/images/backgrounds/page-header-img10.webp"
			/>
			<FAQSection />
			<ContactForm />
			<BrandShowcase />
			<Footer />
		</>
	);
}