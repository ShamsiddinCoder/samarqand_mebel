import React, {useState} from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginFunc, signinFunc } from '../../Functions/Reduxes/Logins';
import { LOGIN, PASSWORD } from '../../StaticData/Login/login';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {sign} = useSelector(state => state.login);
    const [authIn, setAuthIn] = useState({
        lname: '',
        passwordin: ''
    })

    const authIntikation = () => {
        if(authIn.lname === '' || authIn.passwordin === ''){
            alert('Iltimos formani to\'ldiring...')
        } else {
            if(authIn.lname !== LOGIN || authIn.passwordin !== PASSWORD){
                alert('Ism yoki parol noto\'g\'ri iltimos tekshirib qaytadan to\'ldiring...')
            }else {
                console.log('ok');
                dispatch(loginFunc());
                localStorage.setItem('token', authIn.passwordin);
                navigate('/');
            }
        }
    }
    
  return (
    <div className='login'>
        <section>
            <div className='login_inner'>
                <div className='login_inputs' onChange={(e) => setAuthIn({...authIn, [e.target.name]: e.target.value})}>
                    <input type='text' name='fname' placeholder='Familya' style={{display: !sign ? 'none' : 'block'}} />
                    <input type='text' name='lname' placeholder='Ism'  />
                    <input type='password' name='passwordin' placeholder='Parol' />
                    <input type='password' name='passwordrepeat' placeholder='Parolni tasdiqlang' style={{display: !sign ? 'none' : 'block'}} />
                </div>
                <div className='login_btn'>
                    <button style={{display: sign ? 'none' : 'block'}} onClick={() => {authIntikation()}} >Kirish</button>
                    <button style={{display: !sign ? 'none' : 'block'}} >Ro'yxatdan o'tish</button>
                    <button onClick={() => navigate('/')}>Bekor qilish</button>
                </div>
                <Link onClick={() => dispatch(signinFunc())} style={{display: sign ? 'none' : 'block'}} >Ro'yxatdan o'tish</Link>
            </div>            
        </section>
    </div>
  )
}
