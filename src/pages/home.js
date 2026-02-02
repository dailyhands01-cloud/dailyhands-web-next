import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import HeroTwo from "../components/hero/HeroBanner";
import AboutTwo from "../components/about/AboutMission";
import FeaturesOne from "../components/features/FeaturesSection";
import ServiceTwo from "../components/service/ServiceFeatures";
import ProjectTwo from "../components/project/ProjectCard";
import TeamTwo from "../components/team/TeamMembers";
import VideoOne from "../components/video/VideoSection";
import FaqOne from "../components/faq/";
import TestimonialTwo from "../components/testimonial/TestimonialSlider";
import BlogTwo from "../components/blog/BlogSidebar";
import FooterOne from "../common/footer/Footer";

export default function HomeTwo() {
	return (
		<>
			<SEO pageTitle={"Daily Hands | Professional Home & Office Cleaning Services in Pune"} />
			<HeaderOne />
			<HeroTwo />
			<AboutTwo />
			<FeaturesOne />
			<ServiceTwo />
			<ProjectTwo />
			<TeamTwo />
			<VideoOne />
			<FaqOne />
			<TestimonialTwo />
			<BlogTwo />
			<FooterOne />
		</>
	);
}

