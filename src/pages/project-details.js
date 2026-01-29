import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ProjectDetails from "../components/project/ProjectDetails";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";

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