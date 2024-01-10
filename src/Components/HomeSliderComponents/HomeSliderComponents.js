import React from 'react';
import './HomeSliderComponents.scss';
import '../../App.css';
import { FaChevronRight } from "react-icons/fa6";

export default function HomeSliderComponents({id, avatar, titleHeader, title, boxWidth}) {
    
  return (
    <div className='homeSlide' style={{width: boxWidth + 'px'}}>
        <div className='homeSlide_inner'
            style={{backgroundImage: `url(${avatar})`}}
        >
            <div className='home_slide_title'>
                <p>{titleHeader}</p>
                <h2>{title}</h2>
                <button>Xoziroq xarid qilish <FaChevronRight /></button>
            </div>
        </div>
    </div>    
  )
}
