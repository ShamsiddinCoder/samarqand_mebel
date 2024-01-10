import React, {useState} from 'react';
import './Services.scss';
import ServiceBox from '../../Components/ServiceBox/ServiceBox';

export default function Services() {
    const [count, setCount] = useState(0);
    const serviceHeader = ['Bepul service xizmati', 'Eski mebellarni qaytadan tamirlash', 'Mebellarni tamirlash'];

  return (
    <div className='service'>
        <section>
            <div className='service_inner'>
                <div className='service_header'>
                    {
                        serviceHeader?.map((item, index) => <button key={index} onClick={() => setCount(index)}>{item}</button>)
                    }
                </div>
                <div className='service_inputs'>
                    <ServiceBox name={serviceHeader[count]} count={count} />
                </div>
            </div>
        </section>
    </div>
  )
}
