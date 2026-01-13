import React from 'react';
import TeamOne from './TeamOne';

const TeamDetails = () => {
    return (
        <>
            <section class="team-details">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 d-flex">
                            {/* Start Team Details Img */}
                            <div class="team-details__img js-tilt "> 
                                <img src="/assets/images/resources/team-detalis-img1.webp" alt="" />
                            </div>
                            {/* End Team Details Img */}
                        </div>

                        <div class="col-xl-7">
                            {/* Start Team Details Content */}
                            <div class="team-details__content">
                                <div class="title">
                                    <h2>Team Details</h2>
                                </div>

                                <div class="name">
                                    <h6>Name : Sakshi Mehra</h6>
                                </div>

                                <div class="text">
                                    <p> 
                                        About : Sakshi Mehra is an accomplished operations manager specializing in professional house cleaning, car detailing, and commercial cleaning services.
                                        With extensive industry expertise, she drives operational excellence and consistently delivers exceptional results and complete customer satisfaction across residential, commercial, and automotive projects.
                                    </p>
                                </div>

                                <div class="number">
                                    <p>Call: <a href="tel:8805779006">+91 88057 79006</a></p>
                                </div>
                                <div class="social-icon">
                                    <div class="title">
                                        <h6>Follow us:</h6>
                                    </div>
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
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