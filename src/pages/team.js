import BrandTwo from "@/components/brand/BrandTwo";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";
import TeamThree from "../components/team/TeamThree";

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