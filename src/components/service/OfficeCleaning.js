import React from 'react';
import Link from 'next/link';

const OfficeCleaning = () => {
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
                                        <li className="service-details__sidebar-list-item"><Link href="/" className="active">Office Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/commercial-cleaning">Commercial Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/house-cleaning">House Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/car-cleaning">Car Cleaning</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-8 order-1">
                                <div className="service-details__top-img">
                                    <img src="/assets/images/resources/service-details-img7.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 class="service-details__bottom-title">Professional Office Cleaning Services</h2>

                        <div class="service-details__bottom-text1">
                            <p>
                                Our professional office cleaning services are designed to maintain a clean, organized, and productive
                                work environment. We eliminate dust, dirt, and germs from workstations, meeting rooms, common areas,
                                and high-traffic zones using safe and effective cleaning methods.
                            </p>
                            <p>
                                A clean office not only enhances employee well-being but also creates a positive impression on clients
                                and visitors. Our trained cleaning professionals follow structured cleaning protocols to ensure
                                consistent quality, hygiene, and attention to detail across your entire workspace.
                            </p>
                        </div>

                        <div class="service-details__bottom-text2">
                            <p>
                                Whether you require daily, weekly, or customized office cleaning schedules, we deliver reliable and
                                efficient services tailored to your business needs. From surface sanitization to waste management,
                                we help create a healthier and more professional workplace.
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
                                    <div className="content-box">
                                        <p>
                                            Our office cleaning service is structured to support a healthy, organized, and efficient work environment.
                                            We focus on removing dust, germs, and clutter from desks, meeting rooms, reception areas, and shared spaces
                                            using professional-grade equipment and safe cleaning products. This helps reduce the spread of bacteria
                                            while maintaining a clean and professional appearance throughout your office.
                                        </p>
                                        <p>
                                            Our trained cleaning staff follows standardized cleaning checklists to ensure consistent results without
                                            disrupting daily business operations. Whether you manage a small office or a large corporate workspace,
                                            we provide dependable cleaning solutions tailored to your schedule and business requirements.
                                        </p>

                                        <ul>
                                            <li><span className="icon-plus"></span> Cleaning and sanitization of workstations and common areas</li>
                                            <li><span className="icon-plus"></span> Hygienic maintenance of restrooms, floors, and high-touch surfaces</li>
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