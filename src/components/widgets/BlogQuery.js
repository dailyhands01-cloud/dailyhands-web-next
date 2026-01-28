import QueryImg from '../../../public/assets/images/backgrounds/sidebar-support-bg.webp';

const BlogQuery = () => {
    return (
        <>
            <div className="sidebar__single sidebar__support wow animated fadeInUp" data-wow-delay="0.4s">
                <div className="sidebar__support-bg" style={{ backgroundImage: `url(${QueryImg.src})` }}></div>
                <h3 className="sidebar__suppot-title">Have Any Questions?</h3>
                <p className="sidebar__suppot-text"> Need help choosing the right cleaning service? Our expert team is ready to assist you with personalized solutions for your home or office.</p>
                <div className="sidebar__support-btn-box">
                    <button type="submit" className="thm-btn sidebar__support-btn">
                        <span>Send Message</span>
                        <i className="liquid"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default BlogQuery;