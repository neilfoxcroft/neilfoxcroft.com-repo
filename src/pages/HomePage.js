import React from 'react';
import LargeBanner from '../components/LargeBanner';

function HomePage(props) {

    return (
        <LargeBanner title={props.title} subTitle={props.subTitle}/>
    )

}

export default HomePage;