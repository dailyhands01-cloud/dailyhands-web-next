import { pricingPlansData } from '@/data/pricingPlans';
import Link from 'next/link';
import { useEffect } from 'react';
import BackgroundOne from '../../../public/assets/images/backgrounds/priceing-plan-v1-bg.webp';

const PricingSection = () => {

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
                            <span className="section-title__tagline">Transparent Cleaning Service Pricing</span>
                            <h2 className="section-title__title cleaning-pricing-section-title">Select Your Perfect Cleaning Package</h2>
                        </div>

                        <div className="text-box">
                            <p>
                                Choose from customized house cleaning packages tailored to your home size, frequency needs, and budget.
                                Each plan features certified professional cleaners, guaranteed quality standards, and seamless service
                                continuity for complete reliability and satisfaction.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="pricing-plan-one__carousel owl-carousel owl-theme owl-dot-style1">
                                {pricingPlansData.map((item, i) => (
                                    <div key={i} className="pricing-plan-one__single wow animated fadeInUp" data-wow-delay={item.delay}>
                                        <div className="pricing-plan-one__single-inner">
                                            <div className="layer-outer" style={{ backgroundImage: `url(${BackgroundOne.src})` }}></div>
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

                                            <div className="table-footer d-flex justify-content-center">
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

export default PricingSection;