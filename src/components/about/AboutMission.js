import { useEffect } from 'react';

const AboutTwo = () => {
    
    useEffect(() => {
        if ($(".count-bar").length) {
            $(".count-bar").appear(
                function () {
                    var el = $(this);
                    var percent = el.data("percent");
                    $(el).css("width", percent).addClass("counted");
                },
                { accY: -50 }
            );
        }

        if ($(".progress-levels .progress-box .bar-fill").length) {
            $(".progress-box .bar-fill").each(function () {
                $(".progress-box .bar-fill").appear(function () {
                    var progressWidth = $(this).attr("data-percent");
                    $(this).css("width", progressWidth + "%");
                });
            });
        }
    }, []);

    return (
        <>
            <section className="about-two">
                <div className="container">
                    <div className="row">

                        {/* Start About Two Img */}
                        <div className="col-xl-6">
                            <div className="about-two__img clearfix">
                                <div
                                    className="about-two__img1 wow slideInLeft"
                                    data-wow-delay="100ms"
                                    data-wow-duration="2500ms"
                                >
                                    <div className="about-two__img1-inner">
                                        <img
                                            src="/assets/images/about/about-v2-img1.webp"
                                            alt="Professional Cleaning Process"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                <div
                                    className="about-two__img2 wow zoomIn"
                                    data-wow-delay="100ms"
                                    data-wow-duration="3500ms"
                                >
                                    <div className="about-two__img2-inner">
                                        <img
                                            src="/assets/images/about/about-v2-img2.webp"
                                            alt="Expert Cleaning Team at Work"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End About Two Img */}

                        {/* Start About Two Content */}
                        <div className="col-xl-6">
                            <div className="about-two__content">
                                <div className="section-title">
                                    <span className="section-title__tagline">Why Choose Us</span>
                                    <h2 className="section-title__title">
                                        Delivering Reliable, <br /> High-Quality Cleaning Solutions
                                    </h2>
                                </div>

                                <div className="about-two__content-inner">
                                    <div className="text">
                                        <p>
                                            Our cleaning solutions are designed to meet modern hygiene
                                            standards, ensuring safe, sanitized, and comfortable
                                            environments for homes, offices, and commercial spaces.
                                        </p>
                                    </div>

                                    <div className="about-two__content-list">
                                        <ul>
                                            <li>
                                                <p>
                                                    Advanced cleaning equipment and eco-friendly products.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Flexible service plans for residential and commercial
                                                    clients.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Strict quality checks to maintain consistent results.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="about-two__progress">

                                        {/* Progress Single */}
                                        <div className="about-two__progress-single">
                                            <h4 className="about-two__progress-title">
                                                Service Quality
                                            </h4>
                                            <div className="bar">
                                                <div
                                                    className="bar-inner count-bar"
                                                    data-percent="92%"
                                                >
                                                    <div className="count-text">92%</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Progress Single */}
                                        <div className="about-two__progress-single mar-b0">
                                            <h4 className="about-two__progress-title">
                                                Customer Satisfaction
                                            </h4>
                                            <div className="bar">
                                                <div
                                                    className="bar-inner count-bar"
                                                    data-percent="96%"
                                                >
                                                    <div className="count-text">96%</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End About Two Content */}

                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutTwo;
