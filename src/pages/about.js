import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import AboutOne from "../components/about/AboutOne";
import ServiceOne from "../components/service/ServiceOne";
import ContactOne from "../components/contact/ContactOne";
import TeamOne from "../components/team/TeamOne";
import BlogOne from "../components/blog/BlogOne";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";

export default function AboutPage() {
	return (
		<>
			<SEO pageTitle={"About Dailyhand | Professional Cleaning Services in Pune"} />
			<HeaderOne />
			<Breadcrumb 
                heading="About Our Cleaning Company"
                currentPage="About" 
            />
			<AboutOne />
			<ServiceOne />
			<ContactOne />
			<TeamOne />
			<BlogOne />
			<BrandOne />
			<FooterOne />
		</>
	);
}