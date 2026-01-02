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
                                Complete automotive transformation from hatchbacks, sedans, SUVs to luxury MPVs restored to showroom condition. 180°F steam seat extraction kills 99.9% bacteria/Staph while pH-neutral leather conditioner prevents dashboard cracking, seat bolstering from Pune summer heat. AC evaporator coil fogged eliminates musty odors permanently.
                            </p>
                            <p>
                                Professional clay bar decontamination safely removes industrial brake dust, highway tar, tree sap, bird droppings without single scratch. Headlight lens restoration returns 90-95% original light output passing RTO inspection. Engine bay precision degreased using citrus-based protectants safe for rubber/aluminum components.
                            </p>
                        </div>

                        <div class="service-details__bottom-text2">
                            <p>
                                Express 90-minute refreshes for busy professionals or comprehensive 5-hour showroom detailing packages. Monsoon mud/interior extraction, post-Lonavala roadtrip sanitization, pre-used car sale value-boosting polishes. Optional nano-ceramic coating provides 24-month hydrophobic protection repelling water, UV damage, contaminants.
                            </p>
                            <p>
                                Wedding/special occasion white glove service includes red carpet runner protection, confetti removal, silk seat covers. Corporate fleet contracts with dedicated vehicles/technicians. Race track preparation removes rubber debris from high-performance braking systems.
                            </p>
                        </div>

                        <div class="service-details__bottom-text3">
                            <div class="row">
                                <div class="col-xl-4 col-lg-5">
                                    <div class="img-box">
                                        <img src="/assets/images/resources/service-details-img2.jpg" alt="Professional car detailing interior exterior before after" />
                                    </div>
                                </div>
                                <div class="col-xl-8 col-lg-7">
                                    <div class="content-box">
                                        <p>
                                            Nano-ceramic technology interior protectant creates 360° spill-repellent surfaces on fabric/leather. Trunk compartments fully organized, spare tire well dust-free, emergency kit inventoried. Convertible soft tops deep conditioned prevent cracking. Sunroof drain channels cleared eliminate winter leaks.
                                        </p>
                                        <p>
                                            Complimentary mobile service at Pimpri office complexes, residential societies, or corporate parking. Free pick-up/drop-off within 15km radius. Pre-RTO/PUC inspection detailing maximizes resale value 12-18%. PetSafe transport package with rubber curry combs, enzyme odor neutralizers.
                                        </p>
                                        <p>
                                            Vintage car restoration specialty: period-correct waxes, convertible top fabric revival, wire wheel polishing. Electric vehicle interiors ozone-treated for battery-safe sanitization. Supercar carbon fiber safe protectants preserve 6-figure investments.
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