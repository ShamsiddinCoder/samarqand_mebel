import React from 'react';
import './Xizmatlarimiz.scss';

export default function Xizmatlarimiz({id, name, title, avatar, boxWidth}) {
  return (
    <div className='xizmatlar'
        style={{width: boxWidth}}
    >
        <div className='xizmatlar_title'>
            <div className='xizmatlar_title_inner'>
                <h2>{name}</h2>
                <p>{title}</p>
            </div>
        </div>
        <div className='xizmatlar_img'>
            <div className='xizmatlar_img_inner'>
                <img src={avatar} alt='Foto' />
            </div>
        </div>

    </div>
  )
}
