import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import GalleryOne from "../components/gallery/GalleryOne";
import CtaOne from "../components/cta/CtaOne";
import FooterOne from "../common/footer/FooterOne";

export default function GalleryOnePage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Gallery & Photo Portfolio | Dailyhand Pune Projects"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Cleaning Photo Gallery Pune"
                currentPage="Gallery" 
				bgImage="/assets/images/backgrounds/page-header-img9.webp"
            />
			<GalleryOne />
			<CtaOne />
			<FooterOne />
		</>
	);
}