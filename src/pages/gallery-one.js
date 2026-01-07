import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import GalleryOne from "../components/gallery/GalleryOne";
import CtaOne from "../components/cta/CtaOne";
import FooterOne from "../common/footer/FooterOne";

export default function GalleryOnePage() {
	return (
		<>
			<SEO pageTitle={"Gallery"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Gallery"
                currentPage="Gallery" 
            />
			<GalleryOne />
			<CtaOne />
			<FooterOne />
		</>
	);
}