import Link from 'next/link';
import { useEffect } from 'react';

const MaidServicePune = () => {

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
                                            <Link href="/maid-service-in-pune" className="active">Maid Service in Pune</Link>
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
                                        src="/assets/images/resources/service-details-img6.webp"
                                        alt="Professional maid service in Pune by Daily Hands"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 className="service-details__bottom-title">
                            Trusted Maid Service in Pune – Reliable & Affordable
                        </h2>

                        <div className="service-details__bottom-text1">
                            <p>
                                Looking for a dependable <strong>maid service in Pune</strong>? Daily Hands provides
                                professionally trained and background-verified maids across all major areas of Pune
                                including Kothrud, Wakad, Hinjewadi, Baner, Aundh, Hadapsar, Kharadi, Viman Nagar,
                                and Pimpri-Chinchwad. Our domestic helpers handle sweeping, mopping, dusting, utensil
                                washing, laundry folding, and complete home upkeep with meticulous care.
                            </p>
                            <p>
                                Whether you need a daily maid for routine housework or a scheduled helper for
                                specific days of the week, Daily Hands matches you with the right professional
                                within 24–48 hours. All our maids are Aadhaar-verified, trained in hygiene
                                protocols, and supervised for consistent quality every single visit.
                            </p>
                        </div>

                        <div className="service-details__bottom-text2">
                            <p>
                                Our <strong>maid service in Pune</strong> is designed for busy working professionals,
                                families with elderly members, new parents, and NRIs who need someone trustworthy to
                                manage their homes. We offer flexible timing slots — morning 7AM–10AM, afternoon
                                12PM–3PM, and evening 5PM–8PM — so your schedule is never disrupted.
                            </p>
                            <p>
                                All cleaning supplies and equipment can be provided by us at no extra charge. We use
                                eco-friendly, child-safe, and pet-safe products. Our transparent pricing model has
                                zero hidden charges — what you see is what you pay, with easy monthly payment options.
                            </p>
                        </div>

                        <div className="service-details__bottom-text3">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="img-box">
                                        <img
                                            src="/assets/images/resources/house-cleaning.webp"
                                            alt="Maid service in Pune cleaning home professionally"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                <div className="col-xl-8 col-lg-7">
                                    <div className="content-box">
                                        <p>
                                            Every maid assigned through Daily Hands undergoes rigorous 40-hour training
                                            covering floor care for Indian tiles, marble, and vitrified surfaces,
                                            kitchen deep cleaning with grease removal, and bathroom sanitization using
                                            hospital-grade disinfectants. We guarantee a free replacement within 24 hours
                                            if you are unsatisfied with any cleaner.
                                        </p>
                                        <p>
                                            Our dedicated customer support team is available 7 days a week to handle
                                            scheduling changes, feedback, and emergency cleaning requests. We serve
                                            1BHK to 5BHK apartments, row houses, bungalows, and independent villas
                                            across Pune and PCMC.
                                        </p>

                                        <ul>
                                            <li>
                                                <span className="icon-plus"></span> Background-verified and
                                                Aadhaar-checked maids for complete safety.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Flexible daily, alternate-day,
                                                and weekly scheduling options.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Free instant replacement
                                                guarantee within 24 hours.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Eco-friendly, child-safe
                                                cleaning products included.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Daily Hands */}
                        <h3 className="service-details__bottom-title mt-5">
                            Why Choose Daily Hands for Maid Service in Pune?
                        </h3>
                        <div className="service-details__bottom-text1">
                            <p>
                                Pune is one of India's fastest-growing cities with over 7 million residents, and finding
                                a trustworthy <strong>maid service in Pune</strong> can be extremely challenging. Unverified
                                maids from local agencies often lead to theft complaints, irregular attendance, and poor
                                cleaning quality. Daily Hands solves all these problems with a technology-driven, fully
                                managed maid service platform.
                            </p>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <h4>✅ 100% Background Verified</h4>
                                    <p>
                                        Every maid undergoes Aadhaar verification, address proof validation, police
                                        verification, and previous employer reference checks before being assigned
                                        to any household. Your family's safety is our top priority.
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <h4>✅ 40+ Hours Professional Training</h4>
                                    <p>
                                        Our maids receive hands-on training in modern cleaning techniques, Indian
                                        kitchen care, bathroom hygiene, appliance handling, and time management.
                                        They are skilled in handling marble, granite, vitrified tiles, and wooden
                                        flooring specific to Pune homes.
                                    </p>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <h4>✅ Digital Attendance Tracking</h4>
                                    <p>
                                        Receive real-time check-in and check-out notifications on your phone. Track
                                        your maid's attendance, punctuality, and working hours through our digital
                                        platform. No more guesswork about whether someone showed up.
                                    </p>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <h4>✅ Zero Advance Deposit</h4>
                                    <p>
                                        Unlike traditional Pune maid agencies that charge ₹5,000–₹10,000 upfront,
                                        Daily Hands requires zero advance deposit. Pay only after service is delivered.
                                        Monthly billing with UPI, bank transfer, and online payment options.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* What Our Maids Do */}
                        <h3 className="service-details__bottom-title mt-5">
                            Complete List of Maid Service Tasks We Cover
                        </h3>
                        <div className="service-details__bottom-text2">
                            <p>
                                Our <strong>maid service in Pune</strong> covers every daily household task that Indian
                                families need. Here is a comprehensive list of what our trained maids handle:
                            </p>
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <h4>🏠 Living Areas</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Floor sweeping and wet mopping</li>
                                        <li><span className="icon-plus"></span> Furniture dusting and polishing</li>
                                        <li><span className="icon-plus"></span> Sofa cushion arrangement</li>
                                        <li><span className="icon-plus"></span> Window sill and ledge cleaning</li>
                                        <li><span className="icon-plus"></span> TV unit and showcase dusting</li>
                                        <li><span className="icon-plus"></span> Ceiling fan and light cleaning</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h4>🍳 Kitchen</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Utensil and vessel washing</li>
                                        <li><span className="icon-plus"></span> Kitchen platform wiping</li>
                                        <li><span className="icon-plus"></span> Gas stove and chimney exterior</li>
                                        <li><span className="icon-plus"></span> Sink scrubbing and drain cleaning</li>
                                        <li><span className="icon-plus"></span> Refrigerator exterior wiping</li>
                                        <li><span className="icon-plus"></span> Dustbin emptying and liner change</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h4>🛁 Bathrooms</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Toilet bowl scrubbing</li>
                                        <li><span className="icon-plus"></span> Floor and wall tile mopping</li>
                                        <li><span className="icon-plus"></span> Mirror and glass cleaning</li>
                                        <li><span className="icon-plus"></span> Basin and tap polishing</li>
                                        <li><span className="icon-plus"></span> Bucket and mug sanitization</li>
                                        <li><span className="icon-plus"></span> Bathroom drain maintenance</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <h4>👕 Laundry & Clothes</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Clothes washing (hand or machine)</li>
                                        <li><span className="icon-plus"></span> Drying and folding</li>
                                        <li><span className="icon-plus"></span> Ironing and wardrobe arrangement</li>
                                        <li><span className="icon-plus"></span> Bed sheet and pillow cover change</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h4>🛏️ Bedrooms</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Bed making and pillow fluffing</li>
                                        <li><span className="icon-plus"></span> Wardrobe exterior dusting</li>
                                        <li><span className="icon-plus"></span> Under-bed vacuum or sweeping</li>
                                        <li><span className="icon-plus"></span> Dressing table and mirror cleaning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Section */}
                        <h3 className="service-details__bottom-title mt-5">
                            Maid Service Pricing in Pune
                        </h3>
                        <div className="service-details__bottom-text1">
                            <p>
                                Daily Hands offers the most competitive <strong>maid service rates in Pune</strong> with
                                transparent monthly pricing. No registration fees, no advance deposits, no hidden charges.
                            </p>
                            <div className="row mt-4">
                                <div className="col-md-4">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>1 Hour / Day</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹3,000</p>
                                        <p>per month</p>
                                        <p className="small">Ideal for 1BHK apartments. Covers sweeping, mopping, dusting, and dishwashing.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>2 Hours / Day</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹5,000</p>
                                        <p>per month</p>
                                        <p className="small">Best for 2–3BHK homes. Full cleaning + laundry + kitchen work included.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>4 Hours / Day</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹8,000</p>
                                        <p>per month</p>
                                        <p className="small">Comprehensive coverage for 3–4BHK homes with bathrooms, balconies & cooking aid.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Areas Served */}
                        <h3 className="service-details__bottom-title mt-5">
                            Areas We Serve – Maid Service Across Pune
                        </h3>
                        <div className="service-details__bottom-text2">
                            <p>
                                Daily Hands <strong>maid service in Pune</strong> is available in every major locality.
                                Here are the areas where we have active maids ready for immediate deployment:
                            </p>
                            <div className="row mt-3">
                                <div className="col-md-3">
                                    <h4>West Pune</h4>
                                    <ul>
                                        <li>Kothrud</li>
                                        <li>Karve Nagar</li>
                                        <li>Warje</li>
                                        <li>Bavdhan</li>
                                        <li>Pashan</li>
                                        <li>SB Road</li>
                                        <li>Erandwane</li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h4>North-West Pune</h4>
                                    <ul>
                                        <li>Baner</li>
                                        <li>Balewadi</li>
                                        <li>Wakad</li>
                                        <li>Hinjewadi</li>
                                        <li>Aundh</li>
                                        <li>Pimple Saudagar</li>
                                        <li>Pimple Nilakh</li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h4>East Pune</h4>
                                    <ul>
                                        <li>Viman Nagar</li>
                                        <li>Kharadi</li>
                                        <li>Hadapsar</li>
                                        <li>Magarpatta</li>
                                        <li>Mundhwa</li>
                                        <li>Kalyani Nagar</li>
                                        <li>Koregaon Park</li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h4>South Pune & PCMC</h4>
                                    <ul>
                                        <li>NIBM</li>
                                        <li>Kondhwa</li>
                                        <li>Undri</li>
                                        <li>Katraj</li>
                                        <li>Sinhagad Road</li>
                                        <li>Pimpri</li>
                                        <li>Chinchwad</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <h3 className="service-details__bottom-title mt-5">
                            Frequently Asked Questions – Maid Service in Pune
                        </h3>
                        <div className="service-details__bottom-text1">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className="accrodion active mb-3">
                                    <div className="accrodion-title">
                                        <h4>How quickly can I get a maid assigned in Pune?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Most areas in Pune get a maid assigned within 24–48 hours of booking.
                                            High-demand localities like Baner, Wakad, and Hinjewadi may have faster
                                            deployment due to our large network of 500+ active maids in those zones.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>What if the maid does not come one day?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            We provide a free instant replacement guarantee. If your assigned maid
                                            is unable to come, a trained backup is sent to your home within hours.
                                            You will also receive a notification with the replacement details.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>Are your maids safe and trustworthy?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Absolutely. Every maid undergoes Aadhaar verification, police background
                                            checks, address verification, and reference calls to previous employers.
                                            We also carry insurance coverage for added peace of mind.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>Can I change my maid if I am not satisfied?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Yes, we offer free unlimited replacements until you are 100% satisfied.
                                            Just contact our support team and we will assign a new maid within 24
                                            hours at no additional cost.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>Do I need to provide cleaning supplies?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            No, Daily Hands provides all necessary cleaning supplies and equipment
                                            at no extra charge. Our eco-friendly, child-safe products are included
                                            in your monthly package. You can also request specific products if you
                                            have preferences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="service-details__bottom-text2 mt-5 text-center p-5" style={{background: 'linear-gradient(135deg, #ff5e14 0%, #ff8c42 100%)', borderRadius: '15px', color: '#fff'}}>
                            <h3 style={{color: '#fff', fontSize: '28px'}}>
                                Ready to Hire a Maid in Pune?
                            </h3>
                            <p style={{fontSize: '18px', maxWidth: '600px', margin: '15px auto'}}>
                                Join 10,000+ Pune households who trust Daily Hands for reliable, affordable,
                                and professionally managed maid services every day.
                            </p>
                            <Link href="/contact" className="thm-btn" style={{background: '#fff', color: '#ff5e14', padding: '15px 40px', borderRadius: '30px', fontWeight: 'bold', display: 'inline-block', marginTop: '10px'}}>
                                Book Your Maid Now →
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default MaidServicePune;
