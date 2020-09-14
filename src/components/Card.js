import React from 'react';
import '../index.css'

const Card = (props) =>{
    return (
        <div className='bg-light-green nav_item br3 pa3 ma2 grow bw2 shadow-5' >
            <img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p className='ma1 mb2'>{props.email}</p>
            </div>
        </div>
    );
}
export default Card;