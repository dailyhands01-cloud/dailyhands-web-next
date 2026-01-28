
const AboutOne = () => {
    return (
        <>
            <section className="about-one pd-120-0-120">
                {/* Floating Image */}
                <div
                    className="about-one__img2 wow slideInRight"
                    data-wow-delay="500ms"
                >
                    <img
                        className="float-bob-x"
                        src="/assets/images/about/about-v1-img2.webp"
                        alt="Professional Cleaning Services"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        {/* Start About Image */}
                        <div className="col-xl-6 d-flex justify-content-center">
                            <div className="about-one__img clearfix">
                                <div className="about-one__img-inner">
                                    <img
                                        src="/assets/images/about/about-v1-img1.webp"
                                        alt="Trusted Residential and Commercial Cleaning"
                                    />
                                </div>
                                <div className="experince-box">
                                    <h2>5+ Years of Experience</h2>
                                </div>
                            </div>
                        </div>
                        {/* End About Image */}

                        {/* Start About Content */}
                        <div className="col-xl-6">
                            <div className="about-one__content">

                                <div className="section-title">
                                    <span className="section-title__tagline">About Us</span>
                                    <h2 className="section-title__title">
                                        Trusted Cleaning Experts <br />
                                        With 5+ Years of Experience
                                    </h2>
                                </div>

                                <div className="about-one__content-inner">
                                    <p className="about-one__content-text1">
                                        We help re-energize your home and workplace by delivering
                                        reliable, high-quality cleaning services that improve
                                        comfort, hygiene, and overall well-being.
                                    </p>

                                    <p className="about-one__content-text2">
                                        Our professionally trained team handles everything from regular housekeeping to
                                        detailed deep cleaning, using modern techniques to keep your spaces spotless,
                                        healthy, and welcoming.
                                    </p>

                                    <div className="about-one__content-list">
                                        <ul>
                                            <li>
                                                <p>
                                                    Choose comprehensive residential or commercial cleaning services.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Get customized cleaning plans tailored to your exact needs.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Work with experienced, verified, and professionally trained staff.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="about-one__content-btn">
                                        {/* <Link href="/about" className="thm-btn">
                                            <span>Learn More About Us</span>
                                            <div className="liquid"></div>
                                        </Link> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* End About Content */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutOne;
