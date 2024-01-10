import React, {useState} from 'react';
import './XaridQilish.scss';
import { shopKatalog } from '../../StaticData/ShopKatalog';
import BoxProduct from '../../Components/BoxProduct/BoxProduct';
import ShopChoose from '../../Components/ShopChoose/ShopChoose';

export default function XaridQilish() {
  const [countKatalog, setCountKatalog] = useState(1);
  const [shopChoose, setShopChoose] = useState(0);
  const [actChoose, setActChoose] = useState(false);
  const [actKatalog, setActkatalog] = useState(false);
  const linkNames = shopKatalog[countKatalog].linkName;
  const shopChooseInforms = shopKatalog[countKatalog]?.products[shopChoose];

  const choseHandler = (index) => {
    setShopChoose(index);
    setActChoose(act => act = !act);
  }
  
  const katalogHandler = (index) => {
    setActkatalog(!actKatalog);
    setCountKatalog(index);
  }
  
  return (
    <div className='shop'>
      <section>
        <div className='shop_inner'>

          <div className='shop_header'>
            <h2 onClick={() => setActkatalog(!actKatalog)}>Katalog</h2>
            <div className='shop_header_inner'
              style={{
                maxHeight: actKatalog ? '100vh' : ''
              }}
            >
              {
                shopKatalog?.map((items, index) => <button key={index} 
                                                    className='shop_btns' 
                                                    onClick={() => katalogHandler(index)} >{items.name}</button>)
              }
            </div>
          </div>

          <div className='shop_choos'
            style={{height: actChoose ? '100%' : '0'}}
          >
            <ShopChoose linkNames={linkNames} {...shopChooseInforms} setActChoose={setActChoose} />
          </div>

          <div className='shop_lsit'>
            {
              shopKatalog[countKatalog]?.products?.map((items, index) => <BoxProduct key={index} 
                                                                                      linkNames={linkNames} 
                                                                                      {...items} 
                                                                                      index={index}
                                                                                      choseHandler={choseHandler} />)
            }
          </div>

        </div>
      </section>
    </div>
  )
}
