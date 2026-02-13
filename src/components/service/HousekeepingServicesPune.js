import Link from 'next/link';
import { useEffect } from 'react';


const HousekeepingServicesPune = () => {

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
                                            <Link href="/housekeeping-services-in-pune" className="active">Housekeeping Services</Link>
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
                                        src="/assets/images/resources/service-details-img1.webp"
                                        alt="Professional housekeeping services in Pune"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 className="service-details__bottom-title">
                            Premium Housekeeping Services in Pune
                        </h2>

                        <div className="service-details__bottom-text1">
                            <p>
                                Daily Hands provides comprehensive <strong>housekeeping services in Pune</strong> that
                                go beyond basic cleaning. Our trained housekeepers manage your entire home — daily
                                cleaning, laundry, kitchen upkeep, grocery organization, bed-making, and even basic
                                cooking assistance — so you can focus on your career and family without worrying about
                                household management.
                            </p>
                            <p>
                                Unlike a regular maid who only sweeps and mops, a Daily Hands housekeeper is a
                                trained home management professional. They follow structured daily, weekly, and
                                monthly cleaning schedules, maintain hygiene standards, manage household supplies,
                                and proactively keep your home organized and running smoothly.
                            </p>
                        </div>

                        <div className="service-details__bottom-text2">
                            <p>
                                Our <strong>housekeeping services in Pune</strong> are available as part-time
                                (2–4 hours/day) and full-time (8–10 hours/day) options. We serve working couples,
                                families with young children, senior citizens living alone, NRI-owned properties,
                                bachelor/student apartments, and corporate guesthouses across all Pune localities.
                            </p>
                            <p>
                                Every housekeeper is Aadhaar-verified, police background-checked, and trained in
                                professional-grade hygiene protocols. We provide attendance tracking, performance
                                reporting, and a dedicated relationship manager for every household.
                            </p>
                        </div>

                        <div className="service-details__bottom-text3">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="img-box">
                                        <img
                                            src="/assets/images/resources/house-cleaning.webp"
                                            alt="Housekeeper organizing and managing a Pune home"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7">
                                    <div className="content-box">
                                        <p>
                                            Our housekeeping staff is trained to handle luxury homes with imported
                                            flooring, marble countertops, modular kitchens, and premium appliances.
                                            They know the correct products and techniques for each surface type —
                                            no water marks on marble, no scratches on vitrified tiles, no damage
                                            to wooden furniture.
                                        </p>
                                        <p>
                                            We offer a 7-day free trial for new customers so you can evaluate the
                                            quality before committing. No contracts, no advance deposits, no hidden
                                            fees. Monthly billing with UPI, net banking, and online payment options.
                                        </p>
                                        <ul>
                                            <li>
                                                <span className="icon-plus"></span> Trained home management
                                                professionals, not just cleaners.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Daily, weekly, and monthly
                                                cleaning schedules maintained.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> 7-day free trial with zero
                                                deposit required.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Dedicated relationship manager
                                                for every household.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What Housekeeping Includes */}
                        <h3 className="service-details__bottom-title mt-5">
                            What's Included in Our Housekeeping Services?
                        </h3>
                        <div className="service-details__bottom-text1">
                            <p>
                                Our <strong>housekeeping services in Pune</strong> provide complete home management
                                tailored to Indian households:
                            </p>
                            <div className="row mt-4">
                                <div className="col-md-4">
                                    <h4>🧹 Daily Cleaning</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Floor sweeping, vacuuming & mopping</li>
                                        <li><span className="icon-plus"></span> Furniture & surface dusting</li>
                                        <li><span className="icon-plus"></span> Bathroom cleaning & sanitization</li>
                                        <li><span className="icon-plus"></span> Kitchen platform & sink cleaning</li>
                                        <li><span className="icon-plus"></span> Dustbin emptying & liner change</li>
                                        <li><span className="icon-plus"></span> Bed making & pillow arrangement</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h4>👕 Laundry & Organization</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Clothes washing (hand/machine)</li>
                                        <li><span className="icon-plus"></span> Drying, folding, and ironing</li>
                                        <li><span className="icon-plus"></span> Wardrobe organization</li>
                                        <li><span className="icon-plus"></span> Linen change & bed sheet rotation</li>
                                        <li><span className="icon-plus"></span> Shoe rack maintenance</li>
                                        <li><span className="icon-plus"></span> Seasonal clothes storage</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h4>🍳 Kitchen Support</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Utensil washing & drying</li>
                                        <li><span className="icon-plus"></span> Grocery arrangement & inventory</li>
                                        <li><span className="icon-plus"></span> Basic cooking assistance</li>
                                        <li><span className="icon-plus"></span> Fridge organization</li>
                                        <li><span className="icon-plus"></span> Gas stove & chimney exterior</li>
                                        <li><span className="icon-plus"></span> Dining table setup & clearing</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <h4>📋 Weekly Deep Tasks</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Ceiling fan and light fixture cleaning</li>
                                        <li><span className="icon-plus"></span> Window glass and frame wiping</li>
                                        <li><span className="icon-plus"></span> Behind-furniture dusting</li>
                                        <li><span className="icon-plus"></span> Balcony scrubbing and railing cleaning</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h4>📅 Monthly Tasks</h4>
                                    <ul>
                                        <li><span className="icon-plus"></span> Full wardrobe interior cleaning</li>
                                        <li><span className="icon-plus"></span> Kitchen cabinet deep clean</li>
                                        <li><span className="icon-plus"></span> AC filter dusting</li>
                                        <li><span className="icon-plus"></span> Curtain washing coordination</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Housekeeping vs Maid */}
                        <h3 className="service-details__bottom-title mt-5">
                            Housekeeping vs Regular Maid Service – What's the Difference?
                        </h3>
                        <div className="service-details__bottom-text2">
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="p-4" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>Regular Maid</h4>
                                        <ul>
                                            <li>Handles basic sweeping & mopping</li>
                                            <li>Limited training in hygiene</li>
                                            <li>No structured schedule</li>
                                            <li>Limited or no attendance tracking</li>
                                            <li>Often requires supervision</li>
                                            <li>Basic dishwashing only</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-4" style={{background: '#fff3e0', borderRadius: '10px', border: '2px solid #ff5e14'}}>
                                        <h4 style={{color: '#ff5e14'}}>Daily Hands Housekeeper ⭐</h4>
                                        <ul>
                                            <li>Complete home management professional</li>
                                            <li>40+ hours formal training certification</li>
                                            <li>Daily, weekly, monthly schedule maintained</li>
                                            <li>Digital attendance tracking with reports</li>
                                            <li>Self-managing, proactive approach</li>
                                            <li>Kitchen support + laundry + organization</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <h3 className="service-details__bottom-title mt-5">
                            Housekeeping Pricing in Pune
                        </h3>
                        <div className="service-details__bottom-text1">
                            <div className="row mt-4">
                                <div className="col-md-4">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>2 Hours / Day</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹5,000</p>
                                        <p>per month</p>
                                        <p className="small">Cleaning + laundry + kitchen basics for 1–2BHK homes.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>4 Hours / Day</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹8,000</p>
                                        <p>per month</p>
                                        <p className="small">Full housekeeping for 2–3BHK homes with cooking support.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>8 Hours / Day</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹14,000</p>
                                        <p>per month</p>
                                        <p className="small">Full-day dedicated housekeeper for large 3–5BHK homes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <h3 className="service-details__bottom-title mt-5">
                            Housekeeping FAQs
                        </h3>
                        <div className="service-details__bottom-text2">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-4">
                                <div className="accrodion active mb-3">
                                    <div className="accrodion-title">
                                        <h4>Can the housekeeper also cook?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Our full-time housekeepers can provide basic cooking assistance — making
                                            dal, rice, rotis, and simple vegetable preparations. Specialized cooking
                                            services are available as an add-on with trained home cooks.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>Is there a lock-in period or contract?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            No lock-in period at all. Month-to-month billing. You can pause, modify,
                                            or cancel your plan anytime with 7 days notice. We believe in earning
                                            your trust through quality, not contracts.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>What if the housekeeper takes a leave?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            We send a trained backup housekeeper immediately so your home is never
                                            unattended. The backup follows the same cleaning schedule and protocols
                                            as your regular housekeeper.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>Do you serve gated societies and apartments?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Yes, we serve all types of properties — gated societies, standalone
                                            apartments, row houses, bungalows, and villas. We handle society entry
                                            passes and coordinate with security for smooth access.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="service-details__bottom-text1 mt-5 text-center p-5" style={{background: 'linear-gradient(135deg, #ff5e14 0%, #ff8c42 100%)', borderRadius: '15px', color: '#fff'}}>
                            <h3 style={{color: '#fff', fontSize: '28px'}}>
                                Let a Professional Manage Your Home!
                            </h3>
                            <p style={{fontSize: '18px', maxWidth: '600px', margin: '15px auto'}}>
                                7-day free trial, zero deposit, trained professionals. Experience premium
                                housekeeping that transforms your daily life.
                            </p>
                            <Link href="/contact" className="thm-btn" style={{background: '#fff', color: '#ff5e14', padding: '15px 40px', borderRadius: '30px', fontWeight: 'bold', display: 'inline-block', marginTop: '10px'}}>
                                Start Free Trial →
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default HousekeepingServicesPune;
