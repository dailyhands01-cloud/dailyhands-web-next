import React from 'react';
import Link from 'next/link';

const GalleryDetails = () => {
    return (
        <>
            <section className="gallery-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="gallery-details__wrapper">
                                <div className="gallery-details__img">
                                    <img src="/assets/images/gallery/gallery-details-img.webp" alt="" />
                                </div>

                                {/* Projects Details Information Start */}
                                <div className="gallery-details__information">
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

                                <div className="gallery-details__text-box1">
                                    <h2>Expert House Cleaning Services for Spotless Homes</h2>

                                    <p className="text1">
                                        Professional house cleaning services that create healthier living spaces for families.
                                        Thorough cleaning solutions using safe, effective products and proven techniques
                                        to maintain superior hygiene standards throughout your home.
                                    </p>

                                    <p className="text2">
                                        Complete coverage from kitchen deep cleaning and bathroom sanitization to dust-free
                                        bedrooms and living areas. Flexible schedules, certified cleaners, and guaranteed
                                        quality make professional home cleaning effortless and reliable.
                                    </p>
                                </div>

                                <div classNameName="gallery-details__text-box2">
                                    <h2>Professional Bedroom Cleaning for Healthy Sleep</h2>

                                    <p classNameName="text1">
                                        Professional bedroom cleaning eliminates dust, allergens, and germs for better sleep quality
                                        and improved health. Our expert services create a fresh, hygienic sleeping environment
                                        essential for restful nights and overall well-being.
                                    </p>

                                    <div classNameName="gallery-details__text-box2-list">
                                        <ul>
                                            <li>
                                                <div classNameName="icon">
                                                    <i classNameName="icon-maps-and-flags"></i>
                                                </div>
                                                <div classNameName="text">
                                                    <p>Complete bed frame, wardrobe, shelf, and surface dusting</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div classNameName="icon">
                                                    <i classNameName="icon-maps-and-flags"></i>
                                                </div>
                                                <div classNameName="text">
                                                    <p>Thorough floor vacuuming and mopping for dust-free surfaces</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div classNameName="icon">
                                                    <i classNameName="icon-maps-and-flags"></i>
                                                </div>
                                                <div classNameName="text">
                                                    <p>Switches, mirrors, windows, and hard-to-reach areas cleaned</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <p classNameName="text2">
                                        Certified cleaners use safe products and detailed protocols for consistent quality.
                                        From daily maintenance to deep cleaning, we ensure your bedroom stays fresh,
                                        organized, and optimized for healthy sleep.
                                    </p>
                                </div>

                                {/* <div className="gallery-details__pagination clearfix">
                                    <ul>
                                        <li>
                                            <div className="previous">
                                                <p><Link href="/"><span className="fa fa-arrow-left"></span> Previous</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="next">
                                                <p><Link href="/">Next <span className="fa fa-arrow-right"></span></Link>
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