import React from 'react';
import './ServiceBox.scss';

export default function Boxes({id, fname, lname, lavozim, tajriba, avatar, ishlari, index, setChose, setActChousen, setDatesUsta}) {
  return (
    <div className='service_boxes' 
    onClick={() => {
        setChose(index); 
        setActChousen(act => act = !act);
        setDatesUsta(dat => ({...dat, id: id}));
    }}>
        <div className='service_boxes_titles'>
            <h3>{`${fname} ${ lname}`}</h3>
            <p>{lavozim}</p>
            <p>{tajriba}</p>
        </div>
        <div className='service_boxes_img'>
            <img src={avatar} /> 
        </div>
    </div>
  )
}
