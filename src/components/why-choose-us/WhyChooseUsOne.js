import React, { useEffect } from 'react';

const  WhyChooseUsOne = () => {
    useEffect(() => {

        if ($(".tabs-box").length) {
            $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
                e.preventDefault();
                var target = $($(this).attr("data-tab"));

                if ($(target).is(":visible")) {
                    return false;
                } else {
                    target
                        .parents(".tabs-box")
                        .find(".tab-buttons")
                        .find(".tab-btn")
                        .removeClass("active-btn");
                    $(this).addClass("active-btn");
                    target
                        .parents(".tabs-box")
                        .find(".tabs-content")
                        .find(".tab")
                        .fadeOut(0)
                        .removeClass("active-tab");
                    $(target).fadeIn(300).addClass("active-tab");
                }
            });
        }

        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: true,
                fixedContentPos: false
            });
        }

    }, []);

    return (
        <>
            <section className="tab-one pd-120-0-120 clearfix">
                <div className="container">

                    {/* Section Heading */}
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Why Choose Us</span>
                        <h2 className="section-title__title">
                            Flexible Cleaning Plans Designed <br /> For Your Lifestyle
                        </h2>
                    </div>

                    <div className="tab-one__tabs tabs-box">
                        <ul className="tab-buttons clearfix">
                            <li data-tab="#providing" className="tab-btn active-btn"><span>Service Plans</span></li>
                            <li data-tab="#emergency" className="tab-btn"><span>Emergency Cleaning</span></li>
                            <li data-tab="#residential" className="tab-btn"><span>Residential Cleaning</span></li>
                            <li data-tab="#furniture" className="tab-btn"><span>Furniture Care</span></li>
                        </ul>

                        <div className="tabs-content">

                            {/* Service Plans */}
                            <div className="tab active-tab" id="providing">
                                <div className="row clearfix tab-inner-section">
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="tab-one__content">
                                            <div className="title">
                                                <h2>
                                                    Affordable & Reliable <br /> Cleaning Service Plans
                                                </h2>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    Our customized cleaning plans are designed to meet your daily,
                                                    weekly, or monthly needs while ensuring high-quality service
                                                    and consistent results.
                                                </p>
                                            </div>
                                            <ul className="tab-one__content-list">
                                                <li>Flexible scheduling options for homes and offices</li>
                                                <li>Transparent pricing with no hidden charges</li>
                                                <li>Trained and background-verified professionals</li>
                                                <li>Eco-friendly cleaning products for safety</li>
                                                <li>Quality assurance with regular inspections</li>
                                                <li>Customer support available at all times</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="tab-one__img">
                                            <img src="/assets/images/resources/tab-v1-img.jpg" alt="Professional Cleaning Services" />
                                            <div className="icon">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="tab-one__video-icon">
                                                        <span className="icon-play-button"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Cleaning */}
                            <div className="tab" id="emergency">
                                <div className="row clearfix tab-inner-section">
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="tab-one__content">
                                            <div className="title">
                                                <h2>
                                                    Fast & Reliable <br /> Emergency Cleaning Services
                                                </h2>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    When unexpected messes occur, our emergency cleaning team
                                                    responds quickly to restore cleanliness, hygiene, and comfort
                                                    without delay.
                                                </p>
                                            </div>
                                            <ul className="tab-one__content-list">
                                                <li>Same-day and urgent cleaning support</li>
                                                <li>24/7 availability for critical situations</li>
                                                <li>Advanced tools for deep sanitization</li>
                                                <li>Rapid response with professional staff</li>
                                                <li>Ideal for offices, homes, and commercial spaces</li>
                                                <li>Safety-focused and compliant cleaning methods</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="tab-one__img">
                                            <img src="/assets/images/resources/tab-v1-img.jpg" alt="Emergency Cleaning Services" />
                                            <div className="icon">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="tab-one__video-icon">
                                                        <span className="icon-play-button"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Residential Cleaning */}
                            <div className="tab" id="residential">
                                <div className="row clearfix tab-inner-section">
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="tab-one__content">
                                            <div className="title">
                                                <h2>
                                                    Trusted Residential <br /> Cleaning Solutions
                                                </h2>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    We provide thorough residential cleaning services that help
                                                    maintain a healthy, fresh, and comfortable living environment
                                                    for you and your family.
                                                </p>
                                            </div>
                                            <ul className="tab-one__content-list">
                                                <li>Complete home cleaning and sanitization</li>
                                                <li>Kitchen, bathroom, and living area care</li>
                                                <li>Safe cleaning for children and pets</li>
                                                <li>Customized plans based on home size</li>
                                                <li>Attention to detail in every corner</li>
                                                <li>Consistent quality with every visit</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="tab-one__img">
                                            <img src="/assets/images/resources/tab-v1-img.jpg" alt="Residential Cleaning Services" />
                                            <div className="icon">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="tab-one__video-icon">
                                                        <span className="icon-play-button"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Furniture Cleaning */}
                            <div className="tab" id="furniture">
                                <div className="row clearfix tab-inner-section">
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="tab-one__content">
                                            <div className="title">
                                                <h2>
                                                    Professional Furniture <br /> Cleaning & Care
                                                </h2>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    Our specialized furniture cleaning services help extend the
                                                    life of your furniture while restoring its original freshness
                                                    and appearance.
                                                </p>
                                            </div>
                                            <ul className="tab-one__content-list">
                                                <li>Sofa, mattress, and upholstery cleaning</li>
                                                <li>Deep stain and odor removal solutions</li>
                                                <li>Fabric-safe and damage-free methods</li>
                                                <li>Advanced equipment for better results</li>
                                                <li>Improves indoor air quality</li>
                                                <li>Ideal for homes, offices, and hotels</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="tab-one__img">
                                            <img src="/assets/images/resources/tab-v1-img.jpg" alt="Furniture Cleaning Services" />
                                            <div className="icon">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="tab-one__video-icon">
                                                        <span className="icon-play-button"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUsOne;
