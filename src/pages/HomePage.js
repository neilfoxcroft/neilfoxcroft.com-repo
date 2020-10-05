import React from 'react';

import LargeBanner from '../components/LargeBanner';
import Carousel from '../components/Carousel.js';

function HomePage(props) {

    return (
        <div>        
            <LargeBanner title={props.title} subTitle={props.subTitle}/>
            <LargeBanner subTitle="Projects" homeText="from training projects to personal experiments."/>
            <Carousel/>
        </div>

    )

}

export default HomePage;