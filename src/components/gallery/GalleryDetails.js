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
                                    <img src="/assets/images/gallery/gallery-details-img.webp" alt="" />
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
                                    <h2>Expert House Cleaning Services for Spotless Homes</h2>

                                    <p class="text1">
                                        Professional house cleaning services that create healthier living spaces for families.
                                        Thorough cleaning solutions using safe, effective products and proven techniques
                                        to maintain superior hygiene standards throughout your home.
                                    </p>

                                    <p class="text2">
                                        Complete coverage from kitchen deep cleaning and bathroom sanitization to dust-free
                                        bedrooms and living areas. Flexible schedules, certified cleaners, and guaranteed
                                        quality make professional home cleaning effortless and reliable.
                                    </p>
                                </div>

                                <div className="gallery-details__text-box2">
                                    <h2>Professional Bedroom Cleaning for Healthy Sleep</h2>

                                    <p className="text1">
                                        Professional bedroom cleaning eliminates dust, allergens, and germs for better sleep quality
                                        and improved health. Our expert services create a fresh, hygienic sleeping environment
                                        essential for restful nights and overall well-being.
                                    </p>

                                    <div className="gallery-details__text-box2-list">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-maps-and-flags"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Complete bed frame, wardrobe, shelf, and surface dusting</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <i className="icon-maps-and-flags"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Thorough floor vacuuming and mopping for dust-free surfaces</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <i className="icon-maps-and-flags"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Switches, mirrors, windows, and hard-to-reach areas cleaned</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="text2">
                                        Certified cleaners use safe products and detailed protocols for consistent quality.
                                        From daily maintenance to deep cleaning, we ensure your bedroom stays fresh,
                                        organized, and optimized for healthy sleep.
                                    </p>
                                </div>

                                {/* <div class="gallery-details__pagination clearfix">
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
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GalleryDetails;