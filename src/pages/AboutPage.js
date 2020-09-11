import React from 'react';
import LargeBanner from "../components/LargeBanner.js"
import Content from '../components/Content.js';

function AboutPage(props) {

    return (
        <div>
            <LargeBanner title={props.title} />
            <Content>
                <p>I am a student currently studying BSc in Information Technology at the University of the North-West.</p>
                <p>I am skilled in JAVA and love object orientated programming.</p>
                <p>This summary and about page will probably develop as I develop this webpage</p>
            </Content>
        </div>

            
    )

}

export default AboutPage;