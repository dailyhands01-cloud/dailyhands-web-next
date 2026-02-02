import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BlogPagination from "../components/blog/BlogPagination";
import BrandShowcase from "../components/brand/BrandShowcase";

export default function BlogPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Services Blog | Daily Hands Pune - Tips & Insights"} />
			<Header />
			<Breadcrumb
				heading="Cleaning Blog & Tips"
				currentPage="Blog"
				bgImage="/assets/images/backgrounds/page-header-img11.webp"
			/>
			<BlogPagination />
			<BrandShowcase />
			<Footer />
		</>
	);
}