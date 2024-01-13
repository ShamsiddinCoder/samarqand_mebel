import React from 'react';
import Header from '../Components/Header/Header';
import SliderJobs from '../Components/SliderJobs/SliderJobs';
import { useNavigate } from 'react-router-dom';

export default function Loyaut({children}) {
  const navigate = useNavigate();

  return (
    <>
        <Header />
        <SliderJobs  />
        {children}
    </>
  )
}
