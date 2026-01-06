import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import TeamDetails from "../components/team/TeamDetails";
import TeamOne from "../components/team/TeamOne";
import ContactFour from "../components/contact/ContactFour";
import FooterOne from "../common/footer/FooterOne";
import BrandTwo from "../components/brand/BrandTwo";

export default function TeamDetailsPage() {
	return (
		<>
			<SEO pageTitle={"Team Details"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Team Details"
                currentPage="Team Details" 
            />
			<TeamDetails />
			<TeamOne />
			<ContactFour />
			{/* <BrandTwo /> */}
			<FooterOne />
		</>
	);
}