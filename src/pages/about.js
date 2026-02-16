import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import SEO from "../common/seo/Seo";
import AboutHero from "../components/about/AboutHero";
import BlogHero from "../components/blog/BlogHero";
import BrandShowcase from "../components/brand/BrandShowcase";
import ContactHero from "../components/contact/ContactHero";
import ServiceHero from "../components/service/ServiceHero";
import TeamHero from "../components/team/TeamHero";
import Header from "../common/header/Header";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Daily Hands",
    description:
      "Daily Hands is Pune's leading professional cleaning service provider, dedicated to delivering high-quality, reliable, and affordable home and office cleaning solutions.",
    url: "https://dailyhands.in/about/",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the mission of Daily Hands?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our mission is to provide hassle-free, professional cleaning services that improve the quality of life for our customers in Pune by maintaining healthy and clean environments.",
        },
      },
      {
        "@type": "Question",
        name: "Are your cleaning staff trained and verified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Every member of our cleaning team undergoes rigorous training and background verification to ensure they meet our high standards of service and safety.",
        },
      },
      {
        "@type": "Question",
        name: "Does Daily Hands serve all areas of Pune?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide our full range of cleaning services across all major residential and commercial areas in Pune and Pimpri-Chinchwad.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dailyhands.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://dailyhands.in/about/",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        pageTitle={"About Daily Hands | Professional Cleaning Services in Pune"}
        jsonLd={jsonLd}
      />
      <Header />
      <Breadcrumb heading="About Our Cleaning Company" currentPage="About" />
      <AboutHero />
      <ServiceHero />
      <ContactHero />
      <TeamHero />
      <BlogHero />
      <BrandShowcase />
      <Footer />
    </>
  );
}
