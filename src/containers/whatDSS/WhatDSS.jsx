import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatDSS.css';

const WhatDSS = () => {
    return (
        <div className="dss__whatDSS section__margin" id="whatDSS">
            <div className="dss__whatDSS-feature">
                <Feature title="What is DSS "
                         text="This university decision support system is developed for university service-centric, aims at providing corporate information and statistics that can be viewed by directors and management or by those who are authorized to monitor it . "/>
            </div>
            <div className="dss__whatDSS-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
            </div>
            <div className="dss__whatDSS-container">
                <Feature title="Chatbots"
                         text="Chatbot to serve queries "/>
                <Feature title="Knowledgebase"
                         text="At jointure Knowledge repocitory for study needs"/>
                <Feature title="Education"
                         text="Education at its best "/>
            </div>
        </div>
    )
}

export default WhatDSS;