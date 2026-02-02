import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogStandard from "../components/blog/BlogStandard";
import BrandTwo from "../components/brand/BrandShowcase";
import FooterOne from "../common/footer/Footer";

export default function BlogStandardPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Blog Post | Daily Hands Pune - Expert Tips & Guides"} />
			<HeaderOne />
			<Breadcrumb
				heading="Blog Article - Cleaning Tips & Guides"
				currentPage="Blog Standard"
			/>
			<BlogStandard />
			<BrandTwo />
			<FooterOne />
		</>
	);
}