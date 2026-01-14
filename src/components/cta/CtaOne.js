import React from 'react';
import BackgroundOne from '../../../public/assets/images/backgrounds/cta-v1-bg.webp';

const CtaOne = () => {
    return (
        <>
            <section className="cta-one">
                <div className="image-layer" style={{ backgroundImage: `url(${BackgroundOne.src})` }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="cta-one__inner">
                                <div className="title">
                                    <h2>Contact Us Today for Exceptional Services You Can Trust</h2>
                                    <div className="number">
                                        <p>Call: <a href="tel:+918805779006">+91 88057 79006</a></p>
                                    </div>
                                </div>
                                <div className="button-box">
                                    <a className="thm-btn" onClick={() => {
                                        const element = document.getElementById('contact-form');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }} style={{border:"none"}}> <span> Contact Us </span>
                                    <div className="liquid"></div></a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CtaOne;