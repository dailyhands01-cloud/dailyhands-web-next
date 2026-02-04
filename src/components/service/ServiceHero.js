import { coreServicesData } from '@/data/services';
import Link from 'next/link';
import BackgroundOne from '../../../public/assets/images/pattern/services-v1-pattern.webp';

const ServiceHero = () => {
    return (
        <>
            <section className="services-one pd-120-0-90">
                <div className="services-one__pattern" style={{ backgroundImage: `url(${BackgroundOne.src})` }}></div>
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Our Services</span>
                        <h2 className="section-title__title">
                            Professional Cleaning Services You Can Trust
                        </h2>
                    </div>

                    <div className="row">
                        {coreServicesData.map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
                                data-wow-delay={item.delay}
                                data-wow-duration={item.duration}
                                style={{ cursor: "pointer" }}
                            >
                                <Link href={item.link} className="services-link">
                                    <div className="services-one__single">
                                        <div className="services-one__single-img">
                                            <div className="services-one__single-img-inner">
                                                <img src={item.image} alt={item.alt} loading="lazy" />
                                            </div>
                                            <div className="icon">
                                                <span className={item.icon}></span>
                                            </div>
                                        </div>

                                        <div className="services-one__single-content text-center">
                                            <h2 className="slide-line">{item.heading}</h2>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default ServiceHero;