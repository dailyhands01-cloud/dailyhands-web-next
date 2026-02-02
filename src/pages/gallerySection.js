import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import GalleryTwo from "../components/gallery/GalleryLightbox";
import CtaOne from "../components/cta/CTASection";
import FooterOne from "../common/footer/Footer";

export default function GalleryOnePage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Gallery & Photo Portfolio | Daily Hands Pune Projects"} />
			<HeaderOne />
			<Breadcrumb
				heading="Cleaning Photo Gallery Pune"
				currentPage="Gallery"
			/>
			<GalleryTwo />
			<CtaOne />
			<FooterOne />
		</>
	);
}