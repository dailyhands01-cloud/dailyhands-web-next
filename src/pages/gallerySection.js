import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import CTASection from "../components/cta/CTASection";
import GalleryLightbox from "../components/gallery/GalleryLightbox";

export default function GalleryOnePage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Gallery & Photo Portfolio | Daily Hands Pune Projects"} />
			<Header />
			<Breadcrumb
				heading="Cleaning Photo Gallery Pune"
				currentPage="Gallery"
			/>
			<GalleryLightbox />
			<CTASection />
			<Footer />
		</>
	);
}