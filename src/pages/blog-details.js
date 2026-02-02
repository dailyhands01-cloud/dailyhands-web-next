import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BlogDetails from "../components/blog/BlogDetails";
import BrandShowcase from "../components/brand/BrandShowcase";

export default function BlogDetailsPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Blog Details | Daily Hands Pune - In-Depth Articles"} noindex />
			<Header />
			<Breadcrumb
				heading="Blog Post Details"
				currentPage="Blog Details"
			/>
			<BlogDetails />
			<BrandShowcase />
			<Footer />
		</>
	);
}