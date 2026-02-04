import { blogGridPageData } from '@/data/blogs';

const BlogGrid = () => {
    return (
        <>
            <section className="blog-one blog-one--blog blog-one--blog--grid">
                <div className="container">
                    <div className="row">
                        {blogGridPageData.map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay={item.delay}>
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={item.image} alt={item.alt} loading="lazy" />
                                        <div className="overlay-icon">
                                            {/* <Link href={item.link}><span className="icon-plus"></span></Link> */}

                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <div className="blog-one__content-bg"></div>
                                        <ul className="meta-info">
                                            <li><span className="icon-user"></span><a href="#">{item.author}</a></li>
                                            <li><span className="icon-wall-clock"></span><a href="#">{item.comment}</a>
                                            </li>
                                        </ul>
                                        {/* <h2><Link href={item.link}>{item.heading}</Link></h2> */}
                                        <h2>{item.heading}</h2>
                                        <p>{item.description}</p>
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

export default BlogGrid;