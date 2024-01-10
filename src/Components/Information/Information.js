import React, {useState} from 'react';
import './Information.scss';
import { FaChevronRight } from "react-icons/fa";
import ResizeFunction from '../../Functions/ResiuzeFunc';

export default function Information({name = null, Box, inform, responce}) {
    const [count, setCount] = useState(0);

    const [container, target, boxWidth, itemsCount] = ResizeFunction(responce);
    
    const countHandlar = (e) => {
        if(e.target.id === 'next'){
            if((count + 1) > inform.length - itemsCount){
                setCount(counten => counten = (inform.length - itemsCount));
            }else {
                setCount(counten => counten = counten + 1);
            }
        }else {
            if((count - 1) <= 0){
                setCount(counten => counten = 0);
            }else {
                setCount(counten => counten = counten - 1);
            }
        }
    }
    
  return (
    <div className='information' ref={target}>
        <div className='information_title' style={{
            display: name ? 'block' : 'none'
        }}>
            <h1>{name}</h1>
        </div>
        <div className='information_inner' ref={container}>
            <button id='prev' className='slide_btn prev' onClick={(e) => countHandlar(e)}><FaChevronRight /></button>
            <div className='information_slider'
                style={{transform: `translateX(-${count * boxWidth}px)`}}
            >
                {
                    inform?.map((items, index) => <Box key={index} {...items} boxWidth={boxWidth} />)
                }
            </div> 
            <button id='next' className='slide_btn next' onClick={(e) => countHandlar(e)}><FaChevronRight /></button>
        </div>
    </div>
  )
}
