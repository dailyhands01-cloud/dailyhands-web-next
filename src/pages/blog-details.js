import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogDetails from "../components/blog/BlogDetails";
import FooterOne from "../common/footer/FooterOne";
import BrandTwo from "@/components/brand/BrandTwo";

export default function BlogDetailsPage() {
	return (
		<>
			<SEO pageTitle={"Blog Details Page"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Blog Details Page"
                currentPage="Blog Details" 
            />
			<BlogDetails />
			<BrandTwo />
			<FooterOne />
		</>
	);
}