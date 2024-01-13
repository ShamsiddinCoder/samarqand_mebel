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
import { loginFunc, logoutFunc, signinFunc, signupFunc } from '../../Functions/Reduxes/Logins';
import {PASSWORD} from '../../StaticData/Login/login';

export default function Header() {
    const [actNavbor, setActNavbor] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navRef = useRef();
    const {count} = useSelector(select => select);
    const {newShop} = useSelector(datas => datas);
    const {auth} = useSelector(state => state.login);

    useEffect(() => {
        let navLink = Array.from(navRef.current?.children);
        navLink?.map(elem => elem.className = '');
        navLink[count.countHeader].className = 'active';
    }, [count]);
    
    useEffect(() => {
        navigate('/');
    }, []);

    useEffect(() => {
        if(localStorage.getItem('token') === PASSWORD){
            dispatch(loginFunc());
        }
    }, [auth]);
    
    const actNav = (e, index) => {
        if(e.target.id){
            setActNavbor(itm => itm = false);   
            dispatch(countHeaderFunction(e.target ? e.target.id : index));
        }
    }

    const removeAct = () => {
        navigate('/basket')
        Array.from(navRef.current?.children).map(elem => elem.className = '');
    }

    const lonOut = () => {
        localStorage.removeItem('token');
    }
    
  return (
    <div className='header'>
        <section>
            <div className='header_inner'>
                <div className='header_logo' onClick={(e) => {navigate('/'); actNav(e, 0)}}>
                    <div className='logo_img'>
                        <img src={Logo} alt='Logo' />
                    </div>
                    <h3>Logo Title</h3>
                </div>
                <div className={`header_navbor ${actNavbor ? 'active' : ''}`} onClick={(e) => actNav(e)} ref={navRef}>
                    <Link id='0' className='nav_link' to='/'>Bosh Sahifa</Link>
                    <Link id='1' className='nav_link' to='/xarid' style={{display: !auth ? 'none' : 'block'}} >Xarid qilish</Link>
                    <Link id='2' className='nav_link' to='/ishlarimiz' >Ishlarimiz</Link>
                    <Link id='3' className='nav_link' to='/service' style={{display: !auth ? 'none' : 'block'}} >Service</Link>
                    <Link id='4' className='nav_link' to='/contact' >Aloqa</Link>
                    {/* <Link id='5' >Yangiliklar</Link> */}
                </div>
                <div className='header_action'>
                    <div className='header_register'>
                        <SlUser />
                        <button style={{display: auth ? 'block' : 'none'}} onClick={() => {navigate('/'); dispatch(logoutFunc()); lonOut()}} >Chiqish</button>
                        <button onClick={() => {navigate('/login'); dispatch(signupFunc())}} style={{display: !auth ? 'block' : 'none'}} >Kirish</button>
                        /
                        <button style={{display: !auth ? 'block' : 'none'}} onClick={() => {navigate('/login'); dispatch(signinFunc())}} >Ro'yxatdan o'tish</button>
                    </div>
                    <div className='header_search'>
                        <BiSearch />
                        <div className='header_bag'>
                            <PiHandbagLight onClick={() => removeAct()} />
                            <p>{`${auth ? newShop.length : 0}`}</p>
                        </div>
                        <IoMenuSharp onClick={() => setActNavbor(act => act = !act)} />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
