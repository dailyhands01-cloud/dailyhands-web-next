import FAQSection from "@/components/faq/FAQSection";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import AboutMission from "../components/about/AboutMission";
import BlogSidebar from "../components/blog/BlogSidebar";
import FeaturesSection from "../components/features/FeaturesSection";
import HeroBanner from "../components/hero/HeroBanner";
import ProjectCard from "../components/project/ProjectCard";
import ServiceFeatures from "../components/service/ServiceFeatures";
import TeamMembers from "../components/team/TeamMembers";
import TestimonialSlider from "../components/testimonial/TestimonialSlider";
import VideoSection from "../components/video/VideoSection";

export default function HomeTwo() {
	return (
		<>
			<SEO pageTitle={"Daily Hands | Professional Home & Office Cleaning Services in Pune"} />
			<Header />
			<HeroBanner />
			<AboutMission />
			<FeaturesSection />
			<ServiceFeatures />
			<ProjectCard />
			<TeamMembers />
			<VideoSection />
			<FAQSection />
			<TestimonialSlider />
			<BlogSidebar />
			<Footer />
		</>
	);
}

