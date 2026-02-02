import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandPartners from "../components/brand/BrandPartners";
import ProjectGrid from "../components/project/ProjectGrid";

export default function ProjectPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Projects & Portfolio in Pune | Daily Hands Success Stories"} />
			<Header />
			<Breadcrumb
				heading="Our Cleaning Projects"
				currentPage="Projects"
			/>
			<ProjectGrid />
			<BrandPartners />
			<Footer />
		</>
	);
}