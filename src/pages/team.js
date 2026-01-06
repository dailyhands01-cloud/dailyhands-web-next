import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import TeamThree from "../components/team/TeamThree";
import BrandOne from "../components/brand/BrandOne";
import FooterOne from "../common/footer/FooterOne";
import BrandThree from "@/components/brand/BrandThree";
import BrandTwo from "@/components/brand/BrandTwo";

export default function TeamPage() {
	return (
		<>
			<SEO pageTitle={"Team Page"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Team Page"
                currentPage="Team" 
            />
			<TeamThree />
			<BrandTwo />
			<FooterOne />
		</>
	);
}