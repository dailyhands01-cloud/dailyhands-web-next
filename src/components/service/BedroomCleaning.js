import React from 'react';
import Link from 'next/link';

const BedroomCleaning = () => {
    return (
        <>
            <section class="service-details">
                <div class="container">
                    <div class="service-details__top">
                        <div class="row">
                            <div class="col-xl-4 col-lg-8 order-2">
                                <div class="service-details__sidebar">
                                    <h2 class="service-details__sidebar-title">All Service</h2>
                                    <ul class="service-details__sidebar-list">
                                        <li class="service-details__sidebar-list-item"><Link href="/" class="active">Bedroom Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/window-cleaning">Window Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/office-cleaning">Office Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/commercial-cleaning">Commercial Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/house-cleaning">House Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/car-cleaning">Car Cleaning</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-xl-8 order-1">
                                <div class="service-details__top-img">
                                    <img src="/assets/images/resources/service-details-img1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-details__bottom">
                        <h2 class="service-details__bottom-title">Professional Bedroom Cleaning Services</h2>

                        <div class="service-details__bottom-text1">
                            <p>
                                Transform messy bedrooms into allergy-free sanctuaries. We deep clean floors, nightstands, dressers, and headboards using HEPA vacuums that capture 99.97% of dust particles and microscopic allergens.
                            </p>
                            <p>
                                Professional steam sanitization penetrates fabrics killing dust mites, bed bugs, and bacteria without toxic chemicals. Baseboard detailing and wall spot-cleaning remove fingerprints for pristine walls.
                            </p>
                        </div>

                        <div class="service-details__bottom-text2">
                            <p>
                                Hidden areas get special attention: behind dressers, under beds, inside wardrobes, ceiling fan blades. Anti-static treatments repel future dust while fabric protectants shield upholstery from spills.
                            </p>
                        </div>

                        <div class="service-details__bottom-text3">
                            <div class="row">
                                <div class="col-xl-4 col-lg-5">
                                    <div class="img-box">
                                        <img src="/assets/images/resources/bedroom-cleaning.jpg" alt="Bedroom deep cleaning before and after results" />
                                    </div>
                                </div>
                                <div class="col-xl-8 col-lg-7">
                                    <div class="content-box">
                                        <p>
                                            Mattress revival service extracts 95% of allergens with UV-C light + enzyme treatments. Duvets steamed at 180°F, pillows sanitized, sheets changed. Window treatments hand-washed to eliminate pollen buildup.
                                        </p>
                                        <p>
                                            Nighttime service available. Weekly refreshes or quarterly deep cleans. Pet hair specialty using rubber grooming tools. Post-renovation dust removal prepares bedrooms for immediate use.
                                        </p>
                                        <p>
                                            Eco-friendly focus: plant-based solutions, reusable microfiber, water-efficient methods. Child-safe products eliminate VOCs. Results last 3X longer than DIY cleaning.
                                        </p>
                                        <ul>
                                            <li><span class="icon-plus"></span> Mattress UV sanitization + dust mite extraction.</li>
                                            <li><span class="icon-plus"></span> Ceiling fans, blinds, curtains professional laundering.</li>
                                            <li><span class="icon-plus"></span> Baseboards, door frames, switch plates detailed.</li>
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

export default BedroomCleaning;