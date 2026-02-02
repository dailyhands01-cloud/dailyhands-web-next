import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import TeamValues from "../components/team/TeamValues";
import BrandShowcase from "../components/brand/BrandShowcase";

export default function TeamPage() {
	return (
		<>
			<SEO pageTitle={"Meet Our Expert Cleaning Team in Pune | Daily Hands Professionals"} />
			<Header />
			<Breadcrumb
				heading="Our Professional Team"
				currentPage="Team"
				bgImage="/assets/images/backgrounds/page-header-img7.webp"
			/>
			<TeamValues />
			<BrandShowcase />
			<Footer />
		</>
	);
}