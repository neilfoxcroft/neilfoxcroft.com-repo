import React from 'react';

import CardInfo from '../components/CardInfo.js'

function Card(props) {
      
    return (
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <h3>{props.item.title}</h3>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );
    
}

export default Card;
