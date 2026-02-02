import { FaqOneData } from '@/data/faqs';
import { useEffect } from 'react';

const FAQSection = () => {

    useEffect(() => {
        if ($(".accrodion-grp").length) {
            var accrodionGrp = $(".accrodion-grp");

            accrodionGrp.each(function () {
                var accrodionName = $(this).data("grp-name");
                var Self = $(this);
                var accordion = Self.find(".accrodion");
                Self.addClass(accrodionName);
                Self.find(".accrodion .accrodion-content").hide();
                Self.find(".accrodion.active").find(".accrodion-content").show();
                accordion.each(function () {
                    $(this)
                        .find(".accrodion-title")
                        .on("click", function () {
                            if (!$(this).parent().hasClass("active")) {
                                $(".accrodion-grp." + accrodionName)
                                    .find(".accrodion")
                                    .removeClass("active");
                                $(".accrodion-grp." + accrodionName)
                                    .find(".accrodion")
                                    .find(".accrodion-content")
                                    .slideUp();
                                $(this).parent().addClass("active");
                                $(this).parent().find(".accrodion-content").slideDown();
                            }
                        });
                });
            });
        }
    }, []);

    return (
        <>
            <section className="faq-one pd-120-0-120">
                <div className="container">
                    <div className="section-title__style2">
                        <div className="section-title">
                            <span className="section-title__tagline">Frequently Asked Questions</span>
                            <h2 className="section-title__title">Got Questions? We’re Here to Help</h2>
                        </div>
                        <div className="text-box">
                            <p>
                                Professional house cleaning services featuring certified cleaners, eco-friendly products,
                                and flexible scheduling options. From daily maintenance and weekly housekeeping to
                                comprehensive deep cleaning, kitchen sanitization, bathroom disinfection, and bedroom
                                allergen removal, our trained staff deliver consistent quality tailored to your home
                                size, lifestyle, and schedule requirements with 100% satisfaction guarantee.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        {/* Start Faq One Content */}
                        <div className="col-xl-7">
                            <div className="faq-one__content">
                                <div className="faq-one__faq">
                                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                        {FaqOneData.map((item, i) => (
                                            <div key={i} className={`accrodion wow fadeInUp ${item.open}`} data-wow-delay={item.delay} data-wow-duration={item.duration}>
                                                <div className="accrodion-title">
                                                    <div className="accrodion-title-inner">
                                                        <div className="icon">
                                                            <span className="icon-maps-and-flags"></span>
                                                        </div>
                                                        <div className="text">
                                                            <h4>{item.heading}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <div className="img-box">
                                                            <img src={item.image} alt={item.alt} loading="lazy" />
                                                        </div>
                                                        <div className="text">
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Faq One Content */}

                        {/* Start Faq One Img */}
                        <div className="col-xl-5 d-flex justify-content-center align-items-center">
                            <div className="faq-one__img">
                                <img src="/assets/images/resources/faq-v1-img2.webp" alt="Frequently asked questions" loading="lazy" />
                            </div>
                        </div>
                        {/* End Faq One Img */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQSection;