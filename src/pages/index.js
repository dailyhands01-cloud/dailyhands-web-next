import FooterOne from "../common/footer/Footer";
import HeaderOne from "../common/header/Header";
import SEO from "../common/seo/Seo";
import AboutHero from "../components/about/AboutHero";
import BlogHero from "../components/blog/BlogHero";
import BrandShowcase from "../components/brand/BrandShowcase";
import ContactHero from "../components/contact/ContactHero";
import CTASection from "../components/cta/CTASection";
import HeroSection from "../components/hero/HeroSection";
import ProjectGrid from "../components/project/ProjectGrid";
import ServiceHero from "../components/service/ServiceHero";
import TeamHero from "../components/team/TeamHero";
import TestimonialsSection from "../components/testimonial/TestimonialsSection";
import WhyChooseUs from "../components/why-choose-us/WhyChooseUs";

export default function Home() {
	return (
		<>
			<SEO pageTitle={"Professional Cleaning Services in Pune | Daily Hands - Home & Office Cleaning"} />
			<HeaderOne />
			<HeroSection />
			<AboutHero />
			<ServiceHero />
			<ProjectGrid />
			<ContactHero />
			<TeamHero />
			<WhyChooseUs />
			<TestimonialsSection />
			<CTASection />
			<BlogHero />
			<BrandShowcase />
			<FooterOne />
		</>
	);
}