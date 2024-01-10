import React, {useState, useRef, useEffect} from 'react';
import './Home.scss';
import '../../App.css';
import HomeSliderComponents from '../../Components/HomeSliderComponents/HomeSliderComponents';
import { slideData } from '../../StaticData/DataSlide';
import ResizeFunction from '../../Functions/ResiuzeFunc';
import Information from '../../Components/Information/Information';
import TeamBox from '../../Components/TeamBox/TeamBox';
import Box from '../../Components/Box/box';
import { informationData } from '../../StaticData/InformationData';
import { teamDate } from '../../StaticData/TeamData';
import Xizmatlarimiz from '../../Components/Xizmatlarimiz/Xizmatlarimiz';
import { xizmatlar } from '../../StaticData/Xizmatlarimiz';

export default function Home() {
  const [indexSlide, serIndexSlide] = useState(0);
  const [xizSlide, serXizmatSlide] = useState(0);
  const btnRef = useRef();
  const xizmatBtn = useRef();

  const responce = [
    {breakpoint: {width: 0, item: 1}},
    {breakpoint: {width: 450, item: 2}},
    {breakpoint: {width: 750, item: 3}},
    {breakpoint: {width: 1050, item: 4}},
];
  
  useEffect(() => {
    Array.from(btnRef.current.children)[0].className = 'active';
    Array.from(xizmatBtn.current.children)[0].className = 'active';
  }, []);
  
  const actButtons = (e, index) => {
    serIndexSlide(index);
    Array.from(btnRef.current.children)?.map(item => item.className = '');
    e.target.className = 'active';
  }
  
  const xizmatAct = (i) => {
    serXizmatSlide(i);
    const xizmatBtnSlide = Array.from(xizmatBtn.current.children);
    xizmatBtnSlide?.map(elem => elem.className = '');
    xizmatBtnSlide[i].className = 'active';
  }
  
  const [container, target, boxWidth] = ResizeFunction();

  return (
    <div className='home'ref={target}>
      <section>
        <div className='home_inner' ref={container}>
          <div className='home_slide'
            style={{transform: `translateX(-${indexSlide * boxWidth}px)`}}
          >
            {
              slideData?.map(item => <HomeSliderComponents key={item.id} {...item} boxWidth={boxWidth} />)
            }
          </div>

          <div className='home_buttons' ref={btnRef}>
            {
              slideData?.map((elem, index) => <button key={elem.id} onClick={(e) => actButtons(e, index)}></button>)
            }
          </div>
        </div>
      </section>

      <div className='home_pages maxsulot'>
        <section>
          <Information name='Maxsulotlarimiz' Box={Box} inform={informationData} responce={responce} />
        </section>
      </div>

      <div className='home_pages'>
        <section>
          <Information name='Bizning jamoa' Box={TeamBox} inform={teamDate} responce={responce} />
        </section>
      </div>

      <div className='home_pages xizmat'>
        <section>
            <h2 className='home_pages_title_name'>Bizning Xizmatlarimiz</h2>
            <div className='home_xizmat_inner'>
              <div className='home_xizmat_slide'
                style={{transform: `translate(-${xizSlide * boxWidth}px)`}}
              >
                {
                  xizmatlar?.map((element, index) => <Xizmatlarimiz key={index} {...element} boxWidth={boxWidth} />)
                }
              </div>
              <div className='home_xizmat_btn' ref={xizmatBtn}>
                {
                  xizmatlar?.map((elem, i) => <button key={i} onClick={() => xizmatAct(i)}></button>)
                }
              </div>
            </div>
        </section>
      </div>
    </div>
  )
}
