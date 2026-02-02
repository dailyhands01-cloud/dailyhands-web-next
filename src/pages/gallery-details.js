import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import CTASection from "../components/cta/CTASection";
import GalleryDetails from "../components/gallery/GalleryDetails";

export default function GalleryDetailsPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning Gallery Details | Daily Hands Pune Project Photos"} />
			<Header />
			<Breadcrumb
				heading="Gallery Project Details"
				currentPage="Gallery Details"
				bgImage="/assets/images/backgrounds/page-header-img9.webp"
			/>
			<GalleryDetails />
			<CTASection />
			<Footer />
		</>
	);
}