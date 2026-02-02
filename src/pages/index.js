import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/Header";
import HeroOne from "../components/hero/HeroSection";
import AboutOne from "../components/about/AboutHero";
import ServiceOne from "../components/service/ServiceHero";
import ProjectOne from "../components/project/ProjectGrid";
import ContactOne from "../components/contact/ContactHero";
import TeamOne from "../components/team/TeamHero";
import WhyChooseUsOne from "../components/why-choose-us/WhyChooseUs";
import TestimonialOne from "../components/testimonial/TestimonialsSection";
import CtaOne from "../components/cta/CTASection";
import BlogOne from "../components/blog/BlogHero";
import BrandOne from "../components/brand/BrandShowcase";
import FooterOne from "../common/footer/Footer";

export default function Home() {
	return (
		<>
			<SEO pageTitle={"Professional Cleaning Services in Pune | Daily Hands - Home & Office Cleaning"} />
			<HeaderOne />
			<HeroOne />
			<AboutOne />
			<ServiceOne />
			<ProjectOne />
			<ContactOne />
			<TeamOne />
			<WhyChooseUsOne />
			<TestimonialOne />
			<CtaOne />
			<BlogOne />
			<BrandOne />
			<FooterOne />
		</>
	);
}