import React from 'react';
import Link from 'next/link';

const BlogLatestPost = () => {
    return (
        <>
            <div className="sidebar__single sidebar__post wow animated fadeInUp" data-wow-delay="0.3s">
                <h3 className="sidebar__title">Recent Post</h3>
                <div className="sidebar__post-box">
                    <div className="sidebar__post-single">
                        <div className="sidebar-post__img">
                            <img src="/assets/images/blog/lp-1-1.webp" alt="Professional Car Cleaning Tips" />
                        </div>
                        <div className="sidebar__post-content-box">
                            <h3>
                                <Link href="/blog-details">Professional Car Cleaning Tips for a Spotless Vehicle</Link>
                            </h3>
                        </div>
                    </div>

                    <div className="sidebar__post-single">
                        <div className="sidebar-post__img">
                            <img src="/assets/images/blog/lp-1-2.webp" alt="Effective Bedroom Cleaning Guide" />
                        </div>
                        <div className="sidebar__post-content-box">
                            <h3>
                                <Link href="/blog-details">Effective Bedroom Cleaning Guide for a Fresh and Healthy Space</Link>
                            </h3>
                        </div>
                    </div>

                    <div className="sidebar__post-single">
                        <div className="sidebar-post__img">
                            <img src="/assets/images/blog/lp-1-3.webp" alt="House Cleaning Tips" />
                        </div>
                        <div className="sidebar__post-content-box">
                            <h3>
                                <Link href="/blog-details">House Cleaning Tips for a Spotless and Organized Home</Link>
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BlogLatestPost;