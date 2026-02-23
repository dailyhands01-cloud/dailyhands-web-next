import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import BrandShowcase from "../components/brand/BrandShowcase";
import OfficeCleaning from "../components/service/OfficeCleaning";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Office Cleaning Services in Pune",
    description:
      "Complete office cleaning solutions in Pune. Workstation sanitization, carpet vacuuming, glass partition cleaning, and pantry hygiene maintenance by Daily Hands.",
    image:
      "https://www.dailyhands.in/assets/images/backgrounds/page-header-img4.webp",
    url: "https://www.dailyhands.in/office-cleaning/",
    provider: {
      "@type": "LocalBusiness",
      name: "Daily Hands",
      url: "https://www.dailyhands.in",
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
    serviceType: "Office Cleaning",
    areaServed: "Pune, Maharashtra",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in daily office cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Daily office cleaning includes floor mopping, workstation dusting, trash removal, restroom sanitization, and pantry counter cleaning.",
        },
      },
      {
        "@type": "Question",
        name: "Do you clean office IT equipment and servers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide dry dusting and specialized surface cleaning for monitors and CPUs. For server rooms, we offer non-disruptive fine dust removal using specialized equipment.",
        },
      },
      {
        "@type": "Question",
        name: "Are your office cleaners verified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all our office cleaning staff undergo background verification and are trained in professional corporate etiquette and hygiene standards.",
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
        name: "Office Cleaning",
        item: "https://www.dailyhands.in/office-cleaning/",
      },
    ],
  },
];

export default function OfficeCleaningPage() {
  return (
    <>
      <SEO
        pageTitle={
          "Professional Office Cleaning Services in Pune | Daily Hands"
        }
        jsonLd={jsonLd}
      />
      <Header />
      <Breadcrumb
        heading="Office Cleaning Services"
        currentPage="Office Cleaning"
        bgImage="/assets/images/backgrounds/page-header-img4.webp"
      />
      <OfficeCleaning />
      <BrandShowcase />
      <Footer />
    </>
  );
}
