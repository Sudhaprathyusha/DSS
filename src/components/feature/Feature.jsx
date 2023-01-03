
/*Created by Sudha Prathyusha Jakkaladiki//
  Project :IGRA
  Created on : 27 th Novermber
*/

import React from 'react'
import './feature.css';

const Feature = ({title,text} )  => {
    return (
        <div  className="dss__features-container__feature">
            <div className="dss__features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div className="dss__features-container_feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature