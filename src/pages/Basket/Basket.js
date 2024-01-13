import React, { useEffect } from 'react';
import './Basket.scss';
import { useSelector } from 'react-redux';
import { shopKatalog } from '../../StaticData/ShopKatalog';
import BasketBox from '../../Components/BasketBox/BasketBox';

export default function Basket() {
    const newShop = useSelector(datas => datas.newShop);
    const {auth} = useSelector(state => state.login);

    useEffect(() => {
        localStorage.setItem('newShop', JSON.stringify(newShop));
      }, [newShop]);
    
    let basketBoxes = newShop?.map(elem => {
        return shopKatalog?.map(item => {
            if(elem.katalog_id === item.id){
                return item.products?.map((data, i) => {
                    if(data.id === elem.id){
                        return <BasketBox key={i}
                                    colorIndex={elem.color} 
                                    linkName={item.linkName} 
                                    name={item.name} {...data} count={elem.count} rem_id={elem.basket_id} />
                    }
                });
            }
        });
    });
    
  return (
    <div className='basket'>
        <section>
            <div className='basket_box'>
                {
                    !auth ? <h3>Siz ro'yxatdan o'tmagansiz! Iltimos ro'yxatdan o'ting...</h3> : newShop.length === 0 ? <h4>Xridlar yo'q...</h4> : basketBoxes
                }
            </div>
        </section>
    </div>
  )
}
