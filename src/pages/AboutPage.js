import React from 'react';
import LargeBanner from "../components/LargeBanner.js"


function AboutPage(props) {

    return (
        <div id="body-tag">
            <LargeBanner title={props.title} />
        </div>  
    )

}

export default AboutPage;