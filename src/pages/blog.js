import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogThree from "../components/blog/BlogThree";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";

export default function BlogPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Services Blog | Dailyhand Pune - Tips & Insights"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Cleaning Blog & Tips"
                currentPage="Blog" 
				bgImage="/assets/images/backgrounds/page-header-img11.webp"
            />
			<BlogThree />
			<BrandOne />
			<FooterOne />
		</>
	);
}