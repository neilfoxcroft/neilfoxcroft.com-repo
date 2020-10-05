import React from 'react';

import LargeBanner from './components/LargeBanner';
import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "http://gph.is/28QlHvZ"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <LargeBanner title="Neil Foxcroft" subTitle="Personal Technical CV"/>
                    <button type="button" className="btn btn-outline-dark">View the course</button>
                    <img
                        src="src/images/neilfoxcroft.jpg"
                        alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo