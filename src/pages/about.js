import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import AboutOne from "../components/about/AboutHero";
import ServiceOne from "../components/service/ServiceHero";
import ContactOne from "../components/contact/ContactHero";
import TeamOne from "../components/team/TeamHero";
import BlogOne from "../components/blog/BlogHero";
import BrandOne from "../components/brand/BrandShowcase";
import FooterOne from "../common/footer/Footer";

export default function AboutPage() {
	return (
		<>
			<SEO pageTitle={"About Daily Hands | Professional Cleaning Services in Pune"} />
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