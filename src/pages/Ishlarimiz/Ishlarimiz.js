import React from 'react';
import './Ishlarimiz.scss';
import { ishlarimiz } from '../../StaticData/BizningIshlarimiz';
import BoxProduct from '../../Components/BoxProduct/BoxProduct';

export default function Ishlarimiz() {
    const linkNames = 'Bizning ishimiz/';
    const dirLink = '';
    const jobs = true;

  return (
    <div className='jobs'>
        <section>
            <div className='jobs_inner'>
                {
                    ishlarimiz?.map((item, index) => <BoxProduct key={index} linkNames={linkNames} dirLink={dirLink} jobs={jobs} {...item} />)
                }
            </div>
        </section>
    </div>
  )
}
