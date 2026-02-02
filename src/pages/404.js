import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import ErrorContent from "../components/error/ErrorContent";
import Footer from "../common/footer/Footer";

export default function ErrorPage() {
	return (
		<>
			<SEO pageTitle={"Error Page"} />
			<Header />
			<Breadcrumb
				heading="Error Page"
				currentPage="404"
			/>
			<ErrorContent />
			<Footer />
		</>
	);
}