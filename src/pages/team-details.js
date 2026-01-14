import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";
import ContactFour from "../components/contact/ContactFour";
import TeamDetails from "../components/team/TeamDetails";
import TeamOne from "../components/team/TeamOne";

export default function TeamDetailsPage() {
	return (
		<>
			<SEO pageTitle={"Expert Cleaning Team Details in Pune | Dailyhand Professionals"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Team Details"
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