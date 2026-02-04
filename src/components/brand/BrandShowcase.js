import { partnerBrandsData } from '@/data/brands';
import { Swiper, SwiperSlide } from "swiper/react";

const BrandShowcase = () => {
    return (
        <>
            <section className="brand-one brand-one--two">
                <div className="container">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={5}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            "0": {
                                spaceBetween: 30,
                                slidesPerView: 1
                            },
                            375: {
                                spaceBetween: 30,
                                slidesPerView: 2
                            },
                            575: {
                                spaceBetween: 30,
                                slidesPerView: 2
                            },
                            767: {
                                spaceBetween: 50,
                                slidesPerView: 3
                            },
                            991: {
                                spaceBetween: 50,
                                slidesPerView: 4
                            },
                            1199: {
                                spaceBetween: 30,
                                slidesPerView: 5
                            }
                        }} className="thm-swiper__slider swiper-container">
                        <div className="swiper-wrapper">
                            {partnerBrandsData.map((item, i) => (
                                <SwiperSlide key={i} className="swiper-slide">
                                    <div className="brand-one__single">
                                        <a href={item.link}><img src={item.image} alt={item.alt} loading="lazy" /></a>
                                        <h5><a href={item.link}>{item.title}</a></h5>
                                    </div>
                                </SwiperSlide>

                            ))}
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default BrandShowcase;