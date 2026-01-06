import React from 'react';
import Link from 'next/link';

const CarCleaning = () => {
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
                                        <li class="service-details__sidebar-list-item"><Link href="/bedroom-cleaning">Bedroom Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/window-cleaning">Window Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/office-cleaning">Office Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/commercial-cleaning">Commercial Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/house-cleaning">House Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/" class="active">Car Cleaning</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-xl-8 order-1">
                                <div class="service-details__top-img">
                                    <img src="/assets/images/resources/service-details-img4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-details__bottom">
                        <h2 class="service-details__bottom-title">Professional Car Cleaning Services</h2>

                        <div class="service-details__bottom-text1">
                            <p>
                                Complete automotive transformation for hatchbacks, sedans, SUVs, and luxury MPVs restored to near-showroom condition. 180°F steam seat extraction helps kill up to 99.9% of bacteria while pH-neutral leather conditioners help prevent dashboard and seat cracking in harsh summer heat. AC evaporator coil treatment helps remove musty odors for a fresher-smelling cabin.                            </p>
                            <p>

                                Professional clay bar decontamination safely removes industrial brake dust, highway tar, tree sap, and bird droppings without scratching the paint. Headlight lens restoration helps recover approximately 90–95% of original light output for better visibility and easier inspection approval. Engine bay precision degreasing uses citrus-based protectants that are gentler on rubber and aluminum components.                            </p>
                        </div>

                        <div class="service-details__bottom-text2">
                            <p>
                                Express 90-minute refresh services are available for busy professionals, along with comprehensive 5-hour full showroom detailing packages. Services include monsoon mud and interior extraction, post-road-trip sanitization, and pre-used-car-sale polishing to help boost resale value. Optional nano-ceramic coating offers up to 24 months of hydrophobic protection against water, UV rays, and contaminants.                            </p>
                            <p>
                                Wedding and special-occasion white-glove services include red carpet runner protection, confetti removal, and care for premium or silk seat covers. Corporate fleet contracts are available with dedicated vehicles and technicians to maintain multiple cars on a fixed schedule. Track-day preparation focuses on removing rubber debris and heavy brake dust from high-performance braking systems.                            </p>
                        </div>

                        <div class="service-details__bottom-text3">
                            <div class="row">
                                <div class="col-xl-4 col-lg-5">
                                    <div class="img-box">
                                        <img src="/assets/images/resources/car-cleaning.jpg" alt="Professional car detailing interior exterior before after" />
                                    </div>
                                </div>
                                <div class="col-xl-8 col-lg-7">
                                    <div class="content-box">
                                        <p>
                                            Nano-ceramic interior protectants create 360° spill-repellent surfaces on both fabric and leather. Trunk compartments are fully organized, spare tire wells cleaned, and emergency kits checked and arranged neatly. Convertible soft tops are deep-conditioned to help prevent cracking, and sunroof drain channels are cleared to reduce the risk of water leaks.                                        </p>
                                        <p>
                                            Complimentary mobile service is available at office complexes, residential societies, or corporate parking areas, with free pick-up and drop-off within a defined local radius. Pre-inspection detailing for regulatory or emission checks is designed to help maximize resale value by 12–18%. Pet-safe transport packages include rubber curry combs for hair removal and enzyme-based odor neutralizers for long-lasting freshness.                                        </p>
                                        <p>
                                            Vintage car restoration services feature period-correct waxes, fabric convertible top revival, and detailed wire wheel polishing. Electric vehicle interiors can be ozone-treated for odor control using battery-safe methods. Supercar detailing uses carbon-fiber-safe protectants to help preserve high-value performance vehicles over time.
                                        </p>
                                        <ul>
                                            <li><span class="icon-plus"></span> Steam seat extraction + Italian leather conditioning.</li>
                                            <li><span class="icon-plus"></span> Headlight restoration + industrial fallout decontamination.</li>
                                            <li><span class="icon-plus"></span> Nano-ceramic coating + 24-month hydrophobic warranty.</li>
                                            <li><span class="icon-plus"></span> Vintage convertible top restoration + wire wheel detailing.</li>
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

export default CarCleaning;