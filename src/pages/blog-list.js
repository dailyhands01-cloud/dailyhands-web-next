import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BlogList from "../components/blog/BlogList";
import BrandShowcase from "../components/brand/BrandShowcase";

export default function BlogListPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Services Blog | Daily Hands Pune - Latest Articles & Tips"} />
			<Header />
			<Breadcrumb
				heading="Blog Articles List"
				currentPage="Blog List"
			/>
			<BlogList />
			<BrandShowcase />
			<Footer />
		</>
	);
}