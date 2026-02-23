import PricingSection from "@/components/pricing/PricingSection";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import NewsletterSection from "../components/newsletters/NewsletterSection";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do you calculate your cleaning service prices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our prices are primarily based on the size of the property (BHK) and the type of cleaning (Standard vs. Deep Clean). We offer flat-rate pricing for transparency.",
        },
      },
      {
        "@type": "Question",
        name: "Are cleaning materials and equipment included in the price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our quoted prices are inclusive of all professional cleaning agents, specialized equipment, and staff labor costs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer any discounts on Annual Maintenance Contracts (AMC)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer significant discounts on long-term contracts for regular daily or weekly basic cleaning services.",
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
        name: "Pricing",
        item: "https://www.dailyhands.in/pricing/",
      },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <SEO
        pageTitle={
          "Cleaning Service Pricing in Pune | Daily Hands Affordable Rates"
        }
        jsonLd={jsonLd}
      />
      <Header />
      <Breadcrumb
        heading="Cleaning Service Pricing"
        currentPage="Pricing"
        bgImage="/assets/images/backgrounds/page-header-img8.webp"
      />
      <PricingSection />
      <NewsletterSection />
      <BrandShowcase />
      <Footer />
    </>
  );
}
