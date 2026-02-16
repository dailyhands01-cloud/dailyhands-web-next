import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import CTASection from "../components/cta/CTASection";
import GalleryGrid from "../components/gallery/GalleryGrid";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are the photos in the gallery from actual Daily Hands projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all photos in our gallery showcase the real work performed by our cleaning teams in homes and offices across Pune.",
        },
      },
      {
        "@type": "Question",
        name: "Can I expect the same quality as shown in the gallery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Definitely. We maintain strict quality control and a standard 25-point checklist for our deep cleaning services to ensure consistent, high-quality results.",
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
        name: "Gallery",
        item: "https://dailyhands.in/gallery/",
      },
    ],
  },
];

export default function GalleryOnePage() {
  return (
    <>
      <SEO
        pageTitle={
          "Cleaning Gallery & Photo Portfolio | Daily Hands Pune Projects"
        }
        jsonLd={jsonLd}
      />
      <Header />
      <Breadcrumb
        heading="Cleaning Photo Gallery & Portfolio"
        currentPage="Gallery"
        bgImage="/assets/images/backgrounds/page-header-img9.webp"
      />
      <GalleryGrid />
      <CTASection />
      <Footer />
    </>
  );
}
