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
                                Our professional bedroom cleaning service is designed to create a clean, hygienic, and relaxing living space.
                                We thoroughly remove dust, allergens, and hidden dirt from floors, furniture, mattresses, and high-touch areas
                                using safe and effective cleaning methods.
                            </p>
                            <p>
                                From vacuuming and mopping to surface sanitization and organized detailing, our trained cleaning experts ensure
                                your bedroom remains fresh, comfortable, and well-maintained. Whether you need regular upkeep or deep bedroom
                                cleaning, we deliver reliable results that enhance indoor air quality and overall comfort.
                            </p>
                        </div>

                        <div class="service-details__bottom-text2">
                            <p>
                                Our bedroom cleaning process focuses on hygiene, comfort, and attention to detail. We clean and disinfect
                                frequently touched surfaces, remove dust buildup, and ensure every corner is properly maintained for a
                                healthier and more pleasant environment.
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
                                            Our bedroom cleaning service is designed to deliver a spotless, healthy, and well-organized living space
                                            through a detailed and systematic cleaning process. Our trained professionals carefully remove dust, dirt,
                                            and allergens from floors, furniture, mattresses, and hard-to-reach areas using industry-approved tools and
                                            safe cleaning solutions. Special attention is given to high-touch surfaces, ensuring a hygienic environment
                                            that supports better indoor air quality and everyday comfort.
                                        </p>
                                        <p>
                                            Whether you require routine maintenance or a deep bedroom cleaning service, we follow strict quality
                                            standards to protect your furnishings while achieving long-lasting cleanliness. Our goal is to create
                                            a calm, fresh, and relaxing bedroom environment that enhances both hygiene and overall well-being.
                                        </p>
                                        <ul>
                                            <li><span class="icon-plus"></span> Detailed dusting and cleaning of all bedroom surfaces</li>
                                            <li><span class="icon-plus"></span> Disinfection of frequently touched areas for added safety</li>
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