import Link from 'next/link';
import { useEffect } from 'react';


const PartTimeMaidPune = () => {

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
                                            <Link href="/part-time-maid-pune" className="active">Part Time Maid</Link>
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
                                        src="/assets/images/resources/service-details-img4.webp"
                                        alt="Affordable part time maid service in Pune"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 className="service-details__bottom-title">
                            Affordable Part Time Maid in Pune
                        </h2>

                        <div className="service-details__bottom-text1">
                            <p>
                                Need a <strong>part time maid in Pune</strong> who comes daily for 1–4 hours,
                                handles the essential cleaning, and leaves? Daily Hands provides trained, reliable
                                part-time domestic helpers with flexible morning, afternoon, and evening time
                                slots — perfect for working professionals and compact apartments where a full-time
                                maid is not needed.
                            </p>
                            <p>
                                Starting from just ₹3,000/month, our part-time maids cover sweeping, mopping,
                                dusting, utensil washing, bathroom cleaning, and laundry basics. They arrive on
                                time, follow a structured checklist, and complete the work efficiently so your
                                home stays clean every day without disrupting your schedule.
                            </p>
                        </div>

                        <div className="service-details__bottom-text2">
                            <p>
                                Our <strong>part time maid service in Pune</strong> is the most popular choice
                                among IT professionals in Hinjewadi, Kharadi, and Magarpatta. With Pune's growing
                                population of young professionals living in 1BHK and 2BHK apartments, a part-time
                                maid provides the perfect balance of convenience and affordability.
                            </p>
                            <p>
                                Choose from daily visits (Monday–Saturday), alternate days (3 days/week), or weekend-only
                                cleaning. Multiple time slots available: early morning (6:30–8:30 AM), mid-morning
                                (8:30–10:30 AM), afternoon (12–2 PM), and evening (5–7 PM). Switch slots anytime with
                                48-hour notice.
                            </p>
                        </div>

                        <div className="service-details__bottom-text3">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="img-box">
                                        <img
                                            src="/assets/images/resources/house-cleaning.webp"
                                            alt="Part time maid completing daily cleaning tasks in Pune apartment"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7">
                                    <div className="content-box">
                                        <p>
                                            Every part-time maid is trained to maximize efficiency within her allotted
                                            hours. A 1-hour visit covers floor cleaning and dishwashing; 2 hours adds
                                            bathroom & laundry; 3 hours includes kitchen deep wipe and furniture dusting.
                                            You get consistent quality regardless of the duration.
                                        </p>
                                        <p>
                                            Zero advance deposit, no registration fees, and no long-term contracts.
                                            Start your 7-day free trial and pay only if satisfied. Payment via UPI,
                                            bank transfer, or online — billed monthly with transparent invoices.
                                        </p>
                                        <ul>
                                            <li>
                                                <span className="icon-plus"></span> Flexible 1–4 hour daily cleaning
                                                slots to fit your schedule.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Starts from ₹3,000/month — most
                                                affordable in Pune.
                                            </li>
                                            <li>
                                                <span className="icon-plus"></span> Morning, afternoon, and evening
                                                time slots available.
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

                        {/* What Gets Done in Each Hour */}
                        <h3 className="service-details__bottom-title mt-5">
                            What Gets Done in Each Hour?
                        </h3>
                        <div className="service-details__bottom-text1">
                            <p>
                                Our <strong>part time maids in Pune</strong> follow an optimized schedule to maximize
                                what gets accomplished in your chosen timeframe:
                            </p>
                            <div className="row mt-4">
                                <div className="col-md-3">
                                    <div className="seo-step-box">
                                        <h4 className="seo-step-title">1 Hour</h4>
                                        <ul className="small">
                                            <li>Floor sweeping + wet mopping</li>
                                            <li>Utensil / dishwashing</li>
                                            <li>Kitchen platform wipe</li>
                                            <li>Dustbin empty</li>
                                        </ul>
                                        <p className="small mt-2"><strong>Best for:</strong> 1BHK, singles/couples</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="seo-step-box">
                                        <h4 className="seo-step-title">2 Hours</h4>
                                        <ul className="small">
                                            <li>Everything in 1-hour +</li>
                                            <li>Bathroom cleaning</li>
                                            <li>Furniture dusting</li>
                                            <li>Clothes washing/drying</li>
                                        </ul>
                                        <p className="small mt-2"><strong>Best for:</strong> 1–2BHK, small families</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="seo-step-box">
                                        <h4 className="seo-step-title">3 Hours</h4>
                                        <ul className="small">
                                            <li>Everything in 2-hour +</li>
                                            <li>Kitchen deep cleaning</li>
                                            <li>Bed making & bedroom tidy</li>
                                            <li>Window sill cleaning</li>
                                        </ul>
                                        <p className="small mt-2"><strong>Best for:</strong> 2–3BHK, families</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="seo-step-box">
                                        <h4 className="seo-step-title">4 Hours</h4>
                                        <ul className="small">
                                            <li>Everything in 3-hour +</li>
                                            <li>Ironing & wardrobe</li>
                                            <li>Balcony cleaning</li>
                                            <li>Cooking assistance</li>
                                        </ul>
                                        <p className="small mt-2"><strong>Best for:</strong> 3BHK+, large families</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <h3 className="service-details__bottom-title mt-5">
                            Part Time Maid Pricing in Pune
                        </h3>
                        <div className="service-details__bottom-text2">
                            <p>Transparent monthly pricing with zero hidden charges:</p>
                            <div className="row mt-4">
                                <div className="col-md-3">
                                    <div className="seo-pricing-box">
                                        <h4>Alternate Days</h4>
                                        <p className="seo-pricing-amount">₹3,000</p>
                                        <p>per month</p>
                                        <p className="small">3 days/week. Best for maintenance of smaller apartments.</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="seo-pricing-box">
                                        <h4>2 Hours / Day</h4>
                                        <p className="seo-pricing-amount">₹4,500</p>
                                        <p>per month</p>
                                        <p className="small">Ideal for 1BHK. Covers sweeping, mopping, dusting, and UT washing.</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="seo-pricing-box">
                                        <h4>4 Hours / Day</h4>
                                        <p className="seo-pricing-amount">₹7,500</p>
                                        <p>per month</p>
                                        <p className="small">Perfect for 2-3BHK. Includes cleaning, laundry, and kitchen support.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 small">
                                * Prices are for 6 days/week (Mon–Sat). Alternate-day and weekend-only plans
                                available at reduced rates. Contact us for custom quotes.
                            </p>
                        </div>

                        {/* FAQ */}
                        <h3 className="service-details__bottom-title mt-5">
                            Part Time Maid FAQs
                        </h3>
                        <div className="service-details__bottom-text1">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-6">
                                <div className="accrodion active mb-3">
                                    <div className="accrodion-title">
                                        <h4>Can I change the time slot for my part-time maid?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Yes, you can switch between morning, afternoon, and evening slots with just
                                            48 hours notice. Notify your account manager and the change will be applied
                                            from the next working day.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>What if I need extra time on some days?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            You can request extra hours on specific days (like weekends for deep
                                            kitchen cleaning) at a prorated hourly rate. Just inform your maid or
                                            our support team a day in advance.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>How many days off does the maid get?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Standard plans are 6 days/week (Monday–Saturday). Sundays are off by default.
                                            If you need Sunday coverage, it can be arranged as an add-on at ₹200/Sunday.
                                        </p>
                                    </div>
                                </div>
                                <div className="accrodion mb-3">
                                    <div className="accrodion-title">
                                        <h4>Is part-time maid service available in new Pune areas like Wagholi and Undri?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <p>
                                            Yes, we're rapidly expanding and already serve Wagholi, Undri, Dhanori,
                                            Lohegaon, Keshav Nagar, and other emerging Pune localities. Check availability
                                            for your exact location when booking.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="seo-cta-section">
                            <h3 className="seo-cta-title">
                                Get Flexible Help for Your Home!
                            </h3>
                            <p className="seo-cta-text">
                                Verified, punctual, and trained part-time maids in Pune. Zero advance, flat
                                monthly rates, instant replacements.
                            </p>
                            <Link href="/contact" className="thm-btn seo-cta-btn">
                                Book Part-Time Maid →
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default PartTimeMaidPune;
