import { useEffect } from 'react';

const GalleryTwo = () => {

    useEffect(() => {
        if ($(".img-popup").length) {
            var groups = {};
            $(".img-popup").each(function () {
                var id = parseInt($(this).attr("data-group"), 10);

                if (!groups[id]) {
                    groups[id] = [];
                }
                groups[id].push(this);
            });

            $.each(groups, function () {
                $(this).magnificPopup({
                    type: "image",
                    closeOnContentClick: true,
                    closeBtnInside: false,
                    gallery: {
                        enabled: true
                    }
                });
            });
        }

        $(".gallery-page__single-img").on("click", function (e) {
            if (!$(e.target).closest(".img-popup").length) {
                $(this).find(".img-popup")[0].click();
            }
        });
    }, []);

    return (
        <>
            <section className="gallery-page">
                <div className="container">
                    <div className="row">
                        {/* Start Gallery Page Single */}
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="gallery-page__single">
                                <div className="gallery-page__single-img">
                                    <img src="/assets/images/gallery/gallery-page-img1.webp" alt="" />
                                    <div className="gallery-page__single-icon">
                                        <a className="img-popup" href="/assets/images/gallery/gallery-page-img1.webp"><span className="icon-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery Page Single */}

                        {/* Start Gallery Page Single */}
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="gallery-page__single">
                                <div className="gallery-page__single-img">
                                    <img src="/assets/images/gallery/gallery-page-img2.webp" alt="" />
                                    <div className="gallery-page__single-icon">
                                        <a className="img-popup" href="/assets/images/gallery/gallery-page-img2.webp"><span className="icon-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery Page Single */}

                        {/* Start Gallery Page Single */}
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="gallery-page__single">
                                <div className="gallery-page__single-img">
                                    <img src="/assets/images/gallery/gallery-page-img3.webp" alt="" />
                                    <div className="gallery-page__single-icon">
                                        <a className="img-popup" href="/assets/images/gallery/gallery-page-img3.webp"><span className="icon-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery Page Single */}

                        {/* Start Gallery Page Single */}
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="gallery-page__single">
                                <div className="gallery-page__single-img">
                                    <img src="/assets/images/gallery/gallery-page-img4.webp" alt="" />
                                    <div className="gallery-page__single-icon">
                                        <a className="img-popup" href="/assets/images/gallery/gallery-page-img4.webp"><span className="icon-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery Page Single */}

                        {/* Start Gallery Page Single */}
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="gallery-page__single">
                                <div className="gallery-page__single-img">
                                    <img src="/assets/images/gallery/gallery-page-img5.webp" alt="" />
                                    <div className="gallery-page__single-icon">
                                        <a className="img-popup" href="/assets/images/gallery/gallery-page-img5.webp"><span className="icon-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery Page Single */}

                        {/* Start Gallery Page Single */}
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="gallery-page__single">
                                <div className="gallery-page__single-img">
                                    <img src="/assets/images/gallery/gallery-page-img6.webp" alt="" />
                                    <div className="gallery-page__single-icon">
                                        <a className="img-popup" href="/assets/images/gallery/gallery-page-img6.webp"><span className="icon-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery Page Single */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default GalleryTwo;