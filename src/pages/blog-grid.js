import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogGrid from "../components/blog/BlogGrid";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";

export default function BlogGridPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Blog Grid | Daily Hands Pune - Featured Articles & Tips"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Blog Grid View"
                currentPage="Blog Grid" 
				bgImage="/assets/images/backgrounds/page-header-img11.webp"
            />
			<BlogGrid />
			<BrandOne />
			<FooterOne />
		</>
	);
}