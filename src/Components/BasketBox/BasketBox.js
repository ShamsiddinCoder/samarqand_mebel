import React from 'react';
import './BasketBox.scss';
import { FaTrashAlt } from "react-icons/fa";
import { removeShop, countShop } from '../../Functions/Reduxes/ShopBasket';
import { useDispatch } from 'react-redux';

export default function BasketBox({name, linkName, dirLink, width, height, color, link, price, colorIndex, count, rem_id}) {
    const dispatch = useDispatch();
  
    let srcLink = name ? require(`../../assets/${dirLink !== '' ? linkName + dirLink + link[colorIndex] : linkName + link}`) : 'Not Found';

    const counterShop = (e) => {
      dispatch(countShop({id: rem_id, count: e.target.id}));
    }

  return (
    <div className='basketbox'>
        <div className='basketbox_img'>
            <img src={srcLink} alt='Foto' />
        </div>
        <div className='basketbox_title'>
            <div className='basketbox_item'>
              <h3>{name}</h3>
              <p>{`${width} x ${height}`}</p>
            </div>
            <div className='basketbox_inner'>
              <p>{`${count * price} $`}</p>
              <div className='basketbox_color'>
                {
                  color.length > 0 ? <span style={{background: color[colorIndex]}}></span> : <p>Not color...</p>
                }
              </div>
            </div>
            <div className='basketbox_count' onClick={(e) => counterShop(e)}>
              <button id='encrement'>+</button>
              <p>{count}</p>
              <button id='decrement'>-</button>
            </div>
            <div className='basketbox_actions'>
                <FaTrashAlt onClick={() => dispatch(removeShop(rem_id))} />
            </div>
        </div>
    </div>
  )
}
