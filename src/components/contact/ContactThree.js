import React from 'react';

const ContactThree = () => {
    return (
        <>
            <section className="contact-page-form">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="contact-page-form__inner">
                                <form action="https://formspree.io/f/meeojopo" method="POST" className="contact-page-form__form contact-form-validated">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="contact-page-form__input-box">
                                                <input type="text" placeholder="Your name" name="name" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="contact-page-form__input-box">
                                                <input type="text" placeholder="Phone number" name="phone" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="contact-page-form__input-box">
                                                <input type="email" placeholder="Email address" name="email" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="contact-page-form__input-box">
                                                <input type="text" placeholder="Subject" name="subject" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="contact-page-form__input-box">
                                                <textarea name="message" placeholder="Write message"></textarea>
                                            </div>
                                            <div className="contact-page-form__btn">
                                                <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                    <span>Send Us Message</span>
                                                    <i className="liquid"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactThree;