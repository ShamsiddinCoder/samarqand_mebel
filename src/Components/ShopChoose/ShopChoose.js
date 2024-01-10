import React, {useState} from 'react';
import './ShopChoose.scss';

export default function ShopChoose({linkNames, id, dirLink, color, link, setActChoose}) {
    const [colorCount, setColorCount] = useState(0);
    let srcLink = require(`../../assets/${dirLink !== '' ? linkNames + dirLink + link[colorCount] : linkNames + link}`);
   
  return (
    <div className='choos'>
        <div className='choos_img'>
            <img src={srcLink} alt='Fotos' />
        </div>
        <div className='choos_inform'>
            <h3>Name</h3>
            <p>Width X Height</p>
            <div className='choos_color'>
                {
                    color?.length === 0 ? <p>No color</p> : color?.map((item, i) => <span key={i} style={{background: item}}
                                                                                            onClick={() => setColorCount(i)}            
                                                                                        ></span>)
                }
                
            </div>
            <div className='choos_btn'>
                <button>Xarid qilish</button>
                <button onClick={() => setActChoose(false)}>Bekor qilish</button>
            </div>
        </div>
    </div>
  )
}
