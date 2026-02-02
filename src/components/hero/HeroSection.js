import Link from "next/link";
import { useEffect } from "react";
import BackgroundOne from '../../../public/assets/images/backgrounds/main-slider-v1-img1.webp';
import BackgroundTwo from '../../../public/assets/images/backgrounds/main-slider-v1-img2.webp';
import BackgroundThree from '../../../public/assets/images/backgrounds/main-slider-v1-img3.webp';

const HeroSection = () => {

    useEffect(() => {
        if ($('.main-slider-one__carousel').length) {
            $('.main-slider-one__carousel').owlCarousel({
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                loop: true,
                margin: 0,
                dots: false,
                nav: true,
                singleItem: true,
                smartSpeed: 500,
                autoplay: true,
                autoplayTimeout: 9000,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1024: {
                        items: 1
                    }
                }
            });
        }
    }, []);

    return (
        <>
            <section className="main-slider-one">
                <div className="main-slider-one__carousel owl-carousel owl-theme">
                    {/* Start Main Slider One Single */}
                    <div className="main-slider-one__single">
                        <div className="top-shape"></div>
                        <div className="bottom-shape"></div>
                        <div className="image-layer" style={{ backgroundImage: `url(${BackgroundOne.src})` }}></div>
                        <div className="container">
                            <div className="main-slider-one__content">
                                <div className="tagline">
                                    <p>Welcome to Daily Hands. </p>
                                </div>
                                <div className="title">
                                    <h1>Professional Cleaning Services <br /> That Deliver Exceptional Results</h1>
                                </div>
                                <div className="text">
                                    <p>We deliver reliable health and wellness services that help you feel better, stay active, and enjoy a healthier lifestyle.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/contact" className="thm-btn">
                                        <span>Discover Now</span>
                                        <div className="liquid"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider One Single */}

                    {/* Start Main Slider One Single */}
                    <div className="main-slider-one__single">
                        <div className="top-shape"></div>
                        <div className="bottom-shape"></div>
                        <div className="image-layer" style={{ backgroundImage: `url(${BackgroundTwo.src})` }}>
                        </div>
                        <div className="container">
                            <div className="main-slider-one__content">
                                <div className="tagline">
                                    <p>Welcome to Daily Hands.</p>
                                </div>
                                <div className="title">
                                    <h2>Professional Cleaning Services <br /> That Deliver Exceptional Results</h2>
                                </div>
                                <div className="text">
                                    <p>We deliver reliable health and wellness services that help you feel better, stay active, and enjoy a healthier lifestyle.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/contact" className="thm-btn">
                                        <span>Discover Now</span>
                                        <div className="liquid"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider One Single */}

                    {/* Start Main Slider One Single */}
                    <div className="main-slider-one__single">
                        <div className="top-shape"></div>
                        <div className="bottom-shape"></div>
                        <div className="image-layer" style={{ backgroundImage: `url(${BackgroundThree.src})` }}>
                        </div>
                        <div className="container">
                            <div className="main-slider-one__content">
                                <div className="tagline">
                                    <p>Welcome to Daily Hands.</p>
                                </div>
                                <div className="title">
                                    <h2>Professional Cleaning Services <br /> That Deliver Exceptional Results</h2>
                                </div>
                                <div className="text">
                                    <p>We deliver reliable health and wellness services that help you feel better, stay active, and enjoy a healthier lifestyle.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/contact" className="thm-btn">
                                        <span>Discover Now</span>
                                        <div className="liquid"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider One Single */}
                </div>
            </section>
        </>
    )
}

export default HeroSection;