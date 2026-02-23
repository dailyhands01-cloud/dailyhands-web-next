import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SEO from "../common/seo/Seo";
import BedroomCleaning from "../components/service/BedroomCleaning";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import BrandShowcase from "../components/brand/BrandShowcase";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bedroom Cleaning Services in Pune",
    description:
      "Professional bedroom cleaning services including mattress sanitization, wardrobe dusting, and floor deep cleaning by Daily Hands Pune.",
    image:
      "https://www.dailyhands.in/assets/images/backgrounds/page-header-img2.webp",
    url: "https://www.dailyhands.in/bedroom-cleaning/",
    provider: {
      "@type": "LocalBusiness",
      name: "Daily Hands",
      url: "https://www.dailyhands.in",
      telephone: "+91-88057-79006",
      priceRange: "₹",
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
    serviceType: "Bedroom Cleaning",
    areaServed: "Pune, Maharashtra",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you clean inside the wardrobes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Internal wardrobe cleaning is included if the wardrobes are emptied beforehand. Our team will dust and sanitize all shelves and drawers.",
        },
      },
      {
        "@type": "Question",
        name: "Is mattress vacuuming included in bedroom cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide high-suction vacuuming for mattresses to remove dust mites and allergens as part of our bedroom cleaning package.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I get my bedroom professionally cleaned?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend a professional deep clean every 3-4 months to maintain hygiene and reduce allergens in your sleeping area.",
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
        name: "Bedroom Cleaning",
        item: "https://www.dailyhands.in/bedroom-cleaning/",
      },
    ],
  },
];

export default function BusinessGroceryPage() {
  return (
    <>
      <SEO
        pageTitle={
          "Professional Bedroom Cleaning Services in Pune | Daily Hands"
        }
        jsonLd={jsonLd}
      />
      <Header />
      <Breadcrumb
        heading="Bedroom Cleaning Services"
        currentPage="Bedroom Cleaning"
        bgImage="/assets/images/backgrounds/page-header-img2.webp"
      />
      <BedroomCleaning />
      <BrandShowcase />
      <Footer />
    </>
  );
}
