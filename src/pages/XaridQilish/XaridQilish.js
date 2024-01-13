import React, {useState, useEffect} from 'react';
import './XaridQilish.scss';
import { shopKatalog } from '../../StaticData/ShopKatalog';
import BoxProduct from '../../Components/BoxProduct/BoxProduct';
import ShopChoose from '../../Components/ShopChoose/ShopChoose';
import { useSelector } from 'react-redux';

export default function XaridQilish() {
  const [countKatalog, setCountKatalog] = useState(0);
  const [shopChoose, setShopChoose] = useState(0);
  const [actChoose, setActChoose] = useState(false);
  const [actKatalog, setActkatalog] = useState(false);
  const [colorCount, setColorCount] = useState(0);
  const newShop = useSelector(datas => datas.newShop);
  const {id, linkName} = shopKatalog[countKatalog];
  const shopChooseInforms = shopKatalog[countKatalog]?.products[shopChoose];
  
  const choseHandler = (index) => {
    setShopChoose(index);
    setActChoose(act => act = !act);
  }
  
  const katalogHandler = (index) => {
    setColorCount(0);
    setShopChoose(0);
    setActkatalog(!actKatalog);
    setCountKatalog(index);
  }

  useEffect(() => {
    localStorage.setItem('newShop', JSON.stringify(newShop));
  }, [newShop]);
  
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
            <ShopChoose katalogId={id} linkNames={linkName} {...shopChooseInforms} setActChoose={setActChoose} 
              setColorCount={setColorCount} colorCount={colorCount}
            />
          </div>

          <div className='shop_lsit'>
            {
              shopKatalog[countKatalog]?.products?.map((items, index) => <BoxProduct key={index} 
                                                                                      linkNames={linkName} 
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
