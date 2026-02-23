import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import CarCleaning from "../components/service/CarCleaning";
import Footer from "../common/footer/Footer";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Car Cleaning Services in Pune",
    description:
      "Doorstep car cleaning and detailing services in Pune. Interior vacuuming, upholstery shampooing, dashboard polishing, and exterior pressure wash.",
    image:
      "https://www.dailyhands.in/assets/images/backgrounds/page-header-img6.webp",
    url: "https://www.dailyhands.in/car-cleaning/",
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
    serviceType: "Car Cleaning",
    areaServed: "Pune, Maharashtra",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide car cleaning at my doorstep?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Daily Hands provides full car cleaning and detailing services at your home or office location across Pune. We only need access to water and electricity.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in interior car detailing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Interior detailing includes intensive vacuuming, seat shampooing/leather conditioning, dashboard polishing, roof cleaning, and door pad sanitization.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a full car cleaning service take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A complete interior and exterior cleaning typically takes 2 to 3 hours depending on the size of the vehicle (Hatchback/SEDAN/SUV) and its condition.",
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
        name: "Car Cleaning",
        item: "https://www.dailyhands.in/car-cleaning/",
      },
    ],
  },
];

export default function FocusEmergencyPage() {
  return (
    <>
      <SEO
        pageTitle={"Professional Car Cleaning Services in Pune | Daily Hands"}
        jsonLd={jsonLd}
      />
      <Header />
      <Breadcrumb
        heading="Professional Car Cleaning Services in Pune"
        currentPage="Car Cleaning"
        bgImage="/assets/images/backgrounds/page-header-img6.webp"
      />
      <CarCleaning />
      <BrandShowcase />
      <Footer />
    </>
  );
}
