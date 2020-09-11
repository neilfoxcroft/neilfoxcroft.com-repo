import React from 'react';
import LargeBanner from "../components/LargeBanner.js"
import Content from '../components/Content.js';

function AboutPage(props) {

    return (
        <div>
            <LargeBanner title={props.title} />
            <Content>
                Check back later to learn more about me.
            </Content>
        </div>

            
    )

}

export default AboutPage;