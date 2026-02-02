import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SEO from "../common/seo/Seo";
import BlogGrid from "../components/blog/BlogGrid";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import BrandShowcase from "../components/brand/BrandShowcase";

export default function BlogGridPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Blog Grid | Daily Hands Pune - Featured Articles & Tips"} />
			<Header />
			<Breadcrumb
				heading="Blog Grid View"
				currentPage="Blog Grid"
				bgImage="/assets/images/backgrounds/page-header-img11.webp"
			/>
			<BlogGrid />
			<BrandShowcase />
			<Footer />
		</>
	);
}