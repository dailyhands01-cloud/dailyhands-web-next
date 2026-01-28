import Link from 'next/link';

const WindowCleaning = () => {
    return (
        <>
            <section className="service-details">
                <div className="container">
                    <div className="service-details__top">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-4 col-lg-8 order-2">
                                <div className="service-details__sidebar">
                                    <h2 className="service-details__sidebar-title">All Service</h2>
                                    <ul className="service-details__sidebar-list">
                                        <li className="service-details__sidebar-list-item"><Link href="/bedroom-cleaning">Bedroom Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/" className="active">Window Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/office-cleaning">Office Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/commercial-cleaning">Commercial Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/house-cleaning">House Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/car-cleaning">Car Cleaning</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-8 order-1">
                                <div className="service-details__top-img">
                                    <img src="/assets/images/resources/service-details-img3.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 className="service-details__bottom-title">Professional Window Cleaning Services</h2>

                        <div className="service-details__bottom-text1">
                            <p>
                                Get streak-free, crystal-clear windows for your home or office.
                                We remove dust, stains, fingerprints, and grime from interior and exterior glass using safe tools and solutions.
                            </p>
                            <p>
                                We clean residential windows and commercial glass panels with proven techniques for spotless results.
                                Regular cleaning improves visibility and extends window life without damaging frames or seals.
                            </p>
                        </div>

                        <div className="service-details__bottom-text2">
                            <p>
                                We clean window tracks, sills, and corners thoroughly.
                                Routine maintenance or deep cleaning—we deliver reliable results that brighten your space.
                            </p>
                        </div>

                        <div className="service-details__bottom-text3">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="img-box">
                                        <img src="/assets/images/resources/window-cleaning.webp" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7">
                                    <div className="content-box">
                                        <p>
                                            Enjoy spotless, streak-free windows with our precise professional cleaning service. We thoroughly remove dust, dirt, hard water marks, fingerprints, and environmental residue from all interior and exterior glass surfaces.
                                        </p>
                                        <p>
                                            Using eco-safe cleaning solutions and professional-grade tools like squeegees, microfiber cloths, and purified water systems, we ensure crystal-clear results without chemicals or damage. This detailed process maximizes natural light, improves visibility, enhances your property's appearance, and creates a brighter, cleaner living or working space.
                                        </p>
                                        <p>
                                            Our experts use safe techniques to protect window frames, seals, and surfaces while delivering perfect results every time. Routine maintenance or deep window cleaning—we guarantee a polished finish that makes your windows look new and last longer.
                                        </p>
                                        <ul>
                                            <li><span className="icon-plus"></span> Streak-free interior and exterior glass cleaning.</li>
                                            <li><span className="icon-plus"></span> Thorough cleaning of frames, tracks, and sills.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WindowCleaning;