import Link from 'next/link';
import { useEffect } from 'react';


const BathroomCleaningPune = () => {

    useEffect(() => {
        if ($(".accrodion-grp").length) {
            var accrodionGrp = $(".accrodion-grp");

            accrodionGrp.each(function () {
                var accrodionName = $(this).data("grp-name");
                var Self = $(this);
                var accordion = Self.find(".accrodion");
                Self.addClass(accrodionName);
                Self.find(".accrodion .accrodion-content").hide();
                Self.find(".accrodion.active").find(".accrodion-content").show();
                accordion.each(function () {
                    $(this)
                        .find(".accrodion-title")
                        .on("click", function () {
                            if (!$(this).parent().hasClass("active")) {
                                $(".accrodion-grp." + accrodionName)
                                    .find(".accrodion")
                                    .removeClass("active");
                                $(".accrodion-grp." + accrodionName)
                                    .find(".accrodion")
                                    .find(".accrodion-content")
                                    .slideUp();
                                $(this).parent().addClass("active");
                                $(this).parent().find(".accrodion-content").slideDown();
                            }
                        });
                });
            });
        }
    }, []);

    return (
        <>
            <section className="service-details">
                <div className="container">
                    <div className="service-details__top">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-4 col-lg-8 order-2">
                                <div className="service-details__sidebar">
                                    <h2 className="service-details__sidebar-title">Our Services</h2>
                                    <ul className="service-details__sidebar-list">
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/maid-service-in-pune">Maid Service in Pune</Link>
                                        </li>
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/house-cleaning-services-in-pune">House Cleaning Services</Link>
                                        </li>
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/deep-cleaning-services-in-pune">Deep Cleaning Services</Link>
                                        </li>
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/housekeeping-services-in-pune">Housekeeping Services</Link>
                                        </li>
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/full-time-maid-pune">Full Time Maid</Link>
                                        </li>
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/part-time-maid-pune">Part Time Maid</Link>
                                        </li>
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/bathroom-cleaning-pune" className="active">Bathroom Cleaning</Link>
                                        </li>
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/kitchen-cleaning-pune">Kitchen Cleaning</Link>
                                        </li>
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/sofa-cleaning-pune">Sofa Cleaning</Link>
                                        </li>
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/maid-near-me">Maid Near Me</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-8 order-1">
                                <div className="service-details__top-img">
                                    <img
                                        src="/assets/images/resources/service-details-img1.webp"
                                        alt="Professional bathroom cleaning service in Pune"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 className="service-details__bottom-title">
                            Professional Bathroom Cleaning in Pune
                        </h2>

                        <div className="service-details__bottom-text1">
                            <p>
                                Daily Hands provides expert <strong>bathroom cleaning in Pune</strong> using
                                industrial-grade steam sanitization equipment that eliminates 99.9% of bacteria,
                                mold, and mildew. Pune's hard water creates stubborn limescale deposits, yellowish
                                stains on fixtures, and white residue on glass — our specialized techniques remove
                                all of these and restore your bathroom to a sparkling, hygienic condition.
                            </p>
                            <p>
                                Whether you have a compact apartment bathroom or a luxury master bathroom with rain
                                shower and jacuzzi, our trained technicians handle every type. We clean wall tiles,
                                floor tiles, shower enclosures, bathtubs, toilet bowls, wash basins, mirrors, taps,
                                exhaust fans, drains, and all chrome/stainless steel fixtures.
                            </p>
                        </div>

                        <div className="service-details__bottom-text2">
                            <p>
                                Our <strong>bathroom cleaning process in Pune</strong> follows a 25-point checklist:
                                pre-soak treatment for stubborn stains → acid-wash for tile grout → steam sanitization
                                at 180°F → chrome and glass polishing → anti-bacterial coating application → drain
                                cleaning and deodorization. Total time is 45–90 minutes per bathroom depending on size
                                and condition.
                            </p>
                            <p>
                                Available across all Pune areas — Baner, Wakad, Kothrud, Hinjewadi, Aundh, Hadapsar,
                                Kharadi, Koregaon Park, Viman Nagar, NIBM, Kondhwa, Sinhagad Road, and PCMC.
                                Same-day booking available for most locations.
                            </p>
                        </div>

                        <div className="service-details__bottom-text3">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="img-box">
                                        <img
                                            src="/assets/images/resources/house-cleaning.webp"
                                            alt="Bathroom cleaning before and after results in Pune"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7">
                                    <div className="content-box">
                                        <p>
                                            Pune's water supply from Parvati and Khadakwasla sources has high mineral
                                            content, causing limestone buildup on taps, shower heads, and glass panels.
                                            Our pH-calibrated descaling solutions dissolve these deposits without
                                            scratching or damaging the underlying surface finish.
                                        </p>
                                        <p>
                                            After cleaning, we apply an anti-bacterial nano-coating that repels water
                                            stains and slows bacterial regrowth, keeping your bathroom cleaner for
                                            2–3 weeks longer than standard cleaning methods.
                                        </p>
                                        <ul>
                                            <li>
                                                <span className="icon-plus"></span> 25-point checklist covering
                                                every surface and fixture.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> 180°F steam sanitization
                                                killing 99.9% bacteria and mold.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Hard-water scale removal with
                                                surface-safe descaling solutions.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Anti-bacterial nano-coating
                                                for extended cleanliness.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 25-Point Checklist */}
                        <h3 className="service-details__bottom-title mt-5">
                            Our 25-Point Bathroom Cleaning Checklist
                        </h3>
                        <div className="service-details__bottom-text1">
                            <div className="row mt-4">
                                <div className="col-md-4">
                                    <h4>🚿 Shower & Bath Area</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Shower head descaling & flow restore</li>
                                        <li><span className="icon-plus"></span> Glass panel limescale removal</li>
                                        <li><span className="icon-plus"></span> Shower tray/floor scrubbing</li>
                                        <li><span className="icon-plus"></span> Bathtub interior descaling</li>
                                        <li><span className="icon-plus"></span> Shower curtain mold treatment</li>
                                        <li><span className="icon-plus"></span> Door hinges & track cleaning</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h4>🚽 Toilet & Basin</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Toilet bowl interior acid wash</li>
                                        <li><span className="icon-plus"></span> Toilet seat & exterior sanitize</li>
                                        <li><span className="icon-plus"></span> Rim and under-rim descaling</li>
                                        <li><span className="icon-plus"></span> Flush mechanism cleaning</li>
                                        <li><span className="icon-plus"></span> Wash basin descaling & polish</li>
                                        <li><span className="icon-plus"></span> Faucet chrome polishing</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h4>🧱 Walls, Floor & Extras</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Wall tile scrubbing & grout clean</li>
                                        <li><span className="icon-plus"></span> Floor tile deep scrub & mop</li>
                                        <li><span className="icon-plus"></span> Mirror streak-free polishing</li>
                                        <li><span className="icon-plus"></span> Exhaust fan blade cleaning</li>
                                        <li><span className="icon-plus"></span> Light fixture wiping</li>
                                        <li><span className="icon-plus"></span> Drain cleaning & deodorizing</li>
                                        <li><span className="icon-plus"></span> Door handle sanitization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Why Professional Bathroom Cleaning */}
                        <h3 className="service-details__bottom-title mt-5">
                            Why Professional Bathroom Cleaning Matters in Pune
                        </h3>
                        <div className="service-details__bottom-text2">
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <h4>💧 Hard Water Problem</h4>
                                    <p>
                                        Pune's water supply from Khadakwasla, Parvati, and bore wells has TDS levels
                                        of 300–600 ppm, creating significant calcium and magnesium deposits on every
                                        surface. Regular wiping cannot remove these mineral buildups — they require
                                        professional-grade descaling that penetrates and dissolves the deposits.
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <h4>🦠 Health Risks</h4>
                                    <p>
                                        Bathrooms harbor 500,000+ bacteria per square inch on surfaces like flush
                                        handles and tap knobs. Mold and mildew in tile grout release spores that
                                        cause respiratory issues, especially in children and elderly family members.
                                        Steam sanitization eliminates these health threats.
                                    </p>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <h4>🪞 Aesthetic Impact</h4>
                                    <p>
                                        Yellow-stained fixtures, cloudy glass, and black grout lines make even
                                        expensive bathrooms look old and dingy. Professional cleaning restores the
                                        original shine and color, making your bathroom look brand-new again.
                                    </p>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <h4>⏰ Time Savings</h4>
                                    <p>
                                        DIY bathroom deep cleaning takes 2–3 hours of intense scrubbing and often
                                        yields mediocre results. Our professionals achieve dramatically better results
                                        in 45–90 minutes with the right tools and techniques.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <h3 className="service-details__bottom-title mt-5">
                            Bathroom Cleaning Pricing in Pune
                        </h3>
                        <div className="service-details__bottom-text1">
                            <p>All-inclusive pricing with equipment, supplies, and trained technician:</p>
                            <div className="row mt-4">
                                <div className="col-md-3">
                                    <div className="seo-pricing-box">
                                        <h4>1 Bathroom</h4>
                                        <p className="seo-pricing-amount">₹499</p>
                                        <p>Flat Rate</p>
                                        <p className="small">Full deep clean with acid-free products and floor scrubbing.</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="seo-pricing-box">
                                        <h4>2 Bathrooms</h4>
                                        <p className="seo-pricing-amount">₹899</p>
                                        <p>Flat Rate</p>
                                        <p className="small">Steam cleaning, tap polishing, and tile descaling for 2 units.</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="seo-pricing-box">
                                        <h4>3 Bathrooms</h4>
                                        <p className="seo-pricing-amount">₹1,299</p>
                                        <p>Flat Rate</p>
                                        <p className="small">Comprehensive revival and sanitization for larger households.</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="seo-pricing-box">
                                        <h4>4+ Bathrooms</h4>
                                        <p className="seo-pricing-amount">₹399</p>
                                        <p>per bathroom</p>
                                        <p className="small">Custom quote for commercial or multiple properties.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 small">
                                * Add-on: Anti-bacterial nano-coating at ₹199/bathroom. Monthly subscription plans
                                available at 20% discount.
                            </p>
                        </div>

                        {/* FAQ */}
                        <h3 className="service-details__bottom-title mt-5">
                            Bathroom Cleaning FAQs
                        </h3>
                        <div className="service-details__bottom-text2">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-7">
                                <div className="accrodion active mb-3">
                                    <div className="accrodion-title">
                                        <h4>Is the acid wash safe for my tiles?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Yes, we use pH-calibrated solutions specific to your tile type — ceramic,
                                            vitrified, natural stone, or porcelain. Each requires a different approach.
                                            Our technicians test a small area first before applying to the full surface.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>How long does the anti-bacterial coating last?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            The coating lasts 2–3 weeks under normal usage. It creates an invisible
                                            hydrophobic layer that prevents water stains and slows bacterial regrowth.
                                            We recommend reapplication with each cleaning session.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>Can you remove old, set-in grout stains?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Most grout stains can be significantly improved. Very old (5+ years)
                                            deep-set grout discoloration may need a grout re-coloring service which
                                            we offer as an add-on. Our technician will assess and advise during the visit.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>How often should I get professional bathroom cleaning?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            For Pune homes with hard water, we recommend professional bathroom cleaning
                                            every 4–6 weeks to prevent limescale buildup. Monthly plans are available
                                            at a 20% discount over one-time pricing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="seo-cta-section">
                            <h3 className="seo-cta-title">
                                Get a Sparkling Germ-Free Bathroom!
                            </h3>
                            <p className="seo-cta-text">
                                Hire Pune's professional bathroom cleaning experts today. Eco-friendly products,
                                hospital-grade sanitization, and 100% satisfaction guarantee.
                            </p>
                            <Link href="/contact" className="thm-btn seo-cta-btn">
                                Book Bathroom Cleaning →
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default BathroomCleaningPune;
