import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import TestimonialTwo from "../components/testimonial/TestimonialSlider";
import BrandTwo from "../components/brand/BrandShowcase";
import FooterOne from "../common/footer/Footer";

export default function TestimonialPage() {
	return (
		<>
			<SEO pageTitle={"Customer Testimonials | Daily Hands Cleaning Services in Pune - Trusted Reviews"} />
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