
/*Created by Sudha Prathyusha Jakkaladiki//
  Project :IGRA
  Created on : 27 th Novermber
*/
import React from 'react'
import './features.css';
import {Feature} from "../../components";
const featuresData =  [

    {
        title:'improving instantly',
        text: 'Navigate to different pages to learn more'
    },
    {
        title:'Become active',
        text: 'Know the information Seek the Permission'
    },
    {
        title:'Communication is key ',
        text: 'Let us the objective '
    },
    {
        title:'Information Repocitory ',
        text: 'An Efficient Traversel'
    }
]
const Features = ()  => {
    return (
        <div  className="dss__features section__padding" id="features">
            <div  className="dss__features-heading">
                <h1 className="gradient__text">The Research Projects are inclined to industry and entriprise needs </h1>
                <p>Request Early Access to get Started </p>
            </div>
            <div className="dss__features-container">
                {featuresData.map((item,index)=>(
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features