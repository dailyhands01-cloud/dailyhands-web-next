import BrandTwo from "@/components/brand/BrandShowcase";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/Footer";
import HeaderOne from "../common/header/Header";
import SEO from "../common/seo/Seo";
import TeamThree from "../components/team/TeamValues";

export default function TeamPage() {
	return (
		<>
			<SEO pageTitle={"Meet Our Expert Cleaning Team in Pune | Daily Hands Professionals"} />
			<HeaderOne />
			<Breadcrumb
				heading="Our Professional Team"
				currentPage="Team"
				bgImage="/assets/images/backgrounds/page-header-img7.webp"
			/>
			<TeamThree />
			<BrandTwo />
			<FooterOne />
		</>
	);
}