import PricingSection from "@/components/pricing/PricingSection";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import AboutCompany from "../components/about/AboutCompany";
import BlogSidebar from "../components/blog/BlogSidebar";
import BrandShowcase from "../components/brand/BrandShowcase";
import FeaturesSection from "../components/features/FeaturesSection";
import PageHero from "../components/hero/PageHero";
import ProjectCard from "../components/project/ProjectCard";
import ServiceProcess from "../components/service/ServiceProcess";
import TeamValues from "../components/team/TeamValues";
import TestimonialSlider from "../components/testimonial/TestimonialSlider";
import VideoSection from "../components/video/VideoSection";

export default function HomeThree() {
	return (
		<>
			<SEO pageTitle={"Daily Hands Cleaning Services in Pune | Professional Home & Office Cleaning"} />
			<Header />
			<PageHero />
			<AboutCompany />
			<FeaturesSection />
			<ServiceProcess />
			<ProjectCard />
			<TeamValues />
			<VideoSection />
			<PricingSection />
			<TestimonialSlider />
			<BlogSidebar />
			<BrandShowcase />
			<Footer />
		</>
	);
}