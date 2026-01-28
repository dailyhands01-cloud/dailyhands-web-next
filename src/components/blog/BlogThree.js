import { BlogThreeData } from '@/data/blog';
import Link from 'next/link';
import { useEffect } from 'react';

const BlogThree = () => {

    useEffect(() => {
        if ($(".blog-one__carousel").length) {
            $(".blog-one__carousel").owlCarousel({
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
            <section className="blog-one blog-one--blog">
                <div className="container">
                    <div className="section-title">
                        <span className="section-title__tagline">Our Blog</span>
                        <h2 className="section-title__title">
                            Professional Cleaning Tips & Guides
                        </h2>
                    </div>

                    <div className="text-box mb-4">
                        <p>
                            Discover professional house cleaning tips, practical home maintenance
                            guides, and expert cleaning techniques to keep your living spaces
                            spotless and healthy. From daily housekeeping solutions to deep cleaning
                            strategies, our insights help you achieve professional results
                            effortlessly.
                        </p>
                    </div>

                    <div className="row">
                        {BlogThreeData.map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-lg-4 wow fadeInUp"
                                data-wow-delay={item.delay}
                            >
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={item.image} alt={item.alt} loading="lazy" />
                                        <div className="overlay-icon">
                                            <Link href={item.link}><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>

                                    <div className="blog-one__content">
                                        <ul className="meta-info">

                                            <li>
                                                <span className="icon-user"></span>
                                                <a href="#">{item.author}</a>
                                            </li>
                                            <li>
                                                <span className="icon-wall-clock"></span>
                                                <a href="#">{item.comment}</a>
                                            </li>
                                        </ul>

                                        <h2><Link href={item.link}>{item.heading}</Link></h2>

                                        <p>{item.description}</p>

                                        <div className="btn-box">
                                            <Link href={item.link}>Read More <span className="icon-plus"></span></Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Styled Pagination (optional) */}
                    {/*
                        <``div className="row">
                        <div className="col-xl-12">
                            <ul className="styled-pagination text-center clearfix">
                            <li className="prev">
                                <a href="#"><span className="fa fa-angle-double-left"></span></a>
                            </li>
                            <li><a href="#" className="active">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li className="next">
                                <a href="#"><span className="fa fa-angle-double-right"></span></a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        */}
                </div>
            </section>

        </>
    )
}

export default BlogThree;