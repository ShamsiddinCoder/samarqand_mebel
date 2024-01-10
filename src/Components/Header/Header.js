import React, {useState, useRef, useEffect} from 'react';
import './Header.scss';
import '../../App.css';
import Logo from '../../assets/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { SlUser } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import { PiHandbagLight } from "react-icons/pi";
import { IoMenuSharp } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { countHeaderFunction } from '../../Functions/Reduxes/CountNavReducer';

export default function Header() {
    const [actNavbor, setActNavbor] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navRef = useRef();
    const {count} = useSelector(select => select);

    useEffect(() => {
        let navLink = Array.from(navRef.current?.children);
        navLink?.map(elem => elem.className = '');
        navLink[count.countHeader].className = 'active';
    }, [count]);

    useEffect(() => {
        navigate('/');
    }, []);
    
    const actNav = (e) => {
        setActNavbor(itm => itm = false);   
        dispatch(countHeaderFunction(e.target ? e.target.id : e));
    }
    
  return (
    <div className='header'>
        <section>
            <div className='header_inner'>
                <div className='header_logo' onClick={() => {navigate('/'); actNav(0)}}>
                    <div className='logo_img'>
                        <img src={Logo} alt='Logo' />
                    </div>
                    <h3>Logo Title</h3>
                </div>
                <div className={`header_navbor ${actNavbor ? 'active' : ''}`} onClick={(e) => actNav(e)} ref={navRef}>
                    <Link id='0' to='/'>Bosh Sahifa</Link>
                    <Link id='1' to='/xarid'>Xarid qilish</Link>
                    <Link id='2' to='/ishlarimiz' >Ishlarimiz</Link>
                    <Link id='3' to='/service' >Service</Link>
                    <Link id='4' to='/contact' >Aloqa</Link>
                    {/* <Link id='5' >Yangiliklar</Link> */}
                </div>
                <div className='header_action'>
                    <div className='header_register'>
                        <SlUser />
                        <button>Login</button>
                        /
                        <button>Sign up</button>
                    </div>
                    <div className='header_search'>
                        <BiSearch />
                        <div className='header_bag'>
                            <PiHandbagLight />
                            <p>0</p>
                        </div>
                        <IoMenuSharp onClick={() => setActNavbor(act => act = !act)} />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
