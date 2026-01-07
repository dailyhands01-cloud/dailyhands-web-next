import React from 'react';
import Link from 'next/link';
import BlogSearch from '../widgets/BlogSearch';
import BlogCategory from '../widgets/BlogCategory';
import BlogLatestPost from '../widgets/BlogLatestPost';
import BlogQuery from '../widgets/BlogQuery';
import BlogTags from '../widgets/BlogTags';

const BlogDetails = () => {
    return (
        <>
            <section class="blog-details">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-7">
                            <div class="blog-details__left">
                                <div class="blog-details__img">
                                    <img src="/assets/images/blog/blog-details-img-1.jpg" alt="" />
                                    <div class="blog-details__date">
                                        <p>10 <br /> Oct</p>
                                    </div>
                                </div>
                                <div class="blog-details__content">
                                    <ul class="blog-details__meta list-unstyled">
                                        <li><Link href="/blog-details"><i class="fa fa-comments"></i><span>(2)</span></Link></li>
                                        <li><Link href="/blog-details"><i class="fa fa-thumbs-up"></i><span>(2)</span></Link></li>
                                    </ul>
                                    <h3 class="blog-details__title">Top Tips for Kitchen Cleaning</h3>
                                    <p class="blog-details__text-1">
                                        Keeping your kitchen clean is essential for hygiene, safety, and a pleasant cooking environment. Start by wiping down countertops, cabinets, and appliances daily to prevent grime buildup. Regularly clean sinks, faucets, and cutting boards with disinfectant to avoid bacterial growth. Don’t forget to empty the trash and sanitize trash cans to prevent odors. Deep clean your refrigerator and pantry weekly, checking for expired items and wiping surfaces. Proper cleaning tools, such as microfiber cloths and eco-friendly cleaners, make the process efficient and effective.
                                    </p>
                                    <p class="blog-details__text-2">
                                        Additionally, pay attention to stovetops, ovens, and microwaves, removing spills and grease promptly. Floors should be swept and mopped regularly to maintain a safe, hygienic environment. Organize utensils, pots, and pans to reduce clutter and make cleaning easier. Small habits, like wiping spills immediately and using liners in drawers or trays, help maintain cleanliness. Following these practical tips ensures your kitchen remains spotless, healthy, and inviting for cooking and dining every day.
                                    </p>

                                </div>
                                <div class="blog-details__content-two">
                                    <div class="blog-details__content-two-img">
                                        <img src="/assets/images/blog/blog-details-img-2.jpg" alt="" />
                                    </div>
                                    <div class="blog-details__content-two-details">
                                        <h3 class="blog-details__content-two-title">Top Tips for House Cleaning</h3>
                                        <p class="blog-details__content-two-text-1">
                                            Maintaining a clean home is essential for comfort, health, and productivity. Start by organizing rooms and decluttering surfaces to make cleaning easier. Regular dusting, vacuuming, and wiping down high-touch areas prevent dirt and germs from accumulating. Focus on kitchens and bathrooms, using disinfectants to keep these high-use spaces hygienic. Adopting a routine cleaning schedule ensures your home stays consistently fresh and welcoming for everyone.
                                        </p>
                                        <p class="blog-details__content-two-text-2">
                                            In addition to daily tasks, perform weekly deep cleaning for floors, windows, and furniture. Use eco-friendly cleaning products whenever possible to protect your family and pets. Small habits like wiping spills immediately, rotating chores, and keeping cleaning tools organized make house cleaning efficient and stress-free.
                                        </p>
                                        <ul class="blog-details__content-two-points">
                                            <li>Declutter each room before starting to make cleaning faster and more effective.</li>
                                            <li>Dust and wipe high-touch surfaces daily to maintain hygiene.</li>
                                            <li>Vacuum and mop floors regularly to keep them clean and allergen-free.</li>
                                            <li>Use eco-friendly cleaning products for a safer home environment.</li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="blog-details__bottom">
                                    <p class="blog-details__tags">
                                        <span>Tags</span>
                                        <a href="#">Cleaning</a>
                                        <a href="#">Business</a>
                                    </p>
                                    <div class="blog-details__social-list">
                                  
                                        <a href="#"><i class="fab fa-facebook"></i></a>
                                        <a href="https://www.instagram.com/dailyhands1?igsh=MWZsMnRxb20wdDJ0bQ=="><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="author-one">
                                    <div class="author-one__image">
                                        <img src="/assets/images/blog/author-1-1.jpg" alt="" />
                                    </div>
                                    <div class="author-one__content">
                                        <h3>Hover Cameron</h3>
                                        <p>Hover is a dedicated cleaning expert with years of experience in residential and commercial cleaning. Passionate about hygiene and efficiency, she ensures every space is spotless and welcoming.</p>
                                    </div>

                                </div>
                                <div class="comment-one">
                                    <h3 class="comment-one__title">2 Comments</h3>

                                    <div class="comment-one__single">
                                        <div class="comment-one__image">
                                            <img src="/assets/images/blog/comment-1-1.jpg" alt="Suren Sumi Comment" />
                                        </div>
                                        <div class="comment-one__content">
                                            <h3>Suren Sumi</h3>
                                            <p>The cleaning tips shared in this blog are incredibly useful! Following these guidelines has made maintaining a spotless and hygienic home much easier for me.</p>
                                            <span>November 15, 2025</span>
                                            <Link href="/blog-details" class="comment-one__btn">Reply</Link>
                                        </div>
                                    </div>

                                    <div class="comment-one__single">
                                        <div class="comment-one__image">
                                            <img src="/assets/images/blog/comment-1-2.jpg" alt="Jessica Brown Comment" />
                                        </div>
                                        <div class="comment-one__content">
                                            <h3>Jessica Brown</h3>
                                            <p>I loved the practical advice on keeping kitchens and bathrooms clean. The step-by-step tips are easy to follow and have really improved the hygiene of my home.</p>
                                            <span>December 03, 2025</span>
                                            <a href="/blog-details" class="comment-one__btn">Reply</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="comment-form">
                                    <h3 class="comment-form__title">Leave A Reply</h3>
                                    <form action="https://formspree.io/f/meeojopo" method='POST' class="comment-one__form contact-form-validated"
                                        novalidate="novalidate">
                                        <div class="row">
                                            <div class="col-xl-12">
                                                <div class="comment-form__input-box">
                                                    <input type="text" placeholder="Your Name" name="name" />
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="comment-form__input-box">
                                                    <input type="email" placeholder="Email Address" name="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-12">
                                                <div class="comment-form__input-box comment-form__textarea">
                                                    <textarea name="message" placeholder="Write a Message"></textarea>
                                                </div>
                                                <div class="comment-form__btn-box">

                                                    <button class="thm-btn comment-form__btn" type="submit"
                                                        data-loading-text="Please wait...">
                                                        <span>Post Comment</span>
                                                        <i class="liquid"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="sidebar">
                                <BlogSearch />
                                <BlogCategory />
                                <BlogLatestPost />
                                <BlogQuery />
                                <BlogTags />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetails;