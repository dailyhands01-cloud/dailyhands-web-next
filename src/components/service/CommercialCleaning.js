import React from 'react';
import Link from 'next/link';

const CommercialCleaning = () => {
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
                                        <li className="service-details__sidebar-list-item"><Link href="/" className="active">Commercial Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/house-cleaning">House Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/car-cleaning">Car Cleaning</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-8 order-1">
                                <div className="service-details__top-img">
                                    <img src="/assets/images/resources/service-details-img5.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 class="service-details__bottom-title">Professional Commercial Cleaning Services</h2>

                        <div class="service-details__bottom-text1">
                            <p>
                                Our professional commercial cleaning services are designed to maintain clean, hygienic, and well-managed
                                business environments across various industries. We provide comprehensive cleaning solutions for offices,
                                retail stores, corporate buildings, and commercial facilities using advanced tools and safe cleaning products.
                            </p>
                            <p>
                                A clean commercial space enhances employee productivity, ensures health and safety compliance, and creates
                                a positive impression on clients and visitors. Our experienced cleaning professionals follow industry-standard
                                protocols to deliver consistent quality and reliable results.
                            </p>
                        </div>

                        <div class="service-details__bottom-text2">
                            <p>
                                We offer flexible commercial cleaning schedules tailored to your operational needs, including daily, weekly,
                                or customized service plans. From surface sanitization to floor care and waste management, we help businesses
                                maintain a professional and welcoming environment.
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
                                            Our commercial cleaning services are delivered with a focus on consistency, hygiene, and operational
                                            efficiency. We clean and maintain high-traffic commercial spaces by removing dust, dirt, and harmful
                                            germs from work areas, common spaces, restrooms, and shared facilities using industry-approved equipment
                                            and safe cleaning solutions.
                                        </p>
                                        <p>
                                            Our trained cleaning professionals follow structured cleaning checklists to ensure every area meets
                                            quality and safety standards. Whether you manage a corporate office, retail outlet, or commercial
                                            facility, our services are designed to minimize disruption while maintaining a clean, professional,
                                            and welcoming environment.
                                        </p>
                                        <ul>
                                            <li><span class="icon-plus"></span> Comprehensive cleaning of high-traffic and shared commercial areas</li>
                                            <li><span class="icon-plus"></span> Sanitization of surfaces to support workplace health and safety</li>
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