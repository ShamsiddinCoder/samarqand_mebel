import React from 'react';
import './ShopChoose.scss';
import { useDispatch, useSelector } from 'react-redux';
import { newShops } from '../../Functions/Reduxes/ShopBasket';

export default function ShopChoose({
    katalogId,
    linkNames, 
    id, 
    dirLink, 
    color, 
    link, 
    setActChoose, 
    width, 
    height, 
    price, 
    setColorCount, 
    colorCount
}) {
    const dispatch = useDispatch();
    const {newShop} = useSelector(datas => datas);
    
    let srcLink = require(`../../assets/${dirLink !== '' ? linkNames + dirLink + link[colorCount] : linkNames + link}`);

    const sendShop = () => {
        dispatch(newShops({basket_id: newShop.length, katalog_id: katalogId, id, color: colorCount, count: 1}));
        setActChoose(false);
    }

  return (
    <div className='choos'>
        <div className='choos_img'>
            <img src={srcLink} alt='Fotos' />
        </div>
        <div className='choos_inform'>
            <h3>Name</h3>
            <p>{`${width} x ${height}`}</p>
            <div className='choos_color'>
                {
                    color?.length === 0 ? <p>No color</p> : color?.map((item, i) => <span key={i} style={{background: item}}
                                                                                            onClick={() => setColorCount(i)}            
                                                                                        ></span>)
                }
                
            </div>
            <p>{`${price}$`}</p>
            <div className='choos_btn'>
                <button onClick={() => sendShop()} >Xarid qilish</button>
                <button onClick={() => setActChoose(false)}>Bekor qilish</button>
            </div>
        </div>
    </div>
  )
}
