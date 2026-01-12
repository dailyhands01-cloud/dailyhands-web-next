import React from "react";
import Link from "next/link";

const Breadcrumb = ({
  heading = "About Us",
  currentPage = "About",
  bgImage = "/assets/images/backgrounds/page-header-img1.jpg",
}) => {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-header__wrapper">
              <div className="page-header__content">
                <h2>{heading}</h2>
                <div className="page-header__menu">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li>{currentPage}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
