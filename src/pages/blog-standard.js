import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogStandard from "../components/blog/BlogStandard";
import BrandTwo from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";

export default function BlogStandardPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Blog Post | Dailyhand Pune - Expert Tips & Guides"} />
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