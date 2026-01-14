import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import TestimonialTwo from "../components/testimonial/TestimonialTwo";
import BrandTwo from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";

export default function TestimonialPage() {
	return (
		<>
			<SEO pageTitle={"Customer Testimonials | Dailyhand Cleaning Services in Pune - Trusted Reviews"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Customer Testimonials"
                currentPage="Testimonial" 
				bgImage="/assets/images/backgrounds/page-header-img13.webp"
            />
			<TestimonialTwo />
			<BrandTwo />
			<FooterOne />
		</>
	);
}