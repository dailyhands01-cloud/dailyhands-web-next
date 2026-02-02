import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import HeroThree from "../components/hero/PageHero";
import AboutThree from "../components/about/AboutCompany";
import FeaturesOne from "../components/features/FeaturesSection";
import ServiceThree from "../components/service/ServiceProcess";
import ProjectTwo from "../components/project/ProjectCard";
import TeamThree from "../components/team/TeamValues";
import VideoOne from "../components/video/VideoSection";
import PricingOne from "../components/pricing/";
import TestimonialTwo from "../components/testimonial/TestimonialSlider";
import BlogTwo from "../components/blog/BlogSidebar";
import BrandOne from "../components/brand/BrandPartners";
import FooterOne from "../common/footer/Footer";

export default function HomeThree() {
	return (
		<>
			<SEO pageTitle={"Daily Hands Cleaning Services in Pune | Professional Home & Office Cleaning"} />
			<HeaderOne />
			<HeroThree />
			<AboutThree />
			<FeaturesOne />
			<ServiceThree />
			<ProjectTwo />
			<TeamThree />
			<VideoOne />
			<PricingOne />
			<TestimonialTwo />
			<BlogTwo />
			<BrandOne />
			<FooterOne />
		</>
	);
}