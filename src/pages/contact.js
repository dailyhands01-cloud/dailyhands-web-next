import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SEO from "../common/seo/Seo";
import ContactDetails from "../components/contact/ContactDetails";
import ContactInfo from "../components/contact/ContactInfo";
import ContactMap from "../components/contact/ContactMap";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Daily Hands",
    description:
      "Get in touch with Daily Hands for professional cleaning services in Pune. Contact us via phone, email, or visit our office.",
    url: "https://dailyhands.in/contact/",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I contact Daily Hands for a booking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach us at +91-88057-79006, email us at info@dailyhands.in, or fill out the contact form on our website.",
        },
      },
      {
        "@type": "Question",
        name: "What are your office operating hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our customer support is available from 8:00 AM to 8:00 PM every day to assist you with bookings and inquiries.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly do you respond to inquiries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We typically respond to all phone calls and WhatsApp inquiries immediately. Form submissions are usually addressed within 1 hour.",
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
        name: "Contact",
        item: "https://dailyhands.in/contact/",
      },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <SEO
        pageTitle={
          "Contact Daily Hands Cleaning Services | Pune Office Location & Phone"
        }
        jsonLd={jsonLd}
      />
      <Header />
      <Breadcrumb
        heading="Contact Us"
        currentPage="Contact"
        bgImage="/assets/images/backgrounds/page-header-img14.webp"
      />
      <ContactInfo />
      <ContactDetails />
      <ContactMap />
      <Footer />
    </>
  );
}
