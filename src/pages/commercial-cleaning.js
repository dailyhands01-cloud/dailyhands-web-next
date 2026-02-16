import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import CommercialCleaning from "../components/service/CommercialCleaning";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Cleaning Services in Pune",
    description:
      "Expert commercial cleaning services for offices, retail spaces, warehouses, and industrial units in Pune by Daily Hands.",
    image:
      "https://dailyhands.in/assets/images/resources/service-details-img3.webp",
    url: "https://dailyhands.in/commercial-cleaning/",
    provider: {
      "@type": "LocalBusiness",
      name: "Daily Hands",
      url: "https://dailyhands.in",
      telephone: "+91-88057-79006",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "City",
        name: "Pune",
      },
    },
    serviceType: "Commercial Cleaning",
    areaServed: "Pune, Maharashtra",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer cleaning services after office hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we understand business continuity. We offer night-shift or weekend cleaning services for commercial spaces to avoid any disruption to your business operations.",
        },
      },
      {
        "@type": "Question",
        name: "What types of commercial spaces do you clean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We clean corporate offices, retail stores, showrooms, medical clinics, educational institutions, and industrial warehouses across Pune.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide Annual Maintenance Contracts (AMC) for commercial cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Daily Hands offers customized AMC packages for commercial clients, providing regular daily, weekly, or monthly cleaning schedules at discounted corporate rates.",
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
        name: "Commercial Cleaning",
        item: "https://dailyhands.in/commercial-cleaning/",
      },
    ],
  },
];

export default function LibraryBusinessPage() {
  return (
    <>
      <SEO
        pageTitle={"Commercial Cleaning Services | Daily Hands Pune"}
        jsonLd={jsonLd}
      />
      <Header />
      <Breadcrumb
        heading="Commercial Cleaning Services"
        currentPage="Commercial Cleaning"
      />
      <CommercialCleaning />
      <BrandShowcase />
      <Footer />
    </>
  );
}
