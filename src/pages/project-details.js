import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import ProjectDetails from "../components/project/ProjectDetails";

export default function ProjectDetailsPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Project Details in Pune | Daily Hands Case Studies"} />
			<Header />
			<Breadcrumb
				heading="Projects Details"
				currentPage="Projects Details"
			/>
			<ProjectDetails />
			<BrandShowcase />
			<Footer />
		</>
	);
}