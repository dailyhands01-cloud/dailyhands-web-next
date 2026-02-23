import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import CTASection from "../components/cta/CTASection";
import ServiceHero from "../components/service/ServiceHero";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Cleaning Services in Pune",
    description:
      "Explore our full range of cleaning services including home deep cleaning, office sanitization, sofa cleaning, and maid services in Pune.",
    url: "https://www.dailyhands.in/service/",
    provider: {
      "@type": "LocalBusiness",
      name: "Daily Hands",
      url: "https://www.dailyhands.in",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What sets Daily Hands' cleaning services apart?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use eco-friendly, professional-grade cleaning solutions and industrial equipment to ensure a deeper, healthier clean compared to traditional methods.",
        },
      },
      {
        "@type": "Question",
        name: "Can I customize the cleaning services as per my needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all our services are highly customizable. You can request specific areas to be focused on or add-on services like fridge or oven cleaning.",
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
        item: "https://www.dailyhands.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.dailyhands.in/service/",
      },
    ],
  },
];

export default function ServicePageOne() {
  return (
    <>
      <SEO
        pageTitle={"Professional Cleaning Services in Pune | Daily Hands"}
        jsonLd={jsonLd}
      />
      <Header />
      <Breadcrumb heading="Our Cleaning Services" currentPage="Service" />
      <ServiceHero />
      <BrandShowcase />
      <CTASection />
      <Footer />
    </>
  );
}
