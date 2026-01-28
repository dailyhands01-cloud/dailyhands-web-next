import React, { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import Sidebar from './sidebar';
import Link from 'next/link';

const HeaderOne = () => {

    useEffect(() => {
        $('select').niceSelect();
        if ($("#polyglot-language-options").length) {
            $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
                effect: 'slide',
                animSpeed: 500,
                testMode: true,
                onChange: function (evt) {
                    alert("The selected language is: " + evt.selectedItem);
                }
            });
        }
    }, []);

    const [isActive, setIsActive] = useState(false);
    
    return (
        <>
            <header className="main-header clearfix">
                <div className="main-header__top clearfix">
                    <div className="container clearfix">
                        <div className="main-header__top-inner clearfix">
                            <div className="main-header__top-left">
                                <ul className="main-header__top-address">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-email"></span>
                                        </div>
                                        <div className="text">
                                            <p ><a className="mail" href="mailto:info@dailyhands.in">info@dailyhands.in</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-wall-clock"></span>
                                        </div>
                                        <div className="text">
                                            <p>Sun - Fri: 8.00am - 10.00pm</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="main-menu clearfix">
                    <div className="container clearfix">
                        <div className="main-menu-wrapper clearfix">
                            <div className="main-menu-wrapper__left">
                                <div className="main-menu-wrapper__logo">
                                    <Link href="/"><img src="/assets/images/resources/logo-1.webp" alt="" /></Link>
                                </div>
                            </div>
                            <div className="main-menu-wrapper__right">
                                <div className="main-menu-wrapper__main-menu">
                                    <a onClick={() => setIsActive(true)} className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                    <NavMenu />
                                </div>
                                <button onClick={() => {
                                    const element = document.getElementById('contact-form');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }} className="thm-btn main-header__btn" style={{ border: "none" }}>
                                    <span>Contact Us</span>
                                    <div className="liquid"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <Sidebar isActive={isActive} setIsActive={setIsActive} />
            <div className="body-overlay"></div>
        </>
    )
}

export default HeaderOne;