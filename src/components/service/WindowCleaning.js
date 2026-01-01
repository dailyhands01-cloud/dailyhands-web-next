import React from 'react';
import Link from 'next/link';

const WindowCleaning = () => {
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
                                        <li className="service-details__sidebar-list-item"><Link href="/" className="active">Window Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/office-cleaning">Office Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/commercial-cleaning">Commercial Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/house-cleaning">House Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/car-cleaning">Car Cleaning</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-8 order-1">
                                <div className="service-details__top-img">
                                    <img src="/assets/images/resources/service-details-img3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 class="service-details__bottom-title">Professional Window Cleaning Services</h2>

                        <div class="service-details__bottom-text1">
                            <p>
                                Our professional window cleaning service is designed to enhance the appearance of your home or workplace
                                by delivering streak-free, crystal-clear results. We remove dust, water stains, fingerprints, and
                                environmental buildup from interior and exterior glass surfaces using advanced tools and safe cleaning
                                solutions.
                            </p>
                            <p>
                                From residential windows to commercial glass panels, our trained cleaning professionals follow proven
                                techniques to ensure spotless finishes without damaging frames, seals, or surrounding surfaces. Regular
                                window cleaning not only improves visibility but also extends the life of your windows.
                            </p>
                        </div>

                        <div class="service-details__bottom-text2">
                            <p>
                                We pay close attention to window tracks, sills, and corners, ensuring a complete and detailed cleaning
                                experience. Whether you need routine window maintenance or a deep glass cleaning service, we provide
                                reliable, efficient, and high-quality results that brighten your space.
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
                                            Our window cleaning service is performed with precision and attention to detail to ensure clear, spotless,
                                            and streak-free glass surfaces. We carefully remove dust, dirt, water marks, and environmental residue from
                                            both interior and exterior windows using professional-grade equipment and eco-safe cleaning solutions.
                                            This process enhances natural light, improves visibility, and contributes to a cleaner overall appearance
                                            of your property.
                                        </p>
                                        <p>
                                            Our experienced cleaning professionals follow safe and efficient techniques to protect window frames,
                                            seals, and surrounding surfaces while delivering consistent results. Whether it’s routine maintenance or
                                            deep window cleaning, we ensure a polished finish that enhances the look and longevity of your windows.
                                        </p>
                                        <ul>
                                            <li><span class="icon-plus"></span> Streak-free cleaning of interior and exterior glass surfaces</li>
                                            <li><span class="icon-plus"></span> Detailed cleaning of window frames, tracks, and sills</li>
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

export default WindowCleaning;