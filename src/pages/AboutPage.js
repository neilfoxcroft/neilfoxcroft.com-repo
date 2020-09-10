import React from 'react';
import LargeBanner from "../components/LargeBanner.js"
import Content from '../components/Content.js';

function AboutPage(props) {

    return (
        <div>
            <LargeBanner title={props.title} />
            <Content>
                Fill in info at later stage
            </Content>
        </div>

            
    )

}

export default AboutPage;