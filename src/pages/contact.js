import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ContactInfo from "../components/contact/ContactInfo";
import ContactThree from "../components/contact/ContactThree";
import ContactMap from "../components/contact/ContactMap";
import FooterOne from "../common/footer/FooterOne";

export default function ContactPage() {
	return (
		<>
			<SEO pageTitle={"Contact Daily Hands Cleaning Services | Pune Office Location & Phone"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Contact Us"
                currentPage="Contact" 
				bgImage="/assets/images/backgrounds/page-header-img14.webp"
            />
			<ContactInfo />
			<ContactThree />
			<ContactMap />
			<FooterOne />
		</>
	);
}