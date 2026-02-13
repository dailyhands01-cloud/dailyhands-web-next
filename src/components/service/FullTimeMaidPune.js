import Link from 'next/link';
import { useEffect } from 'react';


const FullTimeMaidPune = () => {

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
                                            <Link href="/full-time-maid-pune" className="active">Full Time Maid</Link>
                                        </li>
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/part-time-maid-pune">Part Time Maid</Link>
                                        </li>
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/bathroom-cleaning-pune">Bathroom Cleaning</Link>
                                        </li>
                                        <div className="seo-premium-box">
                                        <h4>Daily Hands Full-Time Maid ⭐</h4>
                                        <ul>
                                            <li>8–10 hours dedicated support</li>
                                            <li>Complete home & kitchen management</li>
                                            <li>Available throughout the day</li>
                                            <li>Premium hygiene & organzing</li>
                                            <li>Self-managing, proactive expert</li>
                                            <li>Flexible task prioritization</li>
                                        </ul>
                                    </div>
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
                                        src="/assets/images/resources/service-details-img2.webp"
                                        alt="Full time maid service in Pune by Daily Hands"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 className="service-details__bottom-title">
                            Full Time Maid in Pune – Dedicated All-Day Home Help
                        </h2>

                        <div className="service-details__bottom-text1">
                            <p>
                                Hire a reliable <strong>full time maid in Pune</strong> through Daily Hands for
                                comprehensive all-day home care. Our full-time domestic helpers work 8–10 hours daily,
                                handling cleaning, cooking, laundry, childcare assistance, elderly companionship,
                                and complete household management – giving you total peace of mind.
                            </p>
                            <p>
                                Finding a trustworthy full-time maid in Pune is one of the biggest challenges
                                for families. Random social media postings and word-of-mouth referrals often
                                lead to unverified workers. Daily Hands eliminates this risk with thorough
                                background checks, professional training, and ongoing performance supervision.
                            </p>
                        </div>

                        <div className="service-details__bottom-text2">
                            <p>
                                A <strong>full time maid from Daily Hands in Pune</strong> is more than a cleaner —
                                she is a trained home management professional. From morning bed-making to evening
                                kitchen wrap-up, she follows a structured daily schedule that keeps your home
                                spotless, organized, and running efficiently. Available for both live-in and
                                non-live-in arrangements based on your preference.
                            </p>
                            <p>
                                Ideal for dual-income families, families with newborns, senior citizens, NRI
                                property owners, and large joint families. Available across Pune — Baner, Kothrud,
                                Wakad, Hinjewadi, Hadapsar, Kharadi, Koregaon Park, NIBM, and all PCMC areas.
                            </p>
                        </div>

                        <div className="service-details__bottom-text3">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="img-box">
                                        <img
                                            src="/assets/images/resources/house-cleaning.webp"
                                            alt="Full time maid performing daily household duties in Pune"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7">
                                    <div className="content-box">
                                        <p>
                                            Our full-time maids are trained in surface-specific cleaning for marble,
                                            granite, wooden, and vitrified tile floors. They handle modular kitchen
                                            maintenance, premium appliance care, wardrobe organization, and systematic
                                            laundry management with proper sorting and folding.
                                        </p>
                                        <p>
                                            Attendance is tracked digitally, and you receive daily check-in/check-out
                                            notifications. A dedicated account manager handles scheduling, feedback,
                                            and any concern resolution within 2 hours.
                                        </p>
                                        <ul>
                                            <li>
                                                <span className="icon-plus"></span> 8–10 hours daily, 6 days/week
                                                with structured daily schedule.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Background-verified with police
                                                check and employer references.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Live-in and non-live-in options
                                                available per preference.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Free replacement within 24 hours
                                                if unsatisfied.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Full Day Schedule */}
                        <h3 className="service-details__bottom-title mt-5">
                            A Typical Day with Your Full Time Maid
                        </h3>
                        <div className="service-details__bottom-text1">
                            <p>
                                Here's how a <strong>full time maid in Pune</strong> from Daily Hands structures
                                her 8-hour workday:
                            </p>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <h4>🌅 Morning Routine (8 AM – 12 PM)</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> 8:00 — Arrival, check-in via app</li>
                                        <li><span className="icon-plus"></span> 8:15 — Floor sweeping & wet mopping (all rooms)</li>
                                        <li><span className="icon-plus"></span> 9:00 — Bathroom cleaning & sanitization</li>
                                        <li><span className="icon-plus"></span> 9:30 — Kitchen cleaning — utensils, platform, stove</li>
                                        <li><span className="icon-plus"></span> 10:15 — Furniture dusting & bed making</li>
                                        <li><span className="icon-plus"></span> 11:00 — Laundry — washing, drying, folding</li>
                                        <li><span className="icon-plus"></span> 11:45 — Cooking assistance / lunch prep</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h4>🌇 Afternoon & Evening (1 PM – 5 PM)</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> 1:00 — Lunch break (30 min)</li>
                                        <li><span className="icon-plus"></span> 1:30 — Post-lunch kitchen cleanup</li>
                                        <li><span className="icon-plus"></span> 2:00 — Ironing & wardrobe arrangement</li>
                                        <li><span className="icon-plus"></span> 2:45 — Second round floor mopping</li>
                                        <li><span className="icon-plus"></span> 3:15 — Grocery organization / fridge cleaning</li>
                                        <li><span className="icon-plus"></span> 4:00 — Evening tea prep & snack area cleanup</li>
                                        <li><span className="icon-plus"></span> 4:30 — Final touch-up, dustbin change, check-out</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Who Needs Full Time Maid */}
                        <h3 className="service-details__bottom-title mt-5">
                            Who Needs a Full Time Maid in Pune?
                        </h3>
                        <div className="service-details__bottom-text2">
                            <div className="row mt-3">
                                <div className="col-md-4 mb-3">
                                    <div className="p-4" style={{background: '#f8f9fa', borderRadius: '10px', height: '100%'}}>
                                        <h4>👨‍👩‍👧‍👦 Working Families</h4>
                                        <p>
                                            Both parents working? A full-time maid ensures your home stays clean,
                                            meals are prepared, and children are looked after during school hours.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="seo-comparison-box">
                                        <h4>Part-Time Helper</h4>
                                        <ul>
                                            <li>Fixed 2–4 hour window</li>
                                            <li>Basic routine housework</li>
                                            <li>Leaves after tasks are done</li>
                                            <li>Standard cleaning products</li>
                                            <li>Higher supervision required</li>
                                            <li>Fixed daily schedule</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="p-4" style={{background: '#f8f9fa', borderRadius: '10px', height: '100%'}}>
                                        <h4>🏠 Large Homes</h4>
                                        <p>
                                            3BHK+ apartments, bungalows, and villas in Pune require 6–8 hours
                                            of daily maintenance. A full-time maid handles it all systematically.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="p-4" style={{background: '#f8f9fa', borderRadius: '10px', height: '100%'}}>
                                        <h4>👶 New Parents</h4>
                                        <p>
                                            New baby at home? Our maids support with bottle sterilization, laundry,
                                            home hygiene, and keeping the nursery spotless and safe.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="p-4" style={{background: '#f8f9fa', borderRadius: '10px', height: '100%'}}>
                                        <h4>✈️ NRI Property Owners</h4>
                                        <p>
                                            Own property in Pune while living abroad? Our full-time maid keeps
                                            your home maintained with regular photo updates and reports.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="p-4" style={{background: '#f8f9fa', borderRadius: '10px', height: '100%'}}>
                                        <h4>🐕 Pet Owners</h4>
                                        <p>
                                            Pets need extra cleaning attention — fur removal, floor sanitization,
                                            and feeding area maintenance. Our maids are pet-friendly and trained.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <h3 className="service-details__bottom-title mt-5">
                            Full Time Maid Pricing in Pune
                        </h3>
                        <div className="service-details__bottom-text1">
                            <div className="row mt-4">
                                <div className="col-md-4">
                                    <div className="seo-pricing-box">
                                        <h4>8 Hours / Day</h4>
                                        <p className="seo-pricing-amount">₹12,000</p>
                                        <p>per month</p>
                                        <p className="small">Ideal for 2–3BHK. Covers cleaning, laundry, and kitchen support.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="seo-pricing-box">
                                        <h4>10 Hours / Day</h4>
                                        <p className="seo-pricing-amount">₹15,000</p>
                                        <p>per month</p>
                                        <p className="small">Best for large families. Includes cooking assistance and child/elderly care support.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>Live-In</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹18,000</p>
                                        <p>per month</p>
                                        <p className="small">24/7 availability, dedicated helper, room + board included</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <h3 className="service-details__bottom-title mt-5">
                            Full Time Maid FAQs
                        </h3>
                        <div className="service-details__bottom-text2">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-5">
                                <div className="accrodion active mb-3">
                                    <div className="accrodion-title">
                                        <h4>How soon can I get a full-time maid?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            We assign a verified full-time maid within 48–72 hours of your request.
                                            During the matching process, we consider your location, home size, specific
                                            requirements, and language preferences for the best fit.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>What documentation do you verify?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            We verify Aadhaar card, PAN card, permanent address proof, police clearance
                                            certificate, and contact a minimum of 2 previous employers. All documents
                                            are kept on file and available for your review on request.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>Do you provide live-in maids in Pune?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Yes, we provide live-in maids for families that need round-the-clock help.
                                            You need to provide a separate room or sleeping arrangement. Live-in maids
                                            get 1 weekly off and work flexible hours as needed.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>What if the maid damages something?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            All our maids are covered under our service insurance policy. Any accidental
                                            damage to household items is assessed and compensated through our claims
                                            process. Report incidents within 24 hours for full coverage.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="seo-cta-section">
                            <h3 className="seo-cta-title">
                                Get Full-Time Support for Your Family!
                            </h3>
                            <p className="seo-cta-text">
                                Hire a dedicated, verified full-time maid in Pune within 48 hours. Zero advance,
                                easy replacements, and professional management.
                            </p>
                            <Link href="/contact" className="thm-btn seo-cta-btn">
                                Hire Full-Time Maid →
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default FullTimeMaidPune;
