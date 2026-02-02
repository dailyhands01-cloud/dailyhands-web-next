import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import GalleryOne from "../components/gallery/GalleryGrid";
import CtaOne from "../components/cta/CTASection";
import FooterOne from "../common/footer/Footer";

export default function GalleryOnePage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Gallery & Photo Portfolio | Daily Hands Pune Projects"} />
			<HeaderOne />
			<Breadcrumb
				heading="Cleaning Photo Gallery & Portfolio"
				currentPage="Gallery"
				bgImage="/assets/images/backgrounds/page-header-img9.webp"
			/>
			<GalleryOne />
			<CtaOne />
			<FooterOne />
		</>
	);
}