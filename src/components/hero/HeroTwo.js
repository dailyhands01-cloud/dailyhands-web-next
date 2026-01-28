import Link from "next/link";
import { useEffect } from "react";
import { default as BackgroundOne, default as BackgroundThree, default as BackgroundTwo } from '../../../public/assets/images/backgrounds/main-slider-v2-bg.webp';

const HeroTwo = () => {

    useEffect(() => {
        if ($('.main-slider-two__carousel').length) {
            $('.main-slider-two__carousel').owlCarousel({
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
            <section className="main-slider-one main-slider-one--two">
                <div className="shape1 zoominout-2"><img src="/assets/images/shapes/main-slider-v2-shape1.webp" alt="" /></div>
                <div className="main-slider-two__carousel owl-carousel owl-theme">
                    {/* Start Main Slider Two Single */}
                    <div className="main-slider-one__single">
                        <div className="main-slider-one--two-img">
                            <img src="/assets/images/resources/main-slider-v2-img1.webp" alt="" />
                        </div>
                        <div className="image-layer" style={{ backgroundImage: `url(${BackgroundOne.src})` }}></div>
                        <div className="container">
                            <div className="main-slider-one__content">
                                <div className="tagline">
                                    <p>Welcome to Daily Hands.</p>
                                </div>
                                <div className="title">
                                    <h2>So Fresh & So Clean... <br /> We Promise!</h2>
                                </div>
                                <div className="text">
                                    <p>We will help you to feel better and enjoy every single day of <br /> may be the fastest
                                        growing health.</p>
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
                    {/* End Main Slider Two Single */}

                    {/* Start Main Slider Two Single */}
                    <div className="main-slider-one__single">
                        <div className="main-slider-one--two-img">
                            <img src="/assets/images/resources/main-slider-v2-img2.webp" alt="" />
                        </div>
                        <div className="image-layer" style={{ backgroundImage: `url(${BackgroundTwo.src})` }}></div>
                        <div className="container">
                            <div className="main-slider-one__content">
                                <div className="tagline">
                                    <p>Welcome to Daily Hands.</p>
                                </div>
                                <div className="title">
                                    <h2>So Fresh & So Clean... <br /> We Promise!</h2>
                                </div>
                                <div className="text">
                                    <p>We will help you to feel better and enjoy every single day of <br /> may be the fastest
                                        growing health.</p>
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
                    {/* End Main Slider Two Single */}

                    {/* Start Main Slider Two Single */}
                    <div className="main-slider-one__single">
                        <div className="main-slider-one--two-img">
                            <img src="/assets/images/resources/main-slider-v2-img3.webp" alt="" />
                        </div>
                        <div className="image-layer" style={{ backgroundImage: `url(${BackgroundThree.src})` }}></div>
                        <div className="container">
                            <div className="main-slider-one__content">
                                <div className="tagline">
                                    <p>Welcome to Daily Hands.</p>
                                </div>
                                <div className="title">
                                    <h2>So Fresh & So Clean... <br /> We Promise!</h2>
                                </div>
                                <div className="text">
                                    <p>We will help you to feel better and enjoy every single day of <br /> may be the fastest
                                        growing health.</p>
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
                    {/* End Main Slider Two Single */}
                </div>
            </section>
        </>
    )
}

export default HeroTwo;