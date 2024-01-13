import React from 'react';
import './box.scss';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { countHeaderFunction } from '../../Functions/Reduxes/CountNavReducer';

export default function Box({id, images, name, price, colors, boxWidth}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {auth} = useSelector(state => state.login);

    const boxHandler = () => {
        if(auth){
            navigate('/xarid');
            dispatch(countHeaderFunction(1));
        }else {
            alert('Siz ro\'yxatdan o\'tmagansiz iltimos ro\'yxatdan o\'ting...');
        }
    }

  return (
    <div className='box' style={{width: `${boxWidth}px`}} onClick={() => boxHandler()} >
        <div className='box_inner'>
            <div className='box_img' style={{backgroundImage: `url(${images})`}}></div>
            <div className="box_title">
                <div className='box_title_inner'>
                    <h3>{name}</h3>
                    <p>{price}</p>
                </div>
                <div className='box_colors'>
                    {
                        colors?.map((color, index) => <p key={index} style={{background: color}}></p>)
                    }
                </div>
            </div>
        </div>        
    </div>
  )
}
