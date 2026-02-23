import BrandShowcase from "@/components/brand/BrandShowcase";
import FAQSection from "@/components/faq/FAQSection";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import ContactForm from "../components/contact/ContactForm";
import { faqData } from "@/data/faqs";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.heading,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.description,
      },
    })),
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
        name: "FAQ",
        item: "https://www.dailyhands.in/faq/",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <SEO
        pageTitle={
          "Cleaning Services FAQ | Daily Hands Pune - Common Questions Answered"
        }
        jsonLd={jsonLd}
      />
      <Header />
      <Breadcrumb
        heading="Frequently Asked Questions"
        currentPage="Faq"
        bgImage="/assets/images/backgrounds/page-header-img10.webp"
      />
      <FAQSection />
      <ContactForm />
      <BrandShowcase />
      <Footer />
    </>
  );
}
