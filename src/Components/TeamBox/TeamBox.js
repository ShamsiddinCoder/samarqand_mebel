import React from 'react';
import './TeamBox.scss';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { countHeaderFunction } from '../../Functions/Reduxes/CountNavReducer';

export default function OurTeam({boxWidth, avatar, fname, lname, lavozim, tajriba}) {
  const navigate = useNavigate();
    const dispatch = useDispatch();

    const boxHandler = () => {
        navigate('/ishlarimiz');
        dispatch(countHeaderFunction(2));
    }
  return (
    <div className='team' style={{width: boxWidth}} onClick={() => boxHandler()}>
        <div className='team_inner'>
          <div className='team_img'
            style={{
              backgroundImage: `url(${avatar})`
            }}
          ></div>
          <div className='team_title'>

            <div className='team_names'>
              <h2>{fname}</h2>
              <h2>{lname}</h2>
            </div>
            <div className='team_inform'>
              <p><span>Lavozimi: </span>{lavozim}</p>
              <p><span>Tajribasi: </span>{tajriba}</p>
            </div>
            
          </div>
        </div>
    </div>
  )
}
