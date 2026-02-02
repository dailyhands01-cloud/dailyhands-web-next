import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogDetails from "../components/blog/BlogDetails";
import FooterOne from "../common/footer/Footer";
import BrandTwo from "@/components/brand/BrandShowcase";

export default function BlogDetailsPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Blog Details | Daily Hands Pune - In-Depth Articles"} noindex />
			<HeaderOne />
			<Breadcrumb
				heading="Blog Post Details"
				currentPage="Blog Details"
			/>
			<BlogDetails />
			<BrandTwo />
			<FooterOne />
		</>
	);
}