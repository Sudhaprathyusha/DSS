import React from 'react'
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = ()  => {
    return (
        <div  className="dss__possibility section__padding" id="possibility">
            <div  className= "dss__possibility-image">
                <img src = {possibilityImage} alt="possibility" />
            </div>
            <div className="dss__possibility-content">
                <h4>Request for Access</h4>
                <h1 className="gradient__text">The Possibilities are beyond your imagination</h1>
                <p>Possibilities for Navigation is enormous </p>
                <h4>Request for Early Access to get started</h4>
            </div>
        </div>
    );
}

export default Possibility;