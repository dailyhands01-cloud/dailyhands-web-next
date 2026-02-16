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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Daily Hands",
    url: "https://dailyhands.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://dailyhands.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Daily Hands",
    image: "https://dailyhands.in/assets/images/resources/logo-1.png",
    "@id": "https://dailyhands.in",
    url: "https://dailyhands.in",
    telephone: "+91-88057-79006",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pune",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.5204,
      longitude: 73.8567,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    sameAs: [
      "https://www.facebook.com/dailyhands.in",
      "https://www.instagram.com/dailyhands.in",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What cleaning services does Daily Hands provide in Pune?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Daily Hands provides a wide range of professional cleaning services in Pune, including house cleaning, office cleaning, sofa cleaning, carpet cleaning, bathroom deep cleaning, and full-time or part-time maid services.",
        },
      },
      {
        "@type": "Question",
        name: "Are Daily Hands cleaners background-verified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all our cleaning professionals undergo strict background verification and intensive training to ensure safety, reliability, and top-quality service for our clients in Pune.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book a cleaning service with Daily Hands?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can easily book our services through our website, by calling us at +91-88057-79006, or via WhatsApp. We offer flexible scheduling to suit your needs.",
        },
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <SEO
        pageTitle={
          "Professional Cleaning Services in Pune | Daily Hands - Home & Office Cleaning"
        }
        jsonLd={jsonLd}
      />
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
