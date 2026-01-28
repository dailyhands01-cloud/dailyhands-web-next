import { BlogTwoData } from '@/data/blog';
import Link from 'next/link';

const BlogTwo = () => {
    return (
        <>
            <section className="blog-one blog-one--two pd-120-0-120">
                <div className="container">
                    <div className="section-title__style2">
                        <div className="section-title">
                            <span className="section-title__tagline">Our Blog</span>
                            <h2 className="section-title__title">Latest Cleaning Tips, News & Insights</h2>
                        </div>
                        <div className="text-box">
                            <p>
                                Explore expert cleaning tips, industry updates, and practical guides designed to keep your home and workspace fresh, healthy, and well-maintained. From daily housekeeping advice to professional cleaning insights, our blog helps you make smarter cleaning decisions.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {BlogTwoData.map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-4">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={item.image} alt={item.alt} loading="lazy"/>
                                        <div className="overlay-icon">
                                            <Link href={item.link}><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
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
                </div>
            </section>
        </>
    )
}

export default BlogTwo;