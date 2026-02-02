import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BlogStandard from "../components/blog/BlogStandard";
import BrandShowcase from "../components/brand/BrandShowcase";

export default function BlogStandardPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Blog Post | Daily Hands Pune - Expert Tips & Guides"} />
			<Header />
			<Breadcrumb
				heading="Blog Article - Cleaning Tips & Guides"
				currentPage="Blog Standard"
			/>
			<BlogStandard />
			<BrandShowcase />
			<Footer />
		</>
	);
}