import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import SEO from "../common/seo/Seo";
import AboutHero from "../components/about/AboutHero";
import BlogHero from "../components/blog/BlogHero";
import BrandShowcase from "../components/brand/BrandShowcase";
import ContactHero from "../components/contact/ContactHero";
import ServiceHero from "../components/service/ServiceHero";
import TeamHero from "../components/team/TeamHero";
import Header from "../common/header/Header";

export default function AboutPage() {
	return (
		<>
			<SEO pageTitle={"About Daily Hands | Professional Cleaning Services in Pune"} />
			<Header />
			<Breadcrumb
				heading="About Our Cleaning Company"
				currentPage="About"
			/>
			<AboutHero />
			<ServiceHero />
			<ContactHero />
			<TeamHero />
			<BlogHero />
			<BrandShowcase />
			<Footer />
		</>
	);
}