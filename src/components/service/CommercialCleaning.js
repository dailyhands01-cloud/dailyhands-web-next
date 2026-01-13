import React from 'react';
import Link from 'next/link';

const CommercialCleaning = () => {
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
                                        <li className="service-details__sidebar-list-item"><Link href="/office-cleaning">Office Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/" className="active">Commercial Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/house-cleaning">House Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/car-cleaning">Car Cleaning</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-8 order-1">
                                <div className="service-details__top-img">
                                    <img src="/assets/images/resources/service-details-img5.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 class="service-details__bottom-title">Professional Commercial Cleaning Services</h2>

                        <div class="service-details__bottom-text1">
                            <p>
                                Spotless commercial spaces for offices, retail stores, restaurants, medical clinics, fitness centers, and warehouses. Hospital-grade electrostatic fogging eliminates viruses from counters, door handles, POS terminals, weight machines using touchless technology that reaches 99.99% of surfaces.
                            </p>
                            <p>
                                Clean facilities pass OSHA health inspections instantly, reduce employee sick days by 37%, and boost customer dwell time 25%. Night crews coordinate with security for after-hours access with zero operational disruption.
                            </p>
                        </div>

                        <div class="service-details__bottom-text2">
                            <p>
                                24/7 emergency spill response + flexible janitorial schedules. Strip malls receive pressure-washed sidewalks and storefront glass; restaurants get grease trap servicing and hood filter degreasing; warehouses floor marking repainting and forklift path sweeping.
                            </p>
                            <p>
                                Corporate cafeteria deep cleans include oven interiors, commercial dishwashers, walk-in cooler coil defrosting. Hotel lobby services feature brass polishing and marble floor crystallization.
                            </p>
                        </div>

                        <div className="service-details__bottom-text3">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="img-box">
                                        <img src="/assets/images/resources/service-details-img2.webp" alt="Commercial space deep cleaning transformation" />
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7">
                                    <div class="content-box">
                                        <p>
                                            5000 sq ft offices cleaned in 4 hours using ride-on scrubbers. Industrial vacuums handle post-construction dust; diamond-ground concrete floors burnished to 3000 grit mirror finish. Biohazard Level 2 certified for clinics, salons, tattoo parlors.
                                        </p>
                                        <p>
                                            Real-time cleaning verified via QR code audits and time-lapse cameras. Automated chemical dilution stations save 30% on supplies. Green Seal™ certified, Cradle to Cradle products meet Fortune 500 sustainability mandates.
                                        </p>
                                        <p>
                                            Specialty services: post-event confetti/vomit cleanup, odor neutralization for restaurants, gum removal from parking lots, bird control netting maintenance for loading docks, elevator shaft pressure washing.
                                        </p>
                                        <ul>
                                            <li><span class="icon-plus"></span> Touchless electrostatic disinfection reaches behind furniture.</li>
                                            <li><span class="icon-plus"></span> High-speed burnishing + concrete floor polishing.</li>
                                            <li><span class="icon-plus"></span> Restaurant hood suppression system grease removal.</li>
                                            <li><span class="icon-plus"></span> 24/7 emergency biohazard response teams.</li>
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

export default CommercialCleaning;