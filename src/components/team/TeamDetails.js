
const TeamDetails = () => {
    return (
        <>
            <section className="team-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 d-flex">
                            {/* Start Team Details Img */}
                            <div className="team-details__img js-tilt ">
                                <img src="/assets/images/resources/team-detalis-img1.webp" alt="Team Details" loading="lazy" />
                            </div>
                            {/* End Team Details Img */}
                        </div>

                        <div className="col-xl-7">
                            {/* Start Team Details Content */}
                            <div className="team-details__content">
                                <div className="title">
                                    <h2>Team Details</h2>
                                </div>

                                <div className="name">
                                    <h6>Name : Sakshi Mehra</h6>
                                </div>

                                <div className="text">
                                    <p>
                                        About : Sakshi Mehra is an accomplished operations manager specializing in professional house cleaning, car detailing, and commercial cleaning services.
                                        With extensive industry expertise, she drives operational excellence and consistently delivers exceptional results and complete customer satisfaction across residential, commercial, and automotive projects.
                                    </p>
                                </div>

                                <div className="number">
                                    <p>Call: <a href="tel:8805779006">+91 88057 79006</a></p>
                                </div>
                                <div className="social-icon">
                                    <div className="title">
                                        <h6>Follow us:</h6>
                                    </div>
                                    <ul>
                                        <li><a href="https://www.facebook.com/profile.php?id=61587064916236#"><i className="fab fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Team Details Content */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamDetails;