import React from 'react';
import './BoxProduct.scss';
import {useDispatch} from 'react-redux';
import { sliderJobsFunction } from '../../Functions/Reduxes/CountNavReducer';

export default function BoxProduct({linkNames, id, dirLink, jobs = false, color, link, index, choseHandler}) {
  const dispatch = useDispatch();
    let srcLink = require(`../../assets/${dirLink !== '' ? linkNames + dirLink + link[0] : linkNames + link}`);

    const choosHandler = () => {
      if(!jobs){
        choseHandler(index);
      }
    };
    
    const jobsSlid = () => {
      if(jobs){
        dispatch(sliderJobsFunction());
      }
    };
    
  return (
    <div className='product' onClick={() => choosHandler()} onDoubleClick={() => jobsSlid()}>
      <div className='product_img'>
        <img src={srcLink} />
      </div>
    </div>
  )
}
