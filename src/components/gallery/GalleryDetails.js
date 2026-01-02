import React from 'react';
import Link from 'next/link';

const GalleryDetails = () => {
    return (
        <>
            <section class="gallery-details">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="gallery-details__wrapper">
                                <div class="gallery-details__img">
                                    <img src="/assets/images/gallery/gallery-details-img.jpg" alt="" />
                                </div>

                                {/* Projects Details Information Start */}
                                <div class="gallery-details__information">
                                    <ul>
                                        <li>
                                            <h5>Date</h5>
                                            <p>03 may, 2025</p>
                                        </li>

                                        <li>
                                            <h5>Client</h5>
                                            <p>UrbanNest Facilities Pvt. Ltd.</p>

                                        </li>

                                        <li>
                                            <h5>Website</h5>
                                            <p><a href="#">DailyHands.in</a></p>
                                        </li>

                                        <li>
                                            <h5>Location</h5>
                                            <p>Pune, Maharashtra, India</p>
                                        </li>

                                        <li>
                                            <h5>Value</h5>
                                            <p>$5,200</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* Projects Details Information End */}

                                <div class="gallery-details__text-box1">
                                    <h2>Professional House Cleaning Services</h2>

                                    <p class="text1">
                                        Our house cleaning services are designed to create a healthier, fresher, and more comfortable living
                                        environment for you and your family. We provide reliable and thorough cleaning solutions that cover every
                                        corner of your home, using safe products and proven cleaning techniques to maintain the highest standards
                                        of hygiene.
                                    </p>

                                    <p class="text2">
                                        From daily upkeep to deep cleaning, our trained professionals ensure spotless kitchens, sanitized bathrooms,
                                        dust-free living areas, and well-maintained bedrooms. With flexible scheduling, verified staff, and quality
                                        assurance, we make home cleaning stress-free, consistent, and tailored to your lifestyle.
                                    </p>
                                </div>



                                <div class="gallery-details__text-box2">
                                    <h2>Bedroom Cleaning Services</h2>

                                    <p class="text1">
                                        A clean bedroom is essential for better sleep, improved health, and overall well-being. Our professional
                                        bedroom cleaning services focus on eliminating dust, allergens, and germs to create a calm, hygienic, and
                                        refreshing space for your daily rest.
                                    </p>

                                    <div class="gallery-details__text-box2-list">
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <i class="icon-maps-and-flags"></i>
                                                </div>
                                                <div class="text">
                                                    <p>Thorough dusting of beds, wardrobes, shelves, and surfaces</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="icon">
                                                    <i class="icon-maps-and-flags"></i>
                                                </div>
                                                <div class="text">
                                                    <p>Floor cleaning, vacuuming, and mopping for a dust-free room</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="icon">
                                                    <i class="icon-maps-and-flags"></i>
                                                </div>
                                                <div class="text">
                                                    <p>Cleaning of switches, mirrors, windows, and hard-to-reach corners</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <p class="text2">
                                        Our trained and verified staff use safe cleaning products and follow a detailed checklist to ensure consistent
                                        quality. Whether it’s daily maintenance or periodic deep cleaning, we help maintain a fresh, organized, and
                                        comfortable bedroom environment.
                                    </p>
                                </div>


                                <div class="gallery-details__pagination clearfix">
                                    <ul>
                                        <li>
                                            <div class="previous">
                                                <p><Link href="/"><span class="fa fa-arrow-left"></span> Previous</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="next">
                                                <p><Link href="/">Next <span class="fa fa-arrow-right"></span></Link>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GalleryDetails;