import React from 'react';
import Link from 'next/link';

const HouseCleaning = () => {
    return (
        <>
            <section className="service-details">
                <div className="container">
                    <div className="service-details__top">
                        <div className="row">
                            <div className="col-xl-4 col-lg-8 order-2">
                                <div className="service-details__sidebar">
                                    <h2 className="service-details__sidebar-title">All Service</h2>
                                    <ul className="service-details__sidebar-list">
                                        <li className="service-details__sidebar-list-item"><Link href="/bedroom-cleaning">Bedroom Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/window-cleaning">Window Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/office-cleaning">Office Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/commercial-cleaning">Commercial Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/" className="active">House Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/car-cleaning">Car Cleaning</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-8 order-1">
                                <div className="service-details__top-img">
                                    <img src="/assets/images/resources/service-details-img6.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 class="service-details__bottom-title">Professional House Cleaning Services</h2>

                        <div class="service-details__bottom-text1">
                            <p>
                                Our professional house cleaning services are designed to keep your home clean, comfortable, and hygienic.
                                We remove dust, dirt, and germs from living rooms, bedrooms, kitchens, bathrooms, and common areas using
                                safe and effective cleaning products.
                            </p>
                            <p>
                                A clean home not only improves indoor air quality but also creates a healthier and more relaxing living
                                environment. Our trained cleaning professionals follow a detailed cleaning process to ensure consistent
                                results while protecting your furniture and household surfaces.
                            </p>
                        </div>

                        <div class="service-details__bottom-text2">
                            <p>
                                Whether you need regular home cleaning or a deep house cleaning service, we offer flexible schedules
                                tailored to your needs. From surface sanitization to floor cleaning and waste disposal, we deliver
                                reliable solutions that make your home feel fresh and well-maintained.
                            </p>
                        </div>

                        <div className="service-details__bottom-text3">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="img-box">
                                        <img src="/assets/images/resources/service-details-img2.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7">
                                    <div class="content-box">
                                        <p>
                                            Our house cleaning services are carefully designed to maintain a clean, healthy, and welcoming home
                                            environment. We focus on removing dust, dirt, and bacteria from all living spaces, including bedrooms,
                                            kitchens, bathrooms, and common areas, using safe and effective cleaning products suitable for everyday use.
                                        </p>
                                        <p>
                                            Our experienced cleaning professionals follow a detailed checklist to ensure consistent quality without
                                            disrupting your daily routine. Whether you need routine home cleaning or a deep house cleaning service,
                                            we deliver reliable results that enhance comfort, hygiene, and overall well-being.
                                        </p>
                                        <ul>
                                            <li><span class="icon-plus"></span> Thorough cleaning of all rooms and living areas</li>
                                            <li><span class="icon-plus"></span> Sanitization of high-touch surfaces for a healthier home</li>
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

export default HouseCleaning;