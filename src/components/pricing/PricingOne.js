import React, { useEffect } from 'react';
import Link from 'next/link';
import { PricingOneData } from '@/data/pricing';
import BackgroundOne from '../../../public/assets/images/backgrounds/priceing-plan-v1-bg.png';

const PricingOne = () => {

    useEffect(() => {
        if ($(".pricing-plan-one__carousel").length) {
            $(".pricing-plan-one__carousel").owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                smartSpeed: 500,
                autoHeight: false,
                autoplay: true,
                dots: true,
                autoplayTimeout: 10000,
                navText: [
                    '<span class="icon-left-arrow"></span>',
                    '<span class="icon-right-arrow"></span>'
                ],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    }, []);

    return (
        <>
            <section className="pricing-plan-one">
                <div className="container">
                    <div className="section-title__style2">
                        <div className="section-title">
                            <span className="section-title__tagline">Cleaning Service Pricing</span>
                            <h2 className="section-title__title">Choose Your Cleaning Plan</h2>
                        </div>
                        <div className="text-box">
                            <p>Get professional daily cleaning services tailored to your apartment size. All plans include nearby staff and reliable replacement support for your peace of mind.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="pricing-plan-one__carousel owl-carousel owl-theme owl-dot-style1">
                                {PricingOneData.map((item, i) => (
                                    <div key={i} className="pricing-plan-one__single wow animated fadeInUp" data-wow-delay={item.delay}>
                                        <div className="pricing-plan-one__single-inner">
                                            <div className="layer-outer" style={{backgroundImage: `url(${BackgroundOne.src})`}}></div>
                                            <div className="table-header text-center">
                                                <div className="category-wrapper">
                                                    <h3>{item.heading}</h3>
                                                </div>
                                                <h2>{item.price}</h2>
                                                <p>{item.duration}</p>
                                            </div>

                                            <div className="table-content">
                                                <ul>
                                                    <li>{item.feature_one}</li>
                                                    <li>{item.feature_two}</li>
                                                    <li>{item.feature_three}</li>
                                                    <li>{item.feature_four}</li>
                                                    <li>{item.feature_five}</li>
                                                </ul>
                                            </div>

                                            <div className="table-footer">
                                                <Link href={item.link} className="thm-btn">
                                                    <span>{item.link_label}</span>
                                                    <div className="liquid"></div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PricingOne;