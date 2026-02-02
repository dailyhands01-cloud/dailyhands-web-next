import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/Footer";
import HeaderOne from "../common/header/Header";
import SEO from "../common/seo/Seo";
import ContactFour from "../components/contact/ContactCTA";
import TeamDetails from "../components/team/TeamDetails";
import TeamOne from "../components/team/TeamHero";

export default function TeamDetailsPage() {
	return (
		<>
			<SEO pageTitle={"Expert Cleaning Team Details in Pune | Daily Hands Professionals"} />
			<HeaderOne />
			<Breadcrumb
				heading="Our Professional Team Details"
				currentPage="Team Details"
				bgImage="/assets/images/backgrounds/page-header-img7.webp"
			/>
			<TeamDetails />
			<TeamOne />
			<ContactFour />
			{/* <BrandTwo /> */}
			<FooterOne />
		</>
	);
}