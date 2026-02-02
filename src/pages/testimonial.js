import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import TestimonialSlider from "../components/testimonial/TestimonialSlider";

export default function TestimonialPage() {
	return (
		<>
			<SEO pageTitle={"Customer Testimonials | Daily Hands Cleaning Services in Pune - Trusted Reviews"} />
			<Header />
			<Breadcrumb
				heading="Customer Testimonials"
				currentPage="Testimonial"
				bgImage="/assets/images/backgrounds/page-header-img13.webp"
			/>
			<TestimonialSlider />
			<BrandShowcase />
			<Footer />
		</>
	);
}