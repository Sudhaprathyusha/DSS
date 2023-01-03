import React from 'react';
import dssLogo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
    <div className="dss__footer section__padding">
        <div className="dss__footer-heading">
            <h1 className="gradient__text">Do you want to know more ,request for early access </h1>
        </div>

        <div className="dss__footer-btn">
            <p>Request Early Access</p>
        </div>

        <div className="dss__footer-links">
            <div className="dss__footer-links_logo">
                <img src={dssLogo} alt="dss_logo" />
                <p>Rokitanského 62/26, 500 03 Hradec Králové, Czechia, <br /> All Rights Reserved</p>
            </div>
            <div className="dss__footer-links_div">
                <h4>Links</h4>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
            </div>
            <div className="dss__footer-links_div">
                <h4>School</h4>
                <p>Terms & Conditions </p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className="dss__footer-links_div">
                <h4>Get in touch</h4>
                <p>Hradec Kralove</p>
                <p>042-603903631</p>
                <p>jan.kruncik@uhk.cz</p>
                <p>martina.janeckova@uhk.cz</p>
                <p>sudha.jakkaladiki@uhk.cz</p>
            </div>
        </div>

        <div className="dss__footer-copyright">
            <p>@2022 DSS. All rights reserved.</p>
        </div>
    </div>
);

export default Footer;

