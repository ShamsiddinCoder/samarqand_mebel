import React, {useState, useRef, useEffect} from 'react';
import './ServiceBox.scss';
import Boxes from './Boxes';
import { teamDate } from '../../StaticData/TeamData';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { freeServece, restoration, tamirlash } from '../../Functions/Reduxes/Arizalar';
import { countHeaderFunction } from '../../Functions/Reduxes/CountNavReducer';
import { IoClose } from "react-icons/io5";

export default function ServiceBox({name, count}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {fressServices, restorations, tamirlaymiz} = useSelector(select => select.ariza);
    const inputRef = useRef();
    const [chose, setChose] = useState(null);
    const [actChousen, setActChousen] = useState(false);
    let sendDatas = count === 0 ? freeServece : count === 1 ? restoration : tamirlash;
    const [datesUsta, setDatesUsta] = useState({
        fname: '',
        lname: '',
        telefon: '',
        ariza: '',
        id: count === 0 ? fressServices.length : count === 1 ? restorations.length : tamirlaymiz.length,
        id_usta: null
    });
    
    useEffect(() => {
        setDatesUsta({
            ...datesUsta,
            fname: '',
            lname: '',
            telefon: '',
            ariza: '',
            id: count === 0 ? fressServices.length : count === 1 ? restorations.length : tamirlaymiz.length,
            id_usta: null
        })
    }, [count]);

    const changeDataUsta = (e) => {
        setDatesUsta({
            ...datesUsta, [e.target.name]: e.target.value
        });
    }
    
    const sendNewData = () => {
        
        let inputs = Array.from(Array.from(inputRef.current.children)
                        .map(item => item.name ? item : Array.from(item.children)[0].name ? Array.from(item.children)[0] : null));
        
        let dataUstalar = Object.entries(datesUsta);

        let a = dataUstalar.every(elem => {return elem[1] !== ''});
        if(a){
            dispatch(sendDatas(datesUsta));
        }
        
        dataUstalar.map((items, index) => {
            if(index <= 3){
                if(items[1] === ''){
                    inputs[index].style.border = 'solid 2px crimson';
                }else {
                    inputs[index].style.border = '';
                }
            }
            return items
        });
    }

  return (
    <div className='service_box'>
        <h2>{name}</h2>
        <div className='service_box_inputs' ref={inputRef} onChange={(e) => changeDataUsta(e)}>
            <input name='fname' type='text' placeholder='Fname' value={datesUsta.fname} />
            <input name='lname' type='text' placeholder='Lname' value={datesUsta.lname} />
            <div className='service_box_choose'>
                <input name='telefon' type='number' placeholder='Telefon' value={datesUsta.telefon} />
                <div className='service_box_usta'>
                    <div className='service_box_usta_img'>
                        <img src={teamDate[chose]?.avatar}  style={{display: !chose ? 'none' : 'flex'}} alt='Fotos'/>
                    </div>
                    <div className='service_box_usta_title'>
                        {
                            !chose ? <h2>Usta tanlang...</h2> :
                            <>
                                <h4>{`${teamDate[chose]?.fname} ${teamDate[chose]?.lname}`}</h4>
                                <p>{`${teamDate[chose]?.lavozim} ${teamDate[chose]?.tajriba}`}</p>
                            </>
                        }
                    </div>
                    <button className='service_buttons' onClick={() => setActChousen(!actChousen)}>...</button>
                </div>
                <div className='service_box_chousen' style={{
                    width: actChousen ? `16.2rem` : '0rem',
                    padding: actChousen ? '.6rem' : '0rem',
                    border: actChousen ? 'solid 1px #ccc' : ''
                }}>
                    <div className='service_box_close' onClick={() => setActChousen(false)}>
                        <IoClose />
                    </div>
                    {
                        teamDate?.map((elem, index) => <Boxes key={index} {...elem} 
                                        index={index} setChose={setChose} 
                                        setActChousen={setActChousen} setDatesUsta={setDatesUsta} />)
                    }
                </div>
            </div>
            <textarea className='service_posts' name='ariza' value={datesUsta.ariza} />
            <div className='service_box_btns'>
                <button className='service_buttons btn-1' onClick={() => {dispatch(countHeaderFunction(0)); navigate('/')}}>Bekor qilish</button>
                <button className='service_buttons btn-2' onClick={() => sendNewData()}>Ariza qoldirish</button>
            </div>
        </div>
    </div>
  )
}
