import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ProjectOne from "../components/project/ProjectGrid";
import BrandOne from "../components/brand/BrandPartners";
import FooterOne from "../common/footer/Footer";

export default function ProjectPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Projects & Portfolio in Pune | Daily Hands Success Stories"} />
			<HeaderOne />
			<Breadcrumb
				heading="Our Cleaning Projects"
				currentPage="Projects"
			/>
			<ProjectOne />
			<BrandOne />
			<FooterOne />
		</>
	);
}