import React from 'react';
import './SliderJobs.scss';
import { ishlarimiz } from '../../StaticData/BizningIshlarimiz';
import SlideJobsBox from './SlideJobsBox';
import Information from '../Information/Information';
import { RiCloseCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { sliderJobsFunction } from '../../Functions/Reduxes/CountNavReducer';

export default function SliderJobs() {
    const dispatch = useDispatch();
    const actSlideJobs = useSelector(elem => elem.count.sliderJobs);

    const responce = [
        {breakpoint: {width: 0, item: 1}},
        {breakpoint: {width: 656, item: 2}},
    ];

  return (
    <div className='sliderJobs' style={{display: actSlideJobs ? 'flex' : 'none'}}>
        <button onClick={() => dispatch(sliderJobsFunction())}><RiCloseCircleFill /></button>
        <div className='sliderjobs_inner'>
            <Information Box={SlideJobsBox} inform={ishlarimiz} responce={responce} />
        </div>
    </div>
  )
}
