/*Created by Sudha Prathyusha Jakkaladiki//
  Project :IGRA
  Created on : 25 th Novermber
*/
import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
    <div className="dss__header section__padding" id="home">
        <div className="dss__header-content">
            <h1 className="gradient__text">Let us know about UHK Decision support system</h1>
            <p>This university decision support system is a project which will be developed for university service-centric, aims at providing corporate information and statistics that can be viewed by directors and management or by those who are authorized to monitor it .</p>

            <div className="dss__header-content__input">
                <input type="email" placeholder="Your Email Address" />
                <button type="button">Get Started</button>
            </div>

            <div className="dss__header-content__people">
                <img src={people} />
                <p>15 people requested access a visit in last 24 hours</p>
            </div>
        </div>

        <div className="dss__header-image">
            <img src={ai} />
        </div>
    </div>
);

export default Header;
