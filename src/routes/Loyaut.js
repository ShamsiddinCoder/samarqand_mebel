import React from 'react';
import Header from '../Components/Header/Header';
import SliderJobs from '../Components/SliderJobs/SliderJobs';

export default function Loyaut({children}) {

  return (
    <>
        <Header />
        <SliderJobs  />
        {children}
    </>
  )
}
