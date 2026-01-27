import Head from "next/head";
import { useRouter } from "next/router";

const DEFAULT_SITE_URL = "https://dailyhands.in";

const normalizePathname = (asPath) => {
    if (!asPath) return "/";
    const pathOnly = asPath.split("?")[0].split("#")[0];
    if (pathOnly === "/") return "/";
    return pathOnly.endsWith("/") ? pathOnly : `${pathOnly}/`;
};

const SEO = ({
    pageTitle,
    description = "Daily Hands Cleaning Services",
    canonical = undefined,
    noindex = false,
    openGraph = undefined,
    jsonLd = undefined,
}) => {
    const router = useRouter();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
    const canonicalUrl = canonical || `${siteUrl}${normalizePathname(router?.asPath)}`;

    const title = pageTitle || "";
    const ogTitle = openGraph?.title || title;
    const ogDescription = openGraph?.description || description;
    const ogUrl = openGraph?.url || canonicalUrl;
    const ogType = openGraph?.type || "website";
    const ogImage = openGraph?.image;

    return (
        <>
            <Head>
                <title>{title && `${title}`}</title>
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="description" content={description} />
                <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <link rel="canonical" href={canonicalUrl} />

                <meta property="og:type" content={ogType} />
                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:url" content={ogUrl} />
                {ogImage ? <meta property="og:image" content={ogImage} /> : null}

                <meta name="twitter:card" content={ogImage ? "summary_large_image" : "summary"} />
                <meta name="twitter:title" content={ogTitle} />
                <meta name="twitter:description" content={ogDescription} />
                {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}

                {jsonLd ? (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                ) : null}
            </Head>
        </>
    );
};

export default SEO;