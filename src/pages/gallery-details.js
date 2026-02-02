import HeaderOne from "@/common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/Footer";
import SEO from "../common/seo/Seo";
import CtaOne from "../components/cta/CTASection";
import GalleryDetails from "../components/gallery/GalleryDetails";

export default function GalleryDetailsPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Gallery Details | Daily Hands Pune Project Photos"} />
			<HeaderOne />
			<Breadcrumb
				heading="Gallery Project Details"
				currentPage="Gallery Details"
				bgImage="/assets/images/backgrounds/page-header-img9.webp"
			/>
			<GalleryDetails />
			<CtaOne />
			<FooterOne />
		</>
	);
}