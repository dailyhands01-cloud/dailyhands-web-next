
const NewsletterSection = () => {
    return (
        <>
            <section className="subscribe-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="subscribe-one__content">
                                <div className="subscribe-title">
                                    <h3>Subscribe Our Newsletters</h3>
                                </div>
                                <div className="subscribe-box">
                                    <form className="subscribe-form" action="https://formspree.io/f/meeojopo" method='POST'>
                                        <input type="email" name="email" placeholder="Enter Your Email" required />
                                        <button className="btn-one" type="submit"><span className="txt">Subscribe</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsletterSection;