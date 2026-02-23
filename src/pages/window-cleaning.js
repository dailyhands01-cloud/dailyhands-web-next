import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import WindowCleaning from "../components/service/WindowCleaning";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Window Cleaning Services in Pune",
    description:
      "Streak-free professional window cleaning services for homes and offices in Pune. We clean glass panels, frames, and sills using specialized equipment.",
    image:
      "https://www.dailyhands.in/assets/images/backgrounds/page-header-img3.webp",
    url: "https://www.dailyhands.in/window-cleaning/",
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
    serviceType: "Window Cleaning",
    areaServed: "Pune, Maharashtra",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you clean high-rise apartment windows from the outside?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For high-rise apartments, we clean accessible exterior windows and glass railings. We use specialized extension poles and safety equipment for balcony glass and reachable exterior panels.",
        },
      },
      {
        "@type": "Question",
        name: "Is mosquito net cleaning included in window cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide thorough dusting and vacuuming of mosquito meshes and sliding window tracks as part of our comprehensive window cleaning service.",
        },
      },
      {
        "@type": "Question",
        name: "Will there be streaks on the glass after cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, we use specialized glass cleaning solutions and squeegees to ensure a streak-free, crystal-clear finish on all glass surfaces.",
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
        name: "Window Cleaning",
        item: "https://www.dailyhands.in/window-cleaning/",
      },
    ],
  },
];

export default function WindowCleaningPage() {
  return (
    <>
      <SEO
        pageTitle={
          "Best Window Cleaning Services in Pune | Daily Hands - Sparkling Clean Homes & Offices"
        }
        jsonLd={jsonLd}
      />
      <Header />
      <Breadcrumb
        heading="Window Cleaning Services"
        currentPage="Window Cleaning"
        bgImage="/assets/images/backgrounds/page-header-img3.webp"
      />
      <WindowCleaning />
      <BrandShowcase />
      <Footer />
    </>
  );
}
