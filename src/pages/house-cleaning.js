import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import HouseCleaning from "../components/service/HouseCleaning";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "House Cleaning Services in Pune",
    description:
      "Professional house cleaning services in Pune by Daily Hands. We offer comprehensive home cleaning including dusting, mopping, kitchen and bathroom deep cleaning.",
    image:
      "https://dailyhands.in/assets/images/resources/service-details-img6.webp",
    url: "https://dailyhands.in/house-cleaning/",
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
    serviceType: "House Cleaning",
    areaServed: "Pune, Maharashtra",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in your standard house cleaning service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our standard house cleaning includes sweeping and mopping of all floors, dusting of reachable surfaces, cleaning of mirrors, empty trash, and basic bathroom and kitchen cleaning.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a deep house cleaning take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Deep cleaning usually takes 4 to 8 hours depending on the size of the home (BHK) and its current condition. Our team works efficiently to ensure every corner is covered.",
        },
      },
      {
        "@type": "Question",
        name: "Are your cleaning products safe for pets and children?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we use eco-friendly and non-toxic cleaning agents that are safe for homes with pets and small children while still being effective against germs and stains.",
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
        name: "House Cleaning",
        item: "https://dailyhands.in/house-cleaning/",
      },
    ],
  },
];

export default function BusinessOptionsPage() {
  return (
    <>
      <SEO
        pageTitle={"Professional House Cleaning Services in Pune | Daily Hands"}
        jsonLd={jsonLd}
      />
      <Header />
      <Breadcrumb
        heading="House Cleaning Services"
        currentPage="House Cleaning"
        bgImage="/assets/images/backgrounds/page-header-img5.webp"
      />
      <HouseCleaning />
      <BrandShowcase />
      <Footer />
    </>
  );
}
