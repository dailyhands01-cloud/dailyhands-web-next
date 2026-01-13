import React from 'react';
import Link from 'next/link';

const OfficeCleaning = () => {
    return (
        <>
            <section className="service-details">
                <div className="container">
                    <div className="service-details__top">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-4 col-lg-8 order-2">
                                <div className="service-details__sidebar">
                                    <h2 className="service-details__sidebar-title">All Service</h2>
                                    <ul className="service-details__sidebar-list">
                                        <li className="service-details__sidebar-list-item"><Link href="/bedroom-cleaning">Bedroom Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/window-cleaning">Window Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/" className="active">Office Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/commercial-cleaning">Commercial Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/house-cleaning">House Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/car-cleaning">Car Cleaning</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-8 order-1">
                                <div className="service-details__top-img">
                                    <img src="/assets/images/resources/service-details-img7.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 class="service-details__bottom-title">Professional Office Cleaning Services</h2>

                        <div class="service-details__bottom-text1">
                            <p>
                                Professional office cleaning keeps workspaces spotless, safe, and highly productive for teams of all sizes. We target stubborn dust, tracked-in dirt, and airborne germs in workstations, break rooms, elevators, and lobby areas using hospital-grade disinfectants tested for commercial spaces.
                            </p>
                            <p>
                                Hygienic offices cut sick days by 40%, sharpen employee focus, and build instant client trust upon entry. Our certified team deploys color-coded microfiber systems and electrostatic sprayers to prevent cross-contamination between departments and public zones.
                            </p>
                        </div>

                        <div class="service-details__bottom-text2">
                            <p>
                                Select daily executive suite refreshes, weekly comprehensive office deep cleans, or monthly specialized treatments perfectly customized for startups, SMEs, or enterprise headquarters. We tackle kitchen grease traps, printer ink spills, lobby furniture polishing, and even server room static-free dusting for complete operational coverage.
                            </p>
                        </div>

                        <div className="service-details__bottom-text3">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="img-box">
                                        <img src="/assets/images/resources/office-cleaning.webp" alt="Office cleaning transformation results" />
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7">
                                    <div className="content-box">
                                        <p>
                                            Our commercial-grade office cleaning eliminates 99.9% of viruses from keyboards, mouse pads, door handles, conference tables, and vending machine buttons. Hospital-grade HEPA vacuums capture pet dander and pollen allergens while 180°F steam mops penetrate carpet fibers for chemical-free sanitization safe for asthma sufferers and pets.
                                        </p>
                                        <p>
                                            Night shift specialists operate whisper-quiet equipment around your tightest deadlines with zero workflow interruption. 24/7 emergency spill response teams arrive within 60 minutes. Real-time cleaning tracked through mobile app provides compliance certificates, before/after photos, and automated quality score reports for health inspections.
                                        </p>
                                        <p>
                                            Custom add-ons include biohazard cleanup for medical offices, fragrance-free options for sensitive staff, and green-certified supplies meeting LEED standards. Post-construction dust removal prepares newly renovated spaces for immediate occupancy without allergy flare-ups.
                                        </p>

                                        <ul>
                                            <li><span className="icon-plus"></span> UV-C light disinfection for conference rooms + elevators.</li>
                                            <li><span className="icon-plus"></span> Eco-carpet shampooing + HVAC vent allergen extraction.</li>
                                            <li><span className="icon-plus"></span> Touchless restroom automation + odor neutralization.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default OfficeCleaning;