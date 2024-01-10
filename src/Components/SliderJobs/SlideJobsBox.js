import React from 'react';
import './SliderJobs.scss';

export default function SlideJobsBox({boxWidth, link}) {
    
  return (
    <div style={{width: boxWidth}} className='sliderjobsbox'>
        <img src={require(`../../assets/Bizning ishimiz/${link}`)} />
    </div>
  )
}
