import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import ContactDetails from "../components/contact/ContactDetails";
import ContactInfo from "../components/contact/ContactInfo";
import ContactMap from "../components/contact/ContactMap";

export default function ContactPage() {
	return (
		<>
			<SEO pageTitle={"Contact Daily Hands Cleaning Services | Pune Office Location & Phone"} />
			<Header />
			<Breadcrumb
				heading="Contact Us"
				currentPage="Contact"
				bgImage="/assets/images/backgrounds/page-header-img14.webp"
			/>
			<ContactInfo />
			<ContactDetails />
			<ContactMap />
			<Footer />
		</>
	);
}