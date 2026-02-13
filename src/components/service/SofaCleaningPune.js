import Link from 'next/link';
import { useEffect } from 'react';


const SofaCleaningPune = () => {

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
                                            <Link href="/bathroom-cleaning-pune">Bathroom Cleaning</Link>
                                        </li>
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/kitchen-cleaning-pune">Kitchen Cleaning</Link>
                                        </li>
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/sofa-cleaning-pune" className="active">Sofa Cleaning</Link>
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
                                        src="/assets/images/resources/service-details-img6.webp"
                                        alt="Professional sofa cleaning service in Pune with extraction machine"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 className="service-details__bottom-title">
                            Professional Sofa Cleaning in Pune
                        </h2>

                        <div className="service-details__bottom-text1">
                            <p>
                                Daily Hands provides premium <strong>sofa cleaning in Pune</strong> using
                                commercial-grade hot-water extraction machines that remove deep-seated dust, stains,
                                allergens, and bacteria from your sofa upholstery. Whether you have fabric, leather,
                                suede, velvet, or microfiber sofas, our trained technicians use material-specific
                                cleaning solutions to restore your furniture to like-new condition.
                            </p>
                            <p>
                                Your sofa accumulates more dirt than you think — body oils, sweat, dead skin cells,
                                pet dander, food crumbs, dust mites, and bacteria build up in the fabric over months.
                                Regular vacuuming removes only surface-level debris. Professional extraction cleaning
                                penetrates deep into the cushion filling, removing contaminants from within.
                            </p>
                        </div>

                        <div className="service-details__bottom-text2">
                            <p>
                                Our <strong>sofa cleaning process in Pune</strong> follows a 6-step protocol:
                                pre-inspection of fabric type and stains → dry vacuuming to remove loose particles →
                                pre-treatment of specific stains → hot-water extraction with cleaning solution →
                                deodorization and sanitization → speed drying with industrial blowers. Your sofa
                                is ready to use within 3–4 hours after cleaning.
                            </p>
                            <p>
                                We clean all types of upholstered furniture: L-shaped sofas, sectionals, recliners,
                                dining chairs, office chairs, and car seats. Available across all Pune areas including
                                Baner, Wakad, Kothrud, Hinjewadi, Aundh, Hadapsar, Kharadi, Koregaon Park, and PCMC.
                            </p>
                        </div>

                        <div className="service-details__bottom-text3">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="img-box">
                                        <img
                                            src="/assets/images/resources/house-cleaning.webp"
                                            alt="Before and after sofa cleaning results in Pune"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7">
                                    <div className="content-box">
                                        <p>
                                            We use industrial Karcher SE 4002 extraction machines that inject
                                            cleaning solution deep into your sofa fabric and simultaneously extract
                                            dirty water, leaving the upholstery 90% dry after cleaning. No soaking,
                                            no water damage risk, and minimal drying time.
                                        </p>
                                        <p>
                                            Stubborn stains like ink, coffee, wine, tea, turmeric, pen marks, and
                                            pet urine are treated with specialized spot-treatment solutions before
                                            the full extraction process. Most stains are removed completely; very
                                            old, set-in stains are significantly lightened.
                                        </p>
                                        <ul>
                                            <li>
                                                <span className="icon-plus"></span> Commercial Karcher extraction
                                                machines for deep-level cleaning.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Fabric-specific solutions for
                                                cotton, velvet, leather, and microfiber.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Deodorization eliminates
                                                trapped odors from food, pets, and smoke.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Ready to use within 3–4 hours —
                                                speed-dried with industrial blowers.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fabric Types */}
                        <h3 className="service-details__bottom-title mt-5">
                            Sofa Types We Clean in Pune
                        </h3>
                        <div className="service-details__bottom-text1">
                            <div className="row mt-4">
                                <div className="col-md-4 mb-3">
                                    <div className="p-4" style={{background: '#f8f9fa', borderRadius: '10px', height: '100%'}}>
                                        <h4>🪑 Fabric Sofas</h4>
                                        <p>
                                            Cotton, polyester, linen, and blended fabric sofas. We use water-based
                                            extraction cleaning that penetrates deep into the weave. Includes
                                            pre-treatment for food stains and body oil marks.
                                        </p>
                                        <p className="small"><strong>Drying time:</strong> 3–4 hours</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="p-4" style={{background: '#f8f9fa', borderRadius: '10px', height: '100%'}}>
                                        <h4>🛋️ Leather & Rexine</h4>
                                        <p>
                                            Genuine leather, PU leather, and rexine sofas require solvent-based
                                            cleaning — no water extraction. After cleaning, we apply leather
                                            conditioner to prevent cracking and maintain suppleness.
                                        </p>
                                        <p className="small"><strong>Drying time:</strong> 1–2 hours</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="p-4" style={{background: '#f8f9fa', borderRadius: '10px', height: '100%'}}>
                                        <h4>✨ Velvet & Suede</h4>
                                        <p>
                                            Delicate fabrics need dry/foam cleaning to avoid watermarks and texture
                                            damage. We use specialized velvet cleaning tools that lift dirt while
                                            preserving the fabric's nap and sheen.
                                        </p>
                                        <p className="small"><strong>Drying time:</strong> 2–3 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stain Guide */}
                        <h3 className="service-details__bottom-title mt-5">
                            Common Sofa Stains We Remove
                        </h3>
                        <div className="service-details__bottom-text2">
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <h4>🧹 Easily Removable (95%+ success)</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Tea & coffee spills</li>
                                        <li><span className="icon-plus"></span> Food grease & curry stains</li>
                                        <li><span className="icon-plus"></span> Body oil & sweat marks</li>
                                        <li><span className="icon-plus"></span> Dust, dirt, and mud</li>
                                        <li><span className="icon-plus"></span> Chocolate & ice cream</li>
                                        <li><span className="icon-plus"></span> Crayon & watercolor (kids)</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h4>⚠️ Challenging But Treatable (70–90% success)</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Red wine & juice stains</li>
                                        <li><span className="icon-plus"></span> Ink & pen marks</li>
                                        <li><span className="icon-plus"></span> Turmeric / haldi stains</li>
                                        <li><span className="icon-plus"></span> Pet urine marks</li>
                                        <li><span className="icon-plus"></span> Nail polish & paint</li>
                                        <li><span className="icon-plus"></span> Old, set-in stains (6+ months)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <h3 className="service-details__bottom-title mt-5">
                            Sofa Cleaning Pricing in Pune
                        </h3>
                        <div className="service-details__bottom-text1">
                            <p>Per-seat pricing with all equipment, solutions, and drying included:</p>
                            <div className="row mt-4">
                                <div className="col-md-3">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>3-Seater</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹799</p>
                                        <p>45–60 min</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>5-Seater</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹1,199</p>
                                        <p>1–1.5 hours</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>7-Seater</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹1,599</p>
                                        <p>1.5–2 hours</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>L-Shape</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹1,999</p>
                                        <p>2–2.5 hours</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 small">
                                * Leather sofa cleaning at ₹300/seat additional. Scotchgard fabric protection
                                add-on available at ₹199/seat. Mattress cleaning combo discount available.
                            </p>
                        </div>

                        {/* FAQ */}
                        <h3 className="service-details__bottom-title mt-5">
                            Sofa Cleaning FAQs
                        </h3>
                        <div className="service-details__bottom-text2">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-9">
                                <div className="accrodion active mb-3">
                                    <div className="accrodion-title">
                                        <h4>How long does the sofa take to dry after cleaning?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            With our industrial extraction machines, the sofa is 90% dry immediately
                                            after cleaning. We then use high-speed blowers for speed drying. Most
                                            sofas are fully dry and ready to use within 3–4 hours, or 1–2 hours
                                            for leather/rexine.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>Will the cleaning damage my sofa color or fabric?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            No. We test every cleaning solution on a hidden area of your sofa (back
                                            or underside) before the full cleaning. This ensures color-fastness and
                                            fabric safety. We use different solutions for different fabric types.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>Can you clean sofa cushions that have removable covers?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Yes, we can clean both the covers and the cushion filling separately.
                                            Removable covers are extraction-cleaned on both sides. The inner cushion
                                            foam is vacuumed and deodorized. This gives the best results.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>Do you also clean mattresses and carpets?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Yes, we offer mattress cleaning (vacuuming + UV sanitization + deodorization)
                                            and carpet shampooing as add-on services. Combo packages with sofa cleaning
                                            are available at discounted rates. Ask about our whole-home upholstery package.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="service-details__bottom-text1 mt-5 text-center p-5" style={{background: 'linear-gradient(135deg, #ff5e14 0%, #ff8c42 100%)', borderRadius: '15px', color: '#fff'}}>
                            <h3 style={{color: '#fff', fontSize: '28px'}}>
                                Revive Your Sofa Today!
                            </h3>
                            <p style={{fontSize: '18px', maxWidth: '600px', margin: '15px auto'}}>
                                Remove stains, eliminate odors, kill allergens. Professional extraction cleaning
                                that makes your sofa look and feel like new.
                            </p>
                            <Link href="/contact" className="thm-btn" style={{background: '#fff', color: '#ff5e14', padding: '15px 40px', borderRadius: '30px', fontWeight: 'bold', display: 'inline-block', marginTop: '10px'}}>
                                Book Sofa Cleaning →
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default SofaCleaningPune;
