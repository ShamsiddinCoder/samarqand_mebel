import React from 'react';
import './HomeSliderComponents.scss';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa6";
import { countHeaderFunction } from '../../Functions/Reduxes/CountNavReducer';

export default function HomeSliderComponents({id, avatar, titleHeader, title, boxWidth}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  return (
    <div className='homeSlide' style={{width: boxWidth + 'px'}}>
        <div className='homeSlide_inner'
            style={{backgroundImage: `url(${avatar})`}}
        >
            <div className='home_slide_title'>
                <p>{titleHeader}</p>
                <h2>{title}</h2>
                <button onClick={() => {dispatch(countHeaderFunction(1)); navigate('/xarid')}} >Xoziroq xarid qilish <FaChevronRight /></button>
            </div>
        </div>
    </div>    
  )
}
