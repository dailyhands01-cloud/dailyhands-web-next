import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogThree from "../components/blog/BlogPagination";
import BrandOne from "../components/brand/BrandShowcase";
import FooterOne from "../common/footer/Footer";

export default function BlogPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Services Blog | Daily Hands Pune - Tips & Insights"} />
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