import Link from 'next/link';
import { useEffect } from 'react';


const MaidNearMe = () => {

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
                                            <Link href="/sofa-cleaning-pune">Sofa Cleaning</Link>
                                        </li>
                                        <li className="service-details__sidebar-list-item">
                                            <Link href="/maid-near-me" className="active">Maid Near Me</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-8 order-1">
                                <div className="service-details__top-img">
                                    <img
                                        src="/assets/images/resources/service-details-img2.webp"
                                        alt="Find a verified maid near me in Pune"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 className="service-details__bottom-title">
                            Find a Trusted Maid Near Me in Pune
                        </h2>

                        <div className="service-details__bottom-text1">
                            <p>
                                Searching for a <strong>maid near me</strong> in Pune? Daily Hands connects you
                                with verified, trained, and reliable maids located in your neighborhood. We have
                                a network of 3,000+ background-checked domestic helpers across 50+ Pune localities
                                — so there's always a trained maid available within 1–2 km of your home. No more
                                asking neighbors, posting on society WhatsApp groups, or relying on unverified
                                referrals.
                            </p>
                            <p>
                                Our matching system considers your exact location, home size, cleaning requirements,
                                preferred time slot, and language preference to assign the best-fit maid from our
                                local network. Most requests are fulfilled within 24–48 hours — faster than any
                                other maid service in Pune.
                            </p>
                        </div>

                        <div className="service-details__bottom-text2">
                            <p>
                                When you search for a <strong>maid near me</strong>, what you really want is
                                someone trustworthy, punctual, skilled, and close enough to arrive on time every
                                day. Daily Hands delivers on all four. Our maids live within 2 km of the areas
                                they serve, minimizing commute delays and ensuring consistent attendance even
                                during Pune's monsoon season.
                            </p>
                            <p>
                                Whether you need a part-time maid for 1–2 hours, a morning/evening helper, or
                                a full-time live-in maid — we have options for every household type. All maids
                                are Aadhaar-verified, police background-checked, and trained in professional
                                cleaning, hygiene, and home management protocols.
                            </p>
                        </div>

                        <div className="service-details__bottom-text3">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="img-box">
                                        <img
                                            src="/assets/images/resources/house-cleaning.webp"
                                            alt="Local maid from Daily Hands cleaning a Pune home nearby"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7">
                                    <div className="content-box">
                                        <p>
                                            The biggest problem with finding a maid locally is trust and reliability.
                                            Unverified maids from online classifieds often have attendance issues,
                                            steal, or leave without notice. With Daily Hands, every maid is verified,
                                            supervised, and backed by our service guarantee — if your maid doesn't
                                            show up, we send a replacement the same day.
                                        </p>
                                        <p>
                                            Our digital attendance system notifies you when your maid checks in and
                                            out. Monthly performance reports, a dedicated account manager, and 24/7
                                            support ensure you never face domestic help issues again.
                                        </p>
                                        <ul>
                                            <li>
                                                <span className="icon-plus"></span> 3,000+ verified maids across
                                                50+ Pune localities.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Local maids within 1–2 km of
                                                your home for reliable attendance.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Same-day replacement guarantee
                                                if your maid is absent.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> 7-day free trial with zero
                                                deposit and no contracts.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* How It Works */}
                        <h3 className="service-details__bottom-title mt-5">
                            How to Find a Maid Near You — 3 Easy Steps
                        </h3>
                        <div className="service-details__bottom-text1">
                            <div className="row mt-4">
                                <div className="col-md-4 mb-3">
                                    <div className="p-4 text-center" style={{background: '#fff3e0', borderRadius: '10px', border: '2px solid #ff5e14', height: '100%'}}>
                                        <h4 style={{color: '#ff5e14', fontSize: '48px'}}>1</h4>
                                        <h4>Share Your Requirements</h4>
                                        <p>
                                            Tell us your location, home size, number of rooms and bathrooms,
                                            preferred time slot, and any special requirements (cooking, laundry,
                                            childcare, elderly care).
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="p-4 text-center" style={{background: '#fff3e0', borderRadius: '10px', border: '2px solid #ff5e14', height: '100%'}}>
                                        <h4 style={{color: '#ff5e14', fontSize: '48px'}}>2</h4>
                                        <h4>We Match a Local Maid</h4>
                                        <p>
                                            Within 24–48 hours, we assign a verified maid from your neighborhood
                                            who matches your requirements. We share her profile, experience, and
                                            verification details.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="p-4 text-center" style={{background: '#fff3e0', borderRadius: '10px', border: '2px solid #ff5e14', height: '100%'}}>
                                        <h4 style={{color: '#ff5e14', fontSize: '48px'}}>3</h4>
                                        <h4>Start Your Free Trial</h4>
                                        <p>
                                            The maid starts work. Enjoy a 7-day free trial. If you're satisfied,
                                            continue with monthly billing. If not, we assign a different maid —
                                            no questions asked.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Areas Served */}
                        <h3 className="service-details__bottom-title mt-5">
                            Areas Where We Have Maids Available Near You
                        </h3>
                        <div className="service-details__bottom-text2">
                            <p>
                                Our <strong>maid near me</strong> network covers all major Pune and Pimpri-Chinchwad
                                areas:
                            </p>
                            <div className="row mt-3">
                                <div className="col-md-3">
                                    <h4>🏙️ Central Pune</h4>
                                    <ul>
                                        <li>Deccan Gymkhana</li>
                                        <li>Shivaji Nagar</li>
                                        <li>Koregaon Park</li>
                                        <li>Camp / Cantonment</li>
                                        <li>Prabhat Road</li>
                                        <li>Model Colony</li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h4>🌆 West Pune</h4>
                                    <ul>
                                        <li>Baner</li>
                                        <li>Balewadi</li>
                                        <li>Aundh</li>
                                        <li>Pashan</li>
                                        <li>Kothrud</li>
                                        <li>Karve Nagar</li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h4>💻 IT Corridors</h4>
                                    <ul>
                                        <li>Hinjewadi (Ph 1,2,3)</li>
                                        <li>Wakad</li>
                                        <li>Kharadi</li>
                                        <li>Magarpatta</li>
                                        <li>Viman Nagar</li>
                                        <li>Kalyani Nagar</li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h4>🏘️ South & East</h4>
                                    <ul>
                                        <li>Hadapsar</li>
                                        <li>NIBM</li>
                                        <li>Kondhwa</li>
                                        <li>Undri</li>
                                        <li>Sinhagad Road</li>
                                        <li>Dhankawadi</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <h4>🏭 PCMC Areas</h4>
                                    <ul className="row">
                                        <li className="col-6">Pimpri</li>
                                        <li className="col-6">Chinchwad</li>
                                        <li className="col-6">Ravet</li>
                                        <li className="col-6">Akurdi</li>
                                        <li className="col-6">Nigdi</li>
                                        <li className="col-6">Pradhikaran</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h4>🌳 Emerging Areas</h4>
                                    <ul className="row">
                                        <li className="col-6">Wagholi</li>
                                        <li className="col-6">Dhanori</li>
                                        <li className="col-6">Lohegaon</li>
                                        <li className="col-6">Keshav Nagar</li>
                                        <li className="col-6">Moshi</li>
                                        <li className="col-6">Tathawade</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Why Not Random Search */}
                        <h3 className="service-details__bottom-title mt-5">
                            Why Daily Hands is Better Than Finding a Maid Yourself
                        </h3>
                        <div className="service-details__bottom-text1">
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="p-4" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>❌ Finding a Maid Yourself</h4>
                                        <ul>
                                            <li>No background verification = safety risk</li>
                                            <li>Frequent attendance issues, no backup</li>
                                            <li>No training in cleaning best practices</li>
                                            <li>Salary negotiations every few months</li>
                                            <li>No accountability or performance tracking</li>
                                            <li>Leave without notice — weeks without help</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-4" style={{background: '#fff3e0', borderRadius: '10px', border: '2px solid #ff5e14'}}>
                                        <h4 style={{color: '#ff5e14'}}>✅ Daily Hands Maid Service</h4>
                                        <ul>
                                            <li>Aadhaar + police verification on every maid</li>
                                            <li>Same-day backup if maid is absent</li>
                                            <li>40+ hour professional training program</li>
                                            <li>Fixed transparent pricing, no negotiations</li>
                                            <li>Digital attendance + monthly performance reports</li>
                                            <li>Free instant replacement, zero disruption</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <h3 className="service-details__bottom-title mt-5">
                            Local Maid Service Pricing
                        </h3>
                        <div className="service-details__bottom-text2">
                            <div className="row mt-4">
                                <div className="col-md-3">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>1 Hr/Day</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹3,000</p>
                                        <p>per month</p>
                                        <p className="small">Basic cleaning for 1BHK</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>2 Hrs/Day</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹5,000</p>
                                        <p>per month</p>
                                        <p className="small">Cleaning + laundry for 2BHK</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>4 Hrs/Day</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹8,000</p>
                                        <p>per month</p>
                                        <p className="small">Full housekeeping for 3BHK</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="p-4 text-center" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                        <h4>Full Time</h4>
                                        <p style={{fontSize: '28px', fontWeight: 'bold', color: '#ff5e14'}}>₹10,000</p>
                                        <p>per month</p>
                                        <p className="small">8 hrs/day, complete home management</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <h3 className="service-details__bottom-title mt-5">
                            Maid Near Me FAQs
                        </h3>
                        <div className="service-details__bottom-text1">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-10">
                                <div className="accrodion active mb-3">
                                    <div className="accrodion-title">
                                        <h4>How quickly can I get a maid in my area?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            For most Pune localities, we assign a verified maid within 24–48 hours.
                                            For newer or remote areas, it may take 3–5 days. During the free trial
                                            period, we ensure you're fully satisfied with the assigned maid.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>What languages do your maids speak?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Our maids speak Marathi, Hindi, and basic English. For areas with
                                            significant non-Marathi populations (like IT corridors), we prioritize
                                            Hindi-speaking maids. Specify your language preference during booking.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>What if I want to switch my assigned maid?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            No questions asked — you can request a maid change anytime during or
                                            after the trial period. We'll assign a new verified maid within 24–48
                                            hours. There's no extra charge for maid replacement requests.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>Do you serve gated societies and managed apartments?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Yes, we serve all property types — gated communities (Amanora, Magarpatta,
                                            Blue Ridge, Pride World City), standalone apartments, row houses, and
                                            bungalows. We provide ID cards and coordinate with society security for
                                            smooth daily access.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="service-details__bottom-text2 mt-5 text-center p-5" style={{background: 'linear-gradient(135deg, #ff5e14 0%, #ff8c42 100%)', borderRadius: '15px', color: '#fff'}}>
                            <h3 style={{color: '#fff', fontSize: '28px'}}>
                                Get a Verified Maid Near You Today!
                            </h3>
                            <p style={{fontSize: '18px', maxWidth: '600px', margin: '15px auto'}}>
                                3,000+ verified maids across Pune. 24-hour matching. 7-day free trial. Zero deposit.
                                Your search for a reliable maid ends here.
                            </p>
                            <Link href="/contact" className="thm-btn" style={{background: '#fff', color: '#ff5e14', padding: '15px 40px', borderRadius: '30px', fontWeight: 'bold', display: 'inline-block', marginTop: '10px'}}>
                                Find Maid Near Me →
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default MaidNearMe;
