import React from 'react';

const ContactInfo = () => {
    return (
        <>
            <section className="contact-box">
                <div className="container">
                    <div className="row">
                        {/* Start Contact Box Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                            <div className="contact-box__single text-center">
                                <div className="contact-box__single-icon">
                                    <span className="fa fa-map-marker"></span>
                                </div>
                                <div className="contact-box__single-text">
                                    <h2><a href="#">Our Location</a></h2>
                                    <p>Spring Valley<br />Near Kaylani Training Center,<br />Keshavnagar, Mundhwa,<br />Pune 411036</p>
                                </div>
                            </div>
                        </div>
                        {/* End Contact Box Single */}
                        
                        {/* Start Contact Box Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">
                            <div className="contact-box__single text-center">
                                <div className="contact-box__single-icon">
                                    <span className="icon-email"></span>
                                </div>
                                <div className="contact-box__single-text">
                                    <h2><a href="#">Email Address</a></h2>
                                    <p><a href="mailto:info@dailyhands.in">info@dailyhands.in</a></p>
                                    <p><a href="https://dailyhands.in">www.dailyhands.in</a></p>
                                </div>
                            </div>
                        </div>
                        {/* End Contact Box Single */}

                        {/* Start Contact Box Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms">
                            <div className="contact-box__single text-center">
                                <div className="contact-box__single-icon">
                                    <span className="fa fa-phone"></span>
                                </div>
                                <div className="contact-box__single-text">
                                    <h2><a href="#">Phone Number</a></h2>
                                    <p><a href="tel:8805779006">+91 88057 79006</a></p>
                                    <p><a href="tel:7385483447">+91 73854 83447</a></p>
                                </div>
                            </div>
                        </div>
                        {/* End Contact Box Single */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactInfo;