import SEO from "../../common/seo/Seo";
import HeaderOne from "../../common/header/Header";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import FooterOne from "../../common/footer/Footer";

import {
  BlogOneData,
  BlogTwoData,
  BlogThreeData,
  BlogGridData,
  BlogListData,
  BlogStandardData,
} from "../../data/blogs";

const DEFAULT_SITE_URL = "https://dailyhands.in";

const extractSlugFromLink = (link) => {
  if (!link) return "";
  return String(link)
    .split("?")[0]
    .split("#")[0]
    .replace(/^\/blog\//, "")
    .replace(/\/$/, "");
};

const normalizePathname = (pathname) => {
  if (!pathname) return "/";
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
};

const collectAllPosts = () => {
  const arrays = [
    BlogOneData,
    BlogTwoData,
    BlogThreeData,
    BlogGridData,
    BlogListData,
    BlogStandardData,
  ];

  const map = new Map();

  arrays
    .filter(Boolean)
    .forEach((arr) => {
      (arr || []).forEach((item) => {
        const slug = extractSlugFromLink(item?.link);
        if (!slug) return;
        if (!map.has(slug)) {
          map.set(slug, { ...item, slug });
        }
      });
    });

  return Array.from(map.values());
};

export default function BlogPostPage({ post }) {
  if (!post) return null;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
  const canonical = `${siteUrl}${normalizePathname(`/blog/${post.slug}`)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.heading,
    description: post.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    ...(post.image
      ? {
        image: [`${siteUrl}${post.image.startsWith("/") ? post.image : `/${post.image}`}`],
      }
      : {}),
  };

  return (
    <>
      <SEO
        pageTitle={post.heading}
        description={post.description}
        canonical={canonical}
        openGraph={{
          title: post.heading,
          description: post.description,
          url: canonical,
          type: "article",
          image: post.image ? `${siteUrl}${post.image}` : undefined,
        }}
        jsonLd={jsonLd}
      />

      <HeaderOne />
      <Breadcrumb heading={post.heading} currentPage="Blog" />

      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="blog-details__left">
                {post.image ? (
                  <div className="blog-details__img">
                    <img src={post.image} alt={post.alt || post.heading} loading="lazy" />
                  </div>
                ) : null}

                <div className="blog-details__content">
                  <h2 className="blog-details__title">{post.heading}</h2>
                  <p className="blog-details__text-1">{post.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterOne />
    </>
  );
}

export async function getStaticPaths() {
  const posts = collectAllPosts();

  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = collectAllPosts();
  const post = posts.find((p) => p.slug === params?.slug) || null;

  return {
    props: {
      post,
    },
  };
}
