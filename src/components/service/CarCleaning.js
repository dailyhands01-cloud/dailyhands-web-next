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
                                Our professional car cleaning services are designed to restore and maintain the cleanliness, comfort,
                                and appearance of your vehicle. We remove dust, stains, and buildup from both interior and exterior
                                surfaces using specialized tools and vehicle-safe cleaning products.
                            </p>
                            <p>
                                A clean car not only enhances visual appeal but also improves hygiene and driving comfort. Our trained
                                cleaning professionals carefully clean seats, dashboards, carpets, windows, and exterior panels to
                                deliver a fresh and polished finish.
                            </p>
                        </div>

                        <div class="service-details__bottom-text2">
                            <p>
                                Whether you need regular car cleaning or a deep interior and exterior detailing service, we provide
                                reliable and efficient solutions tailored to your vehicle’s needs. Our goal is to keep your car
                                spotless, sanitized, and well-maintained.
                            </p>
                        </div>

                        <div class="service-details__bottom-text3">
                            <div class="row">
                                <div class="col-xl-4 col-lg-5">
                                    <div class="img-box">
                                        <img src="/assets/images/resources/service-details-img2.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="col-xl-8 col-lg-7">
                                    <div class="content-box">
                                        <p>
                                            Our car cleaning service ensures your vehicle looks spotless, feels fresh, and is hygienically maintained.
                                            We thoroughly clean both the interior and exterior, removing dust, dirt, stains, and grime using safe
                                            cleaning products and professional-grade equipment.
                                        </p>
                                        <p>
                                            Our trained car cleaning professionals pay attention to every detail, including carpets, upholstery,
                                            dashboards, windows, and exterior panels, delivering a polished finish that enhances the appearance
                                            and comfort of your vehicle. Whether it’s a routine wash or a full detailing service, we provide
                                            consistent and reliable results.
                                        </p>
                                        <ul>
                                            <li><span class="icon-plus"></span> Complete interior cleaning, including seats, carpets, and dashboard</li>
                                            <li><span class="icon-plus"></span> Exterior washing, polishing, and stain removal for a spotless finish</li>
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