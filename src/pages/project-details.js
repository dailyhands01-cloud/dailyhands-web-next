import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ProjectDetails from "../components/project/ProjectDetails";
import BrandOne from "../components/brand/BrandShowcase";
import FooterOne from "../common/footer/Footer";

export default function ProjectDetailsPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Project Details in Pune | Daily Hands Case Studies"} />
			<HeaderOne />
			<Breadcrumb
				heading="Projects Details"
				currentPage="Projects Details"
			/>
			<ProjectDetails />
			<BrandOne />
			<FooterOne />
		</>
	);
}