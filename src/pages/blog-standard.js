import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogStandard from "../components/blog/BlogStandard";
import BrandTwo from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";

export default function BlogStandardPage() {
	return (
		<>
			<SEO pageTitle={"Blog Standard"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Blog Standard"
                currentPage="Blog Standard" 
            />
			<BlogStandard />
			<BrandTwo />
			<FooterOne />
		</>
	);
}