import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import ContactCTA from "../components/contact/ContactCTA";
import TeamDetails from "../components/team/TeamDetails";
import TeamHero from "../components/team/TeamHero";

export default function TeamDetailsPage() {
	return (
		<>
			<SEO pageTitle={"Expert Cleaning Team Details in Pune | Daily Hands Professionals"} />
			<Header />
			<Breadcrumb
				heading="Our Professional Team Details"
				currentPage="Team Details"
				bgImage="/assets/images/backgrounds/page-header-img7.webp"
			/>
			<TeamDetails />
			<TeamHero />
			<ContactCTA />
			{/* <BrandTwo /> */}
			<Footer />
		</>
	);
}