import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogList from "../components/blog/BlogList";
import BrandOne from "../components/brand/BrandOne";
import FooterOne from "../common/footer/FooterOne";

export default function BlogListPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Services Blog | Dailyhand Pune - Latest Articles & Tips"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Blog Articles List"
                currentPage="Blog List" 
            />
			<BlogList />
			<BrandOne />
			<FooterOne />
		</>
	);
}